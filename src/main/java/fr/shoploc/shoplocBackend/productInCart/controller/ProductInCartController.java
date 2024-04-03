package fr.shoploc.shoplocBackend.productInCart.controller;

import fr.shoploc.shoplocBackend.productInCart.service.ProductInCartService;
import org.springframework.http.HttpStatus;
import org.springframework.http.ResponseEntity;
import org.springframework.web.bind.annotation.*;

@RestController
@RequestMapping("/api/product_in_cart")
public class ProductInCartController {

    private final ProductInCartService productInCartService;

    public ProductInCartController(ProductInCartService productInCartService){
        this.productInCartService = productInCartService;
    }

    @PostMapping("/add/{idProduct}")
    public ResponseEntity<String> addProductToCart(
            @PathVariable(name = "idProduct") Long idProduct, @RequestHeader("Authorization") String authorizationHeader){
        String token = authorizationHeader.substring(7);
        try {
            productInCartService.addProductToCart(idProduct, token);
            return ResponseEntity.ok("Produit ajouté au panier.");
        } catch (Exception e) {
            System.out.println(e.getMessage());
            return ResponseEntity.status(HttpStatus.INTERNAL_SERVER_ERROR).body(e.getMessage());
        }
    }

    @DeleteMapping("/remove/{idProduct}")
    public ResponseEntity<String> removeProductToCart(
            @PathVariable(name = "idProduct") Long idProduct, @RequestHeader("Authorization") String authorizationHeader){
        String token = authorizationHeader.substring(7);
        try {
            productInCartService.removeProductToCart(idProduct, token);
            return ResponseEntity.ok("Produit retiré du panier.");
        } catch (Exception e) {
            System.out.println(e.getMessage());
            return ResponseEntity.status(HttpStatus.INTERNAL_SERVER_ERROR).body(e.getMessage());
        }
    }

    @GetMapping
    public ResponseEntity<Object> getProductsInCart(@RequestHeader("Authorization") String authorizationHeader){
        String token = authorizationHeader.substring(7);
        try {
            return ResponseEntity.ok().body(productInCartService.getUserCarts(token));
        } catch (Exception e) {
            System.out.println(e.getMessage());
            return ResponseEntity.status(HttpStatus.INTERNAL_SERVER_ERROR).body(e.getMessage());
        }
    }
}
