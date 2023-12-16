package fr.shoploc.shoplocBackend.common.models;

import jakarta.persistence.*;
import lombok.Getter;
import lombok.Setter;

@Getter
@Setter
@Entity
@Table(name = "productsInCart")
public class ProductInCart {
    @Id
    @GeneratedValue(strategy = GenerationType.IDENTITY)
    private Long id;

    private Long idProduct;
    private int quantity;
    private String idUser;

    public ProductInCart(Long idProduct, String idUser){
        this.idProduct = idProduct;
        this.idUser = idUser;
    }

    public ProductInCart(){}
}
