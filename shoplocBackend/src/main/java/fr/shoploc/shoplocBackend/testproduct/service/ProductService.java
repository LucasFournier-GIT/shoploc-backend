package fr.shoploc.shoplocBackend.testproduct.service;

import fr.shoploc.shoplocBackend.testproduct.ProductCreated;
import lombok.NonNull;
import org.springframework.context.ApplicationEventPublisher;
import org.springframework.stereotype.Service;

import fr.shoploc.shoplocBackend.testproduct.model.Product;


@Service
public class ProductService {

    private final @NonNull ApplicationEventPublisher events;

    public ProductService(ApplicationEventPublisher eventPublisher) {
        this.events = eventPublisher;
    }
    public void create(Product product) {
        events.publishEvent(new ProductCreated(this, product.getName()));
    }
}