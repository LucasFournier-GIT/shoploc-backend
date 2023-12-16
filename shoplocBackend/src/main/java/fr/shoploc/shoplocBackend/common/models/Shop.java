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
    private String adresseMail;
    private String coordonneesGps;
    private String horairesOuverture;
    private String motDePasse;

    public Shop(String nom, String image, String adresse, String adresseMail, String coordonneesGps, String horairesOuverture, String motDePasse){
        this.nom = nom;
        this.image = image;
        this.adresse = adresse;
        this.adresseMail = adresseMail;
        this.coordonneesGps = coordonneesGps;
        this.horairesOuverture = horairesOuverture;
        this.motDePasse = motDePasse;
    }

    public Shop() {

    }
}
