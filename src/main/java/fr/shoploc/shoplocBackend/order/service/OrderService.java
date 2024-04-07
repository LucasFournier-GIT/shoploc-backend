package fr.shoploc.shoplocBackend.order.service;

import fr.shoploc.shoplocBackend.common.methods.Common;
import fr.shoploc.shoplocBackend.common.models.Order;
import fr.shoploc.shoplocBackend.common.models.Product;
import fr.shoploc.shoplocBackend.common.models.ProductInCart;
import fr.shoploc.shoplocBackend.common.models.Shop;
import fr.shoploc.shoplocBackend.dto.*;
import fr.shoploc.shoplocBackend.order.repository.OrderRepository;
import fr.shoploc.shoplocBackend.product.repository.ProductRepository;
import fr.shoploc.shoplocBackend.productInCart.repository.ProductInCartRepository;
import fr.shoploc.shoplocBackend.productInCart.service.ProductInCartService;
import fr.shoploc.shoplocBackend.shop.repository.ShopRepository;
import jakarta.transaction.Transactional;
import org.springframework.stereotype.Service;

import java.lang.reflect.Field;
import java.util.*;
import java.util.stream.Collectors;

@Service
public class OrderService {
    private final Common common;
    private final OrderRepository orderRepository;
    private final ProductRepository productRepository;
    private final ProductInCartService productInCartService;
    private final ShopRepository shopRepository;
    private final ProductInCartRepository productInCartRepository;

    public OrderService(Common common, OrderRepository orderRepository, ProductRepository productRepository, ProductInCartService productInCartService, ShopRepository shopRepository, ProductInCartRepository productInCartRepository) {
        this.common = common;
        this.orderRepository = orderRepository;
        this.productRepository = productRepository;
        this.productInCartService = productInCartService;
        this.shopRepository = shopRepository;
        this.productInCartRepository = productInCartRepository;
    }

    public List<OrderDTO> getShopOrders(String token) throws Exception {
        Long shopId = common.getUserId(token);
        List<Order> orders = orderRepository.findByShopId(shopId);
        List<ProductInCart> productInCarts = productInCartService.getShopCarts(token);

        // Create a map to store the products for each order
        Map<Long, List<ProductDTO>> orderProductsMap = new HashMap<>();
        Map<Long, Long> orderUserMap = new HashMap<>();

        // Populate the map
        for (ProductInCart productInCart : productInCarts) {
            // Get the product details
            Product product = productRepository.findById(productInCart.getIdProduct()).orElseThrow(() -> new Exception("Produit non trouvé."));

            // Create a new ProductDTO and set its attributes
            ProductDTO productDTO = new ProductDTO();
            productDTO.setId(product.getId());
            productDTO.setName(product.getName());
            productDTO.setDescription(product.getDescription());
            productDTO.setAvailability(product.getAvailability());
            productDTO.setPrice(product.getPrice());
            productDTO.setQuantity(productInCart.getQuantity());
            productDTO.setImageUrl(product.getImageUrl());

            orderUserMap.computeIfAbsent(productInCart.getIdOrder(), k -> productInCart.getIdUser());

            // Add the ProductDTO to the order's list in the map
            orderProductsMap.computeIfAbsent(productInCart.getIdOrder(), k -> new ArrayList<>()).add(productDTO);
        }

        // Create the OrderDTOs
        return orders.stream().map(order -> {
            OrderDTO orderDTO = new OrderDTO();
            orderDTO.setId(order.getId());
            orderDTO.setStatus(order.getStatus());
            orderDTO.setDate(order.getDate());
            orderDTO.setPaid(order.getPaid());
            orderDTO.setAmount(order.getAmount());

            orderDTO.setIdUser(orderUserMap.get(order.getId()));

            // Add the products to the OrderDTO
            orderDTO.setProducts(orderProductsMap.get(order.getId()));

            return orderDTO;
        }).collect(Collectors.toList());
    }

    @Transactional
    public void deleteOrder(Long idOrder) {
        productInCartRepository.deleteByIdOrder(idOrder);
        orderRepository.deleteById(idOrder);
    }

    public List<UserOrderDTO> getUserOrders(String token) throws Exception {
        Long userId = common.getUserId(token);
        List<ProductInCart> productInCarts = productInCartRepository.findAllByIdUser(userId);

        Map<Long, List<ShopDTO>> orderShopMap = new HashMap<>();
        Set<Order> orders = new HashSet<>();

        for (ProductInCart productInCart : productInCarts) {
            Product product = productRepository.findById(productInCart.getIdProduct()).orElseThrow(() -> new Exception("Produit non trouvé."));
            Shop shop = shopRepository.findById(product.getShopId()).orElseThrow(() -> new Exception("Magasin non trouvé."));
            ShopDTO shopDTO = new ShopDTO();
            shopDTO.setId(shop.getId());
            shopDTO.setShopName(shop.getName());
            shopDTO.setOpeningHours(shop.getOpening_hours());
            shopDTO.setGpsCoordinates(shop.getGps_coordinates());

            if(productInCart.getIdOrder() == null) {
                continue;
            }
            orders.add(orderRepository.findById(productInCart.getIdOrder()).orElseThrow(() -> new Exception("Commande non trouvée.")));
            if (orderShopMap.containsKey(productInCart.getIdOrder())) {
                List<ShopDTO> shops = orderShopMap.get(productInCart.getIdOrder());
                if (shops.stream().noneMatch(existingShop -> existingShop.getId().equals(shopDTO.getId()))) {
                    shops.add(shopDTO);
                }
            } else {
                List<ShopDTO> shops = new ArrayList<>();
                shops.add(shopDTO);
                orderShopMap.put(productInCart.getIdOrder(), shops);
            }
        }

        return orders.stream().map(order -> {
            UserOrderDTO userOrderDTO = new UserOrderDTO();
            userOrderDTO.setId(order.getId());
            userOrderDTO.setStatus(order.getStatus());
            userOrderDTO.setDate(order.getDate());

            List<ShopDTO> shops = orderShopMap.get(order.getId());
            userOrderDTO.setShops(new ArrayList<>(shops));

            return userOrderDTO;
        }).collect(Collectors.toList());
    }

    public Order updateOrder(Long idOrder, Order order) throws Exception {
        Order orderToUpdate = orderRepository.findById(idOrder).orElse(null);
        if (orderToUpdate != null) {
            for (Field field : Order.class.getDeclaredFields()) {
                field.setAccessible(true);
                Object newValue = field.get(order);
                if (newValue != null) {
                    field.set(orderToUpdate, newValue);
                }
            }
            return orderRepository.save(orderToUpdate);
        }
        throw new Exception("Product not found");
    }

    public Object createOrder(Order order, String token) throws Exception {
        Long userId = common.getUserId(token);
        List<Product> products = productRepository.findAllByShopId(order.getShopId());
        List<Long> productIds = products.stream().map(Product::getId).collect(Collectors.toList());
        List<ProductInCart> productInCarts = productInCartRepository.findByIdUserAndIdProductIn(userId, productIds);

        if (productInCarts.isEmpty()) {
            throw new Exception("Aucun panier enregistré pour cet utilisateur.");
        }

        Order savedOrder = orderRepository.save(order);

        for (ProductInCart productInCart : productInCarts) {
            productInCart.setIdOrder(savedOrder.getId());
            productInCartRepository.save(productInCart);
        }

        return savedOrder;
    }
}
