package fr.shoploc.shoplocBackend.product.controller;

import fr.shoploc.shoplocBackend.common.models.Product;
import fr.shoploc.shoplocBackend.product.service.ProductService;
import org.springframework.beans.factory.annotation.Autowired;
import org.springframework.web.bind.annotation.*;

import java.util.List;

@RestController
@RequestMapping("/api/product")
public class ProductController {

    private final ProductService productService;

    @Autowired
    public ProductController(ProductService productService) {
        this.productService = productService;
    }

    @GetMapping("/{id}")
    public Product getProductById(@PathVariable Long id) {
        return productService.getProductById(id);
    }

    @GetMapping
    public List<Product> getAllProducts() {
        return productService.getAllProducts();
    }

    @GetMapping("/shop/{shopId}")
    public List<Product> getProductsByShopId(@PathVariable Long shopId) {
        return productService.getAllProductsByShopId(shopId);
    }



}
