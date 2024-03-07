package fr.shoploc.shoplocBackend.product;

import fr.shoploc.shoplocBackend.common.models.Product;
import fr.shoploc.shoplocBackend.product.repository.ProductRepository;
import org.junit.jupiter.api.Test;
import org.springframework.boot.test.autoconfigure.orm.jpa.DataJpaTest;
import org.springframework.boot.test.autoconfigure.orm.jpa.TestEntityManager;
import org.springframework.beans.factory.annotation.Autowired;

import java.util.List;

import static org.junit.jupiter.api.Assertions.assertEquals;

@DataJpaTest
class ProductRepositoryTest {

    @Autowired
    private TestEntityManager entityManager;

    @Autowired
    private ProductRepository productRepository;

    @Test
    void findAllByIdMagasin_shouldReturnProductsForShop() {
        // Arrange
        Long shopId = 1L;
        Product product1 = new Product();
        product1.setShopId(shopId);
        entityManager.persist(product1);

        Product product2 = new Product();
        product2.setShopId(shopId);
        entityManager.persist(product2);

        Product product3 = new Product();
        product3.setShopId(2L);
        entityManager.persist(product3);

        List<Product> products = productRepository.findAllByShopId(shopId);

        assertEquals(2, products.size());
    }

}
