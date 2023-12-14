package fr.shoploc.shoplocBackend.product.repository;

import fr.shoploc.shoplocBackend.product.model.Product;
import org.springframework.data.jpa.repository.JpaRepository;
import org.springframework.stereotype.Repository;

@Repository
public interface ProductRepository extends JpaRepository<Product, Long> {
}
