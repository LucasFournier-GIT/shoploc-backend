package fr.shoploc.shoplocBackend.productInCart.service;

import fr.shoploc.shoplocBackend.common.methods.Common;
import fr.shoploc.shoplocBackend.common.models.Product;
import fr.shoploc.shoplocBackend.common.models.ProductInCart;
import fr.shoploc.shoplocBackend.common.models.Shop;
import fr.shoploc.shoplocBackend.dto.ProductDTO;
import fr.shoploc.shoplocBackend.dto.CartDTO;
import fr.shoploc.shoplocBackend.product.repository.ProductRepository;
import fr.shoploc.shoplocBackend.productInCart.repository.ProductInCartRepository;
import fr.shoploc.shoplocBackend.product.controller.ProductController;
import fr.shoploc.shoplocBackend.shop.service.ShopService;
import org.springframework.stereotype.Service;

import java.util.*;
import java.util.stream.Collectors;

@Service
public class ProductInCartService {

    private final ProductInCartRepository productInCartRepository;
    private final ProductRepository productRepository;
    private final ProductController productController;
    private final Common common;
    private final ShopService shopService;

    public ProductInCartService(ProductInCartRepository productInCartRepository, ProductRepository productRepository, ProductController productController, Common common, ShopService shopService){
        this.productInCartRepository = productInCartRepository;
        this.productRepository = productRepository;
        this.productController = productController;
        this.common = common;
        this.shopService = shopService;
    }
    public void addProductToCart(Long idProduct, String token) throws Exception {
        Long userId = common.getUserId(token);

        List<ProductInCart> existingProductInCart = productInCartRepository.findByIdUserAndIdProduct(userId, idProduct);

        ProductInCart productInCart;
        if (!existingProductInCart.isEmpty()) {
            productInCart = existingProductInCart.get(0);
            productInCart.setQuantity(productInCart.getQuantity() + 1);
        } else {
            productInCart = new ProductInCart(idProduct, userId);
        }
        productInCartRepository.save(productInCart);
    }

    public void removeProductToCart(Long idProduct, String token) throws Exception {
        Long userId = common.getUserId(token);
        List<ProductInCart> existingProductInCart = productInCartRepository.findByIdUserAndIdProduct(userId, idProduct);

        if (!existingProductInCart.isEmpty()) {
            ProductInCart productInCart = existingProductInCart.get(0);
            if (productInCart.getQuantity() > 1) {
                productInCart.setQuantity(productInCart.getQuantity() - 1);
                productInCartRepository.save(productInCart);
            } else {
                productInCartRepository.deleteByIdProductAndIdUser(idProduct, userId);
            }
        } else {
            throw new Exception("Produit non trouvé dans le panier.");
        }
    }

    public List<CartDTO> getUserCarts(String token) throws Exception {
        Long userId = common.getUserId(token);

        List<ProductInCart> productInCartList = productInCartRepository.findAllByIdUser(userId);
        return getCarts(productInCartList);
    }

    public List<ProductInCart> getShopCarts(String token) throws Exception {
        Long userId = common.getUserId(token);
        List<Long> productIds = new ArrayList<>();
        productRepository.findAllByShopId(userId).forEach(product -> productIds.add(product.getId()));

        return productInCartRepository.findByIdProductIn(productIds);
    }
    
    private List<CartDTO> getCarts(List<ProductInCart> productInCartList) {
        Map<Long, CartDTO> cartsByShop = new HashMap<>();
        for (ProductInCart productInCart : productInCartList) {
            Product product = productController.getProductById(productInCart.getIdProduct());
            Long shopId = product.getShopId();

            Shop shop = shopService.getShopById(shopId);

            ProductDTO productDTO = new ProductDTO();
            productDTO.setId(product.getId());
            productDTO.setName(product.getName());
            productDTO.setDescription(product.getDescription());
            productDTO.setAvailability(product.getAvailability());
            productDTO.setPrice(product.getPrice());
            productDTO.setQuantity(productInCart.getQuantity());
            productDTO.setImageUrl(product.getImageUrl());

            CartDTO cartDTO = cartsByShop.get(shopId);
            if (cartDTO == null) {
                cartDTO = new CartDTO();
                cartDTO.setId(productInCart.getId());
                cartDTO.setShopId(shopId);
                cartDTO.setShopName(shop.getName());
                cartsByShop.put(shopId, cartDTO);
            }
            cartDTO.getProducts().add(productDTO);
        }
        return new ArrayList<>(cartsByShop.values());
    }

    public List<CartDTO> getShopCartsForUser(String token, Long shopId) throws Exception {
    List<CartDTO> allCarts = getUserCarts(token);

        return allCarts.stream()
        .filter(cart -> cart.getShopId().equals(shopId))
        .collect(Collectors.toList());
}
}
