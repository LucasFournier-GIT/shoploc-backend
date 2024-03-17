package fr.shoploc.shoplocBackend.dto;

import lombok.Getter;
import lombok.Setter;

import java.util.ArrayList;
import java.util.List;

@Getter
@Setter
public class ShopDTO {
    private Long id;
    private String shopName;
    private List<ProductDTO> products;

    public ShopDTO() {
        this.products = new ArrayList<>();
    }

    public List<ProductDTO> getProducts() {
        if(products == null){
            products = new ArrayList<>();
        }
        return products;
    }
}