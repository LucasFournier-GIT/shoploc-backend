package fr.shoploc.shoplocBackend.product.model;


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
    private String nom;
    private String description;
    private double prix;
    private int disponibilite_en_stock;
    private String lien_image_produit;
    private Long id_magasin;
    private Long id_categorie;

}
