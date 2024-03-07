package fr.shoploc.shoplocBackend.common.dto;

import lombok.Getter;
import lombok.NoArgsConstructor;
import lombok.Setter;

@Getter
@Setter
@NoArgsConstructor
public class ProductDTO {
    private Long id;
    private String nom;
    private String description;
    private double prix;
    private int disponibilite;
    private String image;
}
