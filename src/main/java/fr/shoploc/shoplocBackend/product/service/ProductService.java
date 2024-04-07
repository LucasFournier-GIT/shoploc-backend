package fr.shoploc.shoplocBackend.product.service;

import fr.shoploc.shoplocBackend.common.models.Product;
import fr.shoploc.shoplocBackend.product.repository.ProductRepository;
import org.springframework.beans.factory.annotation.Autowired;
import org.springframework.stereotype.Service;

import java.lang.reflect.Field;
import java.util.List;

@Service
public class ProductService {

    private final ProductRepository productRepository;

    @Autowired
    public ProductService(ProductRepository productRepository) {
        this.productRepository = productRepository;
    }

    public Product getProductById(Long id) {
        return productRepository.findById(id).orElse(null);
    }

    public List<Product> getAllProducts() {
        return productRepository.findAll();
    }

    public List<Product> getAllProductsByShopId(Long shopId) {
        return productRepository.findAllByShopId(shopId);
    }

    public Product updateProduct(Long id, Product product) throws Exception {
        Product productToUpdate = productRepository.findById(id).orElse(null);
        if (productToUpdate != null) {
            for (Field field : Product.class.getDeclaredFields()) {
                field.setAccessible(true);
                Object newValue = field.get(product);
                if (newValue != null) {
                    field.set(productToUpdate, newValue);
                }
            }
            return productRepository.save(productToUpdate);
        }
        throw new Exception("Product not found");
    }
    public void deleteProduct(Long id) {
        productRepository.deleteById(id);
    }

    public Object createProduct(Product product) {
        return productRepository.save(product);
    }
}
