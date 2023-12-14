package fr.shoploc.shoplocBackend.testproduct;

import org.springframework.context.ApplicationEvent;

public class ProductCreated extends ApplicationEvent {
    private final String nomProduit;

    public ProductCreated(Object source, String nomProduit) {
        super(source);
        this.nomProduit = nomProduit;
    }

    public String getNomProduit() {
        return nomProduit;
    }
}
