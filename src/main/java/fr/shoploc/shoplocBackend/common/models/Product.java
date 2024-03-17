package fr.shoploc.shoplocBackend.common.models;


import jakarta.persistence.*;
import lombok.Getter;
import lombok.Setter;

@Entity
@Table(name = "products")
@Getter
@Setter
public class Product {

    @Id
    @GeneratedValue(strategy = GenerationType.IDENTITY)
    private Long id;
    private String name;
    private String description;
    private double price;
    private int availability;
    private String imageUrl;
    private Long shopId;
    private Long categoryId;

}
