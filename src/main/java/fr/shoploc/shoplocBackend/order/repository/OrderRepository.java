package fr.shoploc.shoplocBackend.order.repository;

import fr.shoploc.shoplocBackend.common.models.Order;
import org.springframework.data.jpa.repository.JpaRepository;
import org.springframework.stereotype.Repository;

import java.util.List;

@Repository
public interface OrderRepository extends JpaRepository<Order, Long> {
    List<Order> findByShopId(Long userId);
}
