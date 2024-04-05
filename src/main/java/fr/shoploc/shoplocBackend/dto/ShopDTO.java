package fr.shoploc.shoplocBackend.dto;

import lombok.Getter;
import lombok.Setter;

@Getter
@Setter
public class ShopDTO {
    private Long id;
    private String shopName;
    private String openingHours;
    private String gpsCoordinates;
}
