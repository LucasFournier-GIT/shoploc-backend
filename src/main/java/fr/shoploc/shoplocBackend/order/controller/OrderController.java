package fr.shoploc.shoplocBackend.order.controller;

import fr.shoploc.shoplocBackend.common.models.Order;
import fr.shoploc.shoplocBackend.order.service.OrderService;
import org.springframework.http.HttpStatus;
import org.springframework.http.ResponseEntity;
import org.springframework.web.bind.annotation.*;

@RestController
@RequestMapping("/api/order")
public class OrderController {
    private final OrderService orderService;
    public OrderController(OrderService orderService) {
        this.orderService = orderService;
    }

    @GetMapping("/shop")
    public ResponseEntity<Object> getShopOrders(@RequestHeader("Authorization") String authorizationHeader) {
        String token = authorizationHeader.substring(7);
        try {
            return ResponseEntity.ok().body(orderService.getShopOrders(token));
        } catch (Exception e) {
            System.out.println(e.getMessage());
            return ResponseEntity.status(HttpStatus.INTERNAL_SERVER_ERROR).body(e.getMessage());
        }
    }

    @GetMapping("/user")
    public ResponseEntity<Object> getUserOrders(@RequestHeader("Authorization") String authorizationHeader) {
        String token = authorizationHeader.substring(7);
        try {
            return ResponseEntity.ok().body(orderService.getUserOrders(token));
        } catch (Exception e) {
            System.out.println(e.getMessage());
            return ResponseEntity.status(HttpStatus.INTERNAL_SERVER_ERROR).body(e.getMessage());
        }
    }

    @DeleteMapping("/{idOrder}")
    public ResponseEntity<Object> deleteOrder(@PathVariable(name = "idOrder") Long idOrder) {
        try {
            orderService.deleteOrder(idOrder);
            return ResponseEntity.ok(HttpStatus.OK);
        } catch (Exception e) {
            System.out.println(e.getMessage());
            return ResponseEntity.status(HttpStatus.INTERNAL_SERVER_ERROR).body(e.getMessage());
        }
    }

    @PatchMapping("/{idOrder}")
    public ResponseEntity<Object> updateOrder(@PathVariable(name = "idOrder") Long idOrder, @RequestBody Order order) {
        try {
            return ResponseEntity.ok(orderService.updateOrder(idOrder, order));
        } catch (Exception e) {
            System.out.println(e.getMessage());
            return ResponseEntity.status(HttpStatus.INTERNAL_SERVER_ERROR).body(e.getMessage());
        }
    }
}
