package fr.shoploc.shoplocBackend.notification;

import fr.shoploc.shoplocBackend.testproduct.ProductCreated;
import org.springframework.context.event.EventListener;
import org.springframework.stereotype.Component;

@Component
public class NewProductListener {
    @EventListener
    public void newProductCreated(ProductCreated event) {
        System.out.println("Nouveau produit ajouté ! : " + event.getNomProduit());
    }
}
