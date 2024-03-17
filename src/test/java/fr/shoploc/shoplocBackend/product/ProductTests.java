package fr.shoploc.shoplocBackend.product;

import fr.shoploc.shoplocBackend.common.models.Product;
import fr.shoploc.shoplocBackend.product.repository.ProductRepository;
import fr.shoploc.shoplocBackend.product.service.ProductService;
import org.junit.jupiter.api.BeforeEach;
import org.junit.jupiter.api.Test;
import org.mockito.InjectMocks;
import org.mockito.Mock;
import org.mockito.MockitoAnnotations;

import java.util.ArrayList;
import java.util.List;
import java.util.Optional;

import static org.junit.jupiter.api.Assertions.assertEquals;
import static org.junit.jupiter.api.Assertions.assertNull;
import static org.mockito.Mockito.*;

class ProductTests {

    @Mock
    private ProductRepository productRepository;

    @InjectMocks
    private ProductService productService;

    @BeforeEach
    void setUp() {
        MockitoAnnotations.initMocks(this);
    }

    @Test
    void getProductById_shouldReturnProductWhenExists() {
        Long productId = 1L;
        Product expectedProduct = new Product();
        when(productRepository.findById(productId)).thenReturn(Optional.of(expectedProduct));

        Product actualProduct = productService.getProductById(productId);

        assertEquals(expectedProduct, actualProduct);
    }

    @Test
    void getProductById_shouldReturnNullWhenNotExists() {
        Long productId = 1L;
        when(productRepository.findById(productId)).thenReturn(Optional.empty());

        Product actualProduct = productService.getProductById(productId);

        assertNull(actualProduct);
    }

    @Test
    void getAllProducts_shouldReturnAllProducts() {
        List<Product> expectedProducts = new ArrayList<>();
        when(productRepository.findAll()).thenReturn(expectedProducts);

        List<Product> actualProducts = productService.getAllProducts();

        assertEquals(expectedProducts, actualProducts);
    }

    @Test
    void getAllProductsByShopId_shouldReturnProductsForShop() {
        Long shopId = 1L;
        List<Product> expectedProducts = new ArrayList<>();
        when(productRepository.findAllByShopId(shopId)).thenReturn(expectedProducts);

        List<Product> actualProducts = productService.getAllProductsByShopId(shopId);

        assertEquals(expectedProducts, actualProducts);
    }
}
