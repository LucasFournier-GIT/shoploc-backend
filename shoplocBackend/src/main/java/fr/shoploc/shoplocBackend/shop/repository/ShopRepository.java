package fr.shoploc.shoplocBackend.shop.repository;

import fr.shoploc.shoplocBackend.common.models.Shop;
import org.springframework.data.jpa.repository.JpaRepository;
import org.springframework.stereotype.Repository;

import java.util.Optional;

@Repository
public interface ShopRepository extends JpaRepository<Shop, Long> {
    Optional<Shop> findById(Long id);
}
