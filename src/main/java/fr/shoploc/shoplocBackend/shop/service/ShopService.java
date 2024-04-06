package fr.shoploc.shoplocBackend.shop.service;

import fr.shoploc.shoplocBackend.shop.repository.ShopRepository;
import org.springframework.beans.factory.annotation.Autowired;
import org.springframework.stereotype.Service;

import fr.shoploc.shoplocBackend.common.models.Shop;

import java.lang.reflect.Field;
import java.util.List;

@Service
public class ShopService {
    private final ShopRepository shopRepository;

    @Autowired
    public ShopService(ShopRepository shopRepository) {
        this.shopRepository = shopRepository;
    }
    public List<Shop> getAllShops() {
        return shopRepository.findAll();
    }

    public Shop getShopById(Long id) {
        return shopRepository.findById(id).orElse(null);
    }

    public Shop updateShop(Long id, Shop shop) throws Exception {
        Shop shopToUpdate = shopRepository.findById(id).orElse(null);
        if (shopToUpdate != null) {
            for (Field field : Shop.class.getDeclaredFields()) {
                field.setAccessible(true);
                Object newValue = field.get(shop);
                if (newValue != null) {
                    field.set(shopToUpdate, newValue);
                }
            }
            return shopRepository.save(shopToUpdate);
        }
        throw new Exception("Shop not found");
    }

    public Long deleteShopById(Long id) throws Exception {
        Shop shopToDelete = shopRepository.findById(id).orElse(null);
        if (shopToDelete != null) {
            shopRepository.delete(shopToDelete);
            return(id);
        }
        throw new Exception("Shop not found");
    }
}
