package fr.shoploc.shoplocBackend.common.models;

import jakarta.persistence.*;
import lombok.Getter;
import lombok.Setter;

@Entity
@Getter
@Setter
@Table(name = "shop")
public class Shop {

    @Id
    @GeneratedValue(strategy = GenerationType.IDENTITY)
    private Long id;
    private String nom;
    private String image;
    private String adresse;
    private String adresse_mail;
    private String coordonnees_gps;
    //private boolean status;
    private String horaires_ouverture;
    private String mot_de_passe;

    public Shop(String nom, String image, String adresse, String adresse_mail, String coordonnees_gps, String horaires_ouverture, String mot_de_passe, int id_ville){
        this.nom = nom;
        this.image = image;
        this.adresse = adresse;
        this.adresse_mail = adresse_mail;
        this.coordonnees_gps = coordonnees_gps;
        this.horaires_ouverture = horaires_ouverture;
        this.mot_de_passe = mot_de_passe;
    }

    public Shop() {

    }
}
