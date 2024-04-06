package fr.shoploc.shoplocBackend.dto;

import lombok.Getter;
import lombok.Setter;

@Getter
@Setter
public class ProductDTO {
    private Long id;
    private String name;
    private String description;
    private int availability;
    private double price;
    private int quantity;
    private String imageUrl;
}
