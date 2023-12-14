package fr.shoploc.shoplocBackend.shop.controller;

import jakarta.annotation.security.PermitAll;

import org.springframework.web.bind.annotation.*;

import fr.shoploc.shoplocBackend.common.models.Shop;
import fr.shoploc.shoplocBackend.shop.service.ShopService;

import java.util.List;
import java.util.Optional;

@RestController
@PermitAll
@RequestMapping("/api/shop")
public class ShopController {
    private final ShopService shopService;

    public ShopController(ShopService shopService) {
        this.shopService = shopService;
    }

    // Endpoint pour créer un magasin
    @PostMapping
    public int createShop(@RequestBody Shop magasin) {
        //Shop createdMagasin = shopService.createShop(int id, String nom, String image, String adresse, String adresse_mail, String coordonnees_gps, String horaires_ouverture, String mot_de_passe, int id_ville);
        return 1;
    }

    // Endpoint pour supprimer un magasin depuis son id
    @DeleteMapping("/{id}")
    public void deleteShopById(@PathVariable Long id) {
        //shopService.deleteShopById(id);
    }

    // Endpoint pour avoir un magasin depuis son id
    @GetMapping("/{id}")
    public Optional<Shop> getShopById(@PathVariable Long id) {
        Optional<Shop> shop = shopService.getShopById(id);
        return shop;
    }

    // Endpoint pour avoir la liste de tous les magasins
    @GetMapping
    @PermitAll
    public List<Shop> getAllShops() {
        System.out.println("PING GETALL");
        List<Shop> shops = shopService.getAllShops();
        return shops;
    }

}
