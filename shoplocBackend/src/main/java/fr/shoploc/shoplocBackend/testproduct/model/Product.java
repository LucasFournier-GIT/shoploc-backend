package fr.shoploc.shoplocBackend.testproduct.model;

import lombok.Getter;
import lombok.Setter;

@Setter
@Getter
public class Product {

    private String name;
    private String description;
    private int price;

    public Product(String name, String description, int price) {
        this.name = name;
        this.description = description;
        this.price = price;
    }

}