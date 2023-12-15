package fr.shoploc.shoplocBackend.productInCart.repository;

import fr.shoploc.shoplocBackend.common.models.ProductInCart;
import org.springframework.data.jpa.repository.JpaRepository;
import org.springframework.stereotype.Repository;

import java.util.List;

@Repository
public interface ProductInCartRepository extends JpaRepository<ProductInCart, Long> {
    List<ProductInCart> findAllByIdUser(Long idUser);
}