package fr.shoploc.shoplocBackend.shop.service;

import fr.shoploc.shoplocBackend.shop.repository.ShopRepository;
import org.springframework.beans.factory.annotation.Autowired;
import org.springframework.stereotype.Service;

import fr.shoploc.shoplocBackend.common.models.Shop;

import java.util.List;

@Service
public class ShopService {

    //private final OtherService otherService = ...
    private final ShopRepository shopRepository;

    @Autowired
    public ShopService(ShopRepository shopRepository) {
        this.shopRepository = shopRepository;
    }
    public List<Shop> getAllShops() {
        return shopRepository.findAll();
    }

    public Shop getShopById(Long id) {
        return shopRepository.getReferenceById(id);
    }
}
