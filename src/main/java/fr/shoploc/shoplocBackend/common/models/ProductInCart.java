package fr.shoploc.shoplocBackend.common.models;

import jakarta.persistence.*;
import lombok.Getter;
import lombok.Setter;

@Entity
@Table(name = "products_in_cart")
@Getter
@Setter
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
        this.quantity = 1;
    }

    public ProductInCart(){}
}
