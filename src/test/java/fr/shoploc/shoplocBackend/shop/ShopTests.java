package fr.shoploc.shoplocBackend.shop;

import static org.junit.jupiter.api.Assertions.*;
import static org.mockito.Mockito.*;

import fr.shoploc.shoplocBackend.common.models.Shop;
import fr.shoploc.shoplocBackend.shop.repository.ShopRepository;
import fr.shoploc.shoplocBackend.shop.service.ShopService;
import org.junit.jupiter.api.BeforeEach;
import org.junit.jupiter.api.Test;

import java.util.ArrayList;
import java.util.List;
import java.util.Optional;

class ShopSTest {

    private ShopRepository shopRepository;
    private ShopService shopService;

    @BeforeEach
    void setUp() {
        shopRepository = mock(ShopRepository.class);
        shopService = new ShopService(shopRepository);
    }

    @Test
    void getAllShops_shouldReturnAllShops() {
        List<Shop> expectedShops = new ArrayList<>();
        when(shopRepository.findAll()).thenReturn(expectedShops);

        List<Shop> actualShops = shopService.getAllShops();

        assertEquals(expectedShops, actualShops);
    }

    @Test
    void getShopById_shouldReturnShopWhenExists() {
        Long shopId = 1L;
        Shop expectedShop = new Shop();
        when(shopRepository.findById(shopId)).thenReturn(Optional.of(expectedShop));

        Shop actualShop = shopService.getShopById(shopId);

        assertNotNull(actualShop);
        assertEquals(expectedShop, actualShop);
    }

    @Test
    void getShopById_shouldReturnEmptyWhenNotExists() {
        Long shopId = 1L;
        when(shopRepository.findById(shopId)).thenReturn(Optional.empty());

        Shop actualShop = shopService.getShopById(shopId);

        assertNull(actualShop);
    }
}
