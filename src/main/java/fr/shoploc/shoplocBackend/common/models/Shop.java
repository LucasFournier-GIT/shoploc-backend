package fr.shoploc.shoplocBackend.common.models;

import jakarta.persistence.*;
import lombok.Getter;
import lombok.Setter;

@Entity
@Table(name = "shop")
@Getter
@Setter
public class Shop {

    @Id
    private Long id;
    private String name;
    private String image_url;
    private String address;
    private String email;
    private String gps_coordinates;
    private String opening_hours;
    private String password;

    public Shop(String name, String image_url, String address, String email, String gps_coordinates, String opening_hours){
        this.name = name;
        this.image_url = image_url;
        this.address = address;
        this.email = email;
        this.gps_coordinates = gps_coordinates;
        this.opening_hours = opening_hours;
    }

    public Shop() {
    }
}
