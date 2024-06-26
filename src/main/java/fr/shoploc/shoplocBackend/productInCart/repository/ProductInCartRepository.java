package fr.shoploc.shoplocBackend.productInCart.repository;

import fr.shoploc.shoplocBackend.common.models.ProductInCart;
import jakarta.transaction.Transactional;
import org.springframework.data.jpa.repository.JpaRepository;
import org.springframework.data.jpa.repository.Modifying;
import org.springframework.data.jpa.repository.Query;
import org.springframework.data.repository.query.Param;
import org.springframework.stereotype.Repository;

import java.util.List;

@Repository
public interface ProductInCartRepository extends JpaRepository<ProductInCart, Long> {
    List<ProductInCart> findAllByIdUser(Long idUser);
    @Transactional
    @Modifying
    @Query("DELETE FROM ProductInCart WHERE idProduct = :productId AND idUser = :userId")
    void deleteByIdProductAndIdUser(@Param("productId") Long productId, @Param("userId") Long userId);

    @Transactional
    List<ProductInCart> findByIdUserAndIdProduct(Long userId, Long idProduct);

    @Query("SELECT p FROM ProductInCart p WHERE p.idProduct IN :productIds")
    List<ProductInCart> findByIdProductIn(@Param("productIds") List<Long> productIds);

    List<ProductInCart> findByIdUserAndIdProductIn(Long idUser, List<Long> productIds);

    void deleteByIdOrder(Long idProduct);
}
