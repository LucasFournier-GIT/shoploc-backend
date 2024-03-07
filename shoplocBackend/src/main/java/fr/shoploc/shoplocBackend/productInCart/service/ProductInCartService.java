package fr.shoploc.shoplocBackend.productInCart.service;

import com.fasterxml.jackson.databind.ObjectMapper;
import fr.shoploc.shoplocBackend.common.dto.ProductDTO;
import fr.shoploc.shoplocBackend.common.models.Product;
import fr.shoploc.shoplocBackend.common.models.ProductInCart;
import fr.shoploc.shoplocBackend.config.JwtService;
import fr.shoploc.shoplocBackend.productInCart.repository.ProductInCartRepository;
import fr.shoploc.shoplocBackend.product.controller.ProductController;
import fr.shoploc.shoplocBackend.usermanager.user.User;
import fr.shoploc.shoplocBackend.usermanager.user.UserService;
import org.modelmapper.ModelMapper;
import org.springframework.stereotype.Service;

import java.util.*;

@Service
public class ProductInCartService {

    private final ProductInCartRepository productInCartRepository;
    private final ProductController productController;
    private final JwtService jwtService;
    private final UserService userService;
    private static final ModelMapper modelMapper = new ModelMapper();
    private static final ObjectMapper objetMapper = new ObjectMapper();

    public ProductInCartService(ProductInCartRepository productInCartRepository, ProductController productController, JwtService jwtService, UserService userService){
        this.productInCartRepository = productInCartRepository;
        this.productController = productController;
        this.jwtService = jwtService;
        this.userService = userService;
    }
    public void addProductToCart(Long idProduct, String token) throws Exception {
        Long userId = getUserId(token);
        ProductInCart productInCart = new ProductInCart(idProduct, userId);
        productInCartRepository.save(productInCart);
    }

    public void removeProductToCart(Long idProduct, String token) throws Exception {
        Long userId = getUserId(token);
        productInCartRepository.deleteByProductIdAndUserId(idProduct, userId);
    }

    public Map<Long, List<HashMap<ProductDTO, Integer>>> getCarts(String token) throws Exception {
        Long userId = getUserId(token);
        System.out.println("Id user : ");
        System.out.println(userId);

        List<ProductInCart> productInCartList = productInCartRepository.findAll();
        System.out.println("Product in cart list : ");
        System.out.println(productInCartList);

        Map<Long, List<HashMap<ProductDTO, Integer>>> cartsByShop = new HashMap<>();

        for (ProductInCart productInCart : productInCartList) {
            Product product = productController.getProductById(productInCart.getIdProduct());
            System.out.println("Product brut : ");
            System.out.println(product);
            ProductDTO productDTO = convertToDTO(product);
            System.out.println("Product DTO : ");
            System.out.println(productDTO);

            Long shopId = product.getIdMagasin();

            HashMap<ProductDTO, Integer> productsWithQuantity = new HashMap<>();
            productsWithQuantity.put(productDTO, productInCart.getQuantity());
            System.out.println(productsWithQuantity);

            List<HashMap<ProductDTO, Integer>> shopCarts = cartsByShop.computeIfAbsent(shopId, k -> new ArrayList<>());

            shopCarts.add(productsWithQuantity);
            System.out.println(shopCarts);
        }

        return cartsByShop;
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

    public ProductDTO convertToDTO(Product product) {
        return modelMapper.map(product, ProductDTO.class);
    }
}
