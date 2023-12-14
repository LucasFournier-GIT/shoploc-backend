package fr.shoploc.shoplocBackend.productInCart.controller;

import fr.shoploc.shoplocBackend.common.models.Product;
import fr.shoploc.shoplocBackend.common.models.Shop;
import fr.shoploc.shoplocBackend.productInCart.service.ProductInCartService;
import org.springframework.web.bind.annotation.*;

import java.util.HashMap;
import java.util.List;

@RestController
@RequestMapping("/product_in_cart")
public class ProductInCartController {

    private final ProductInCartService productInCartService;

    public ProductInCartController(ProductInCartService productInCartService){
        this.productInCartService = productInCartService;
    }

    //endpoint pour ajouter un produit dans un panier
    @PostMapping("/{idProduct}/{idUser}")
    public void addProductToCart(
            @PathVariable(name = "idProduct") Long idProduct){
        productInCartService.addProductToCart(idProduct);
    }

    //endpoint pour avoir tous les produits d'un utilsateur, par magasin
    @GetMapping
    public HashMap<Shop, List<Product>> getProductsInCart(){
        return productInCartService.getProductsInCart();
    }

}
