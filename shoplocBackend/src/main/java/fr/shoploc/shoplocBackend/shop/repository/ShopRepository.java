package fr.shoploc.shoplocBackend.shop.repository;

import fr.shoploc.shoplocBackend.shop.model.Shop;
import org.springframework.data.jpa.repository.JpaRepository;
import org.springframework.stereotype.Repository;

@Repository
public interface ShopRepository extends JpaRepository<Shop, Long> {
    // Aucun besoin d'implémenter les méthodes de l'interface JpaRepository ici
    // Elles sont fournies par défaut par Spring Data JPA
}
