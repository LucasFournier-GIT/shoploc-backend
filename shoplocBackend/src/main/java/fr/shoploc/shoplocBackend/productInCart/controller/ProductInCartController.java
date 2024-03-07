package fr.shoploc.shoplocBackend.productInCart.controller;

import fr.shoploc.shoplocBackend.common.dto.ProductDTO;
import fr.shoploc.shoplocBackend.productInCart.service.ProductInCartService;
import org.springframework.http.HttpStatus;
import org.springframework.http.ResponseEntity;
import org.springframework.web.bind.annotation.*;

import java.util.HashMap;
import java.util.List;
import java.util.Map;


@RestController
@RequestMapping("/api/product_in_cart")
public class ProductInCartController {

    private final ProductInCartService productInCartService;

    public ProductInCartController(ProductInCartService productInCartService){
        this.productInCartService = productInCartService;
    }

    @PostMapping("/add/{idProduct}")
    public String addProductToCart(
            @PathVariable(name = "idProduct") Long idProduct, @RequestHeader("Authorization") String authorizationHeader){
        String token = authorizationHeader.substring(7);
        try {
            productInCartService.addProductToCart(idProduct, token);
            return "Produit ajouté au panier.";
        } catch (Exception e) {
            return HttpStatus.INTERNAL_SERVER_ERROR + e.getMessage();
        }
    }

    @DeleteMapping("/remove/{idProduct}")
    public ResponseEntity<Object> removeProductToCart(
            @PathVariable(name = "idProduct") Long idProduct, @RequestHeader("Authorization") String authorizationHeader){
        String token = authorizationHeader.substring(7);
        try {
            productInCartService.removeProductToCart(idProduct, token);
            return ResponseEntity.ok("Produit retiré du panier.");
        } catch (Exception e) {
            return ResponseEntity.status(HttpStatus.INTERNAL_SERVER_ERROR).body(e.getMessage());
        }
    }

    @GetMapping
    public Map<Long, List<HashMap<ProductDTO, Integer>>> getProductsInCart(@RequestHeader("Authorization") String authorizationHeader){
        String token = authorizationHeader.substring(7);
        try {
            Map<Long, List<HashMap<ProductDTO, Integer>>> carts = productInCartService.getCarts(token);
            System.out.println("9a passee");
            return carts;
        } catch (Exception e) {
            return null;
        }
    }
}
