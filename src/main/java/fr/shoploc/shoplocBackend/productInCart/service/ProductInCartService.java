package fr.shoploc.shoplocBackend.productInCart.service;

import fr.shoploc.shoplocBackend.common.models.Product;
import fr.shoploc.shoplocBackend.common.models.ProductInCart;
import fr.shoploc.shoplocBackend.common.models.Shop;
import fr.shoploc.shoplocBackend.config.JwtService;
import fr.shoploc.shoplocBackend.dto.ProductDTO;
import fr.shoploc.shoplocBackend.dto.ShopDTO;
import fr.shoploc.shoplocBackend.productInCart.repository.ProductInCartRepository;
import fr.shoploc.shoplocBackend.product.controller.ProductController;
import fr.shoploc.shoplocBackend.shop.controller.ShopController;
import fr.shoploc.shoplocBackend.usermanager.user.User;
import fr.shoploc.shoplocBackend.usermanager.user.UserService;
import org.springframework.stereotype.Service;

import java.util.*;

@Service
public class ProductInCartService {

    private final ProductInCartRepository productInCartRepository;
    private final ProductController productController;
    private final JwtService jwtService;
    private final UserService userService;
    private final ShopController shopController;

    public ProductInCartService(ProductInCartRepository productInCartRepository, ProductController productController, JwtService jwtService, UserService userService, ShopController shopController){
        this.productInCartRepository = productInCartRepository;
        this.productController = productController;
        this.jwtService = jwtService;
        this.userService = userService;
        this.shopController = shopController;
    }
    public void addProductToCart(Long idProduct, String token) throws Exception {
        Long userId = getUserId(token);

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
        Long userId = getUserId(token);
        productInCartRepository.deleteByIdProductAndIdUser(idProduct, userId);
    }

    public List<ShopDTO> getCarts(String token) throws Exception {
        Long userId = getUserId(token);

        List<ProductInCart> productInCartList = productInCartRepository.findAllByIdUser(userId);

        Map<Long, ShopDTO> cartsByShop = new HashMap<>();
        for (ProductInCart productInCart : productInCartList) {
            Product product = productController.getProductById(productInCart.getIdProduct());
            Long shopId = product.getShopId();

            if (shopController.getShopById(shopId).isEmpty()) {
                throw new Exception("Magasin introuvable.");
            }

            Shop shop = shopController.getShopById(shopId).get();

            ProductDTO productDTO = new ProductDTO();
            productDTO.setId(product.getId());
            productDTO.setProductName(product.getName());
            productDTO.setPrice(product.getPrice());
            productDTO.setQuantity(productInCart.getQuantity());
            productDTO.setImageUrl(product.getImageUrl());

            ShopDTO shopDTO = cartsByShop.get(shopId);
            if (shopDTO == null) {
                shopDTO = new ShopDTO();
                shopDTO.setId(shop.getId());
                shopDTO.setShopName(shop.getName());
                cartsByShop.put(shopId, shopDTO);
            }
            shopDTO.getProducts().add(productDTO);
        }

        return new ArrayList<>(cartsByShop.values());
    }


    public Long getUserId(String token) throws Exception {
        String userEmail = jwtService.extractUserEmail(token);
        Optional<User> user = userService.findUserByEmail(userEmail);
        if (user.isPresent()) {
            return user.get().getId();
        } else {
            throw new Exception("Utilisateur introuvable.");
        }
    }
}
