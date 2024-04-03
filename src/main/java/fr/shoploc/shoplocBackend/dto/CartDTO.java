package fr.shoploc.shoplocBackend.dto;

import lombok.Getter;
import lombok.Setter;

import java.util.ArrayList;
import java.util.List;

@Getter
@Setter
public class CartDTO {
    private Long id;
    private Long shopId;
    private String shopName;
    private List<ProductDTO> products;

    public CartDTO() {
        this.products = new ArrayList<>();
    }

    public List<ProductDTO> getProducts() {
        if(products == null){
            products = new ArrayList<>();
        }
        return products;
    }
}