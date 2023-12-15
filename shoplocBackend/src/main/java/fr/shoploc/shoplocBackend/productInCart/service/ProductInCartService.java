package fr.shoploc.shoplocBackend.productInCart.service;

import fr.shoploc.shoplocBackend.common.models.Product;
import fr.shoploc.shoplocBackend.common.models.ProductInCart;
import fr.shoploc.shoplocBackend.common.models.Shop;
import fr.shoploc.shoplocBackend.productInCart.repository.ProductInCartRepository;
import fr.shoploc.shoplocBackend.shop.controller.ShopController;
import fr.shoploc.shoplocBackend.product.controller.ProductController;
import org.springframework.stereotype.Service;

import java.util.ArrayList;
import java.util.HashMap;
import java.util.List;
import java.util.Optional;

@Service
public class ProductInCartService {

    private final ProductInCartRepository productInCartRepository;
    private final ShopController shopController;
    private final ProductController productController;

    //TODO recuperer l id du user grace a son token
    private Long idUser = 1L;

    public ProductInCartService(ProductInCartRepository productInCartRepository, ShopController shopController, ProductController productController){
        this.productInCartRepository = productInCartRepository;
        this.shopController = shopController;
        this.productController = productController;
    }
    public void addProductToCart(Long idProduct) {
        ProductInCart productInCart = new ProductInCart(idProduct, idUser);
        productInCartRepository.save(productInCart);
    }

    public HashMap<Shop, List<Product>> getProductsInCart() {
        HashMap<Shop, List<Product>> carts = new HashMap<>();
        List<ProductInCart> productInCart = productInCartRepository.findAllByIdUser(idUser);
        //Recuperation des produits dans mon cart
        //Pour chaque produit, quel est le mafasin et quel est le produit ?
        for(ProductInCart product : productInCart){
            Product p = productController.getProductById(product.getIdProduct());
            Optional<Shop> s = shopController.getShopById(p.getIdMagasin());
            //recuperer le magasin qui vend ce produit (getIdMagasin dans Product)
            if(carts.containsKey(s)){
                carts.get(s).add(p);
            }else{
                if(s.isPresent() && s.get() != null) {
                    Shop theShop = s.get();
                    List<Product> listP = new ArrayList<>();
                    listP.add(p);
                    carts.put(theShop, listP);
                }
            }
        }
        return carts;
    }
}
