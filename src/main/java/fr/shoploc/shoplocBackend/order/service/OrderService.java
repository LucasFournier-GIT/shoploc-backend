package fr.shoploc.shoplocBackend.order.service;

import fr.shoploc.shoplocBackend.common.methods.Common;
import fr.shoploc.shoplocBackend.common.models.Order;
import fr.shoploc.shoplocBackend.common.models.Product;
import fr.shoploc.shoplocBackend.common.models.ProductInCart;
import fr.shoploc.shoplocBackend.dto.OrderDTO;
import fr.shoploc.shoplocBackend.dto.ProductDTO;
import fr.shoploc.shoplocBackend.order.repository.OrderRepository;
import fr.shoploc.shoplocBackend.product.repository.ProductRepository;
import fr.shoploc.shoplocBackend.productInCart.service.ProductInCartService;
import org.springframework.stereotype.Service;

import java.util.ArrayList;
import java.util.HashMap;
import java.util.List;
import java.util.Map;
import java.util.stream.Collectors;

@Service
public class OrderService {
    private final Common common;
    private final OrderRepository orderRepository;
    private final ProductRepository productRepository;
    private final ProductInCartService productInCartService;

    public OrderService(Common common, OrderRepository orderRepository, ProductRepository productRepository, ProductInCartService productInCartService) {
        this.common = common;
        this.orderRepository = orderRepository;
        this.productRepository = productRepository;
        this.productInCartService = productInCartService;
    }

    public List<OrderDTO> getOrders(String token) throws Exception {
        Long shopId = common.getUserId(token);
        List<Order> orders = orderRepository.findByShopId(shopId);
        List<ProductInCart> productInCarts = productInCartService.getShopCarts(token);

        // Create a map to store the products for each order
        Map<Long, List<ProductDTO>> orderProductsMap = new HashMap<>();

        // Populate the map
        for (ProductInCart productInCart : productInCarts) {
            // Get the product details
            Product product = productRepository.findById(productInCart.getIdProduct()).orElseThrow(() -> new Exception("Produit non trouvé."));

            // Create a new ProductDTO and set its attributes
            ProductDTO productDTO = new ProductDTO();
            productDTO.setId(product.getId());
            productDTO.setProductName(product.getName());
            productDTO.setPrice(product.getPrice());
            productDTO.setQuantity(productInCart.getQuantity());
            productDTO.setImageUrl(product.getImageUrl());

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

            // Add the products to the OrderDTO
            orderDTO.setProducts(orderProductsMap.get(order.getId()));

            return orderDTO;
        }).collect(Collectors.toList());
    }
}
