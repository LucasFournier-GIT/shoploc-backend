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

    private Long idUser;
    private Long idProduct;
    private int quantity;

    public ProductInCart(Long idProduct, Long idUser){
        this.idUser = idUser;
        this.idProduct = idProduct;
    }

    public ProductInCart(){}
}
