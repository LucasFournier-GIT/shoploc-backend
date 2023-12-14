package fr.shoploc.service;

import jakarta.enterprise.context.ApplicationScoped;

@ApplicationScoped
public class ShopManagerService {
    public String greeting(String id) {
        return "Voici Auchan, avec l'id " + id;
    }
}
