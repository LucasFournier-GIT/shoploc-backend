package fr.shoploc.shoplocBackend.shop.model;

import jakarta.persistence.*;

@Entity
@Table(name = "shops")
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

    public Long getId() {
        return id;
    }

    public String getNom() {
        return nom;
    }

    public String getImage() {
        return image;
    }
    public String getAdresse() {
        return adresse;
    }

    public String getAdresse_mail() {
        return adresse_mail;
    }

    public String getCoordonnees_gps() {
        return coordonnees_gps;
    }

    public String getHoraires_ouverture() {
        return horaires_ouverture;
    }

    public String getMot_de_passe() {
        return mot_de_passe;
    }

    public void setId(Long id) {
        this.id = id;
    }

    public void setAdresse(String adresse) {
        this.adresse = adresse;
    }

    public void setAdresse_mail(String adresse_mail) {
        this.adresse_mail = adresse_mail;
    }

    public void setCoordonnees_gps(String coordonnees_gps) {
        this.coordonnees_gps = coordonnees_gps;
    }

    public void setHoraires_ouverture(String horaires_ouverture) {
        this.horaires_ouverture = horaires_ouverture;
    }

    public void setImage(String image) {
        this.image = image;
    }

    public void setMot_de_passe(String mot_de_passe) {
        this.mot_de_passe = mot_de_passe;
    }

    public void setNom(String nom) {
        this.nom = nom;
    }
    
}
