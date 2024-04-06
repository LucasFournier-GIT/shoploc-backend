package fr.shoploc.shoplocBackend.dto;

import lombok.Getter;
import lombok.Setter;

import java.util.Date;
import java.util.List;

@Getter
@Setter
public class OrderDTO {
    private Long id;
    private Long idUser;
    private String status;
    private Date date;
    private Boolean paid;
    private int amount;
    private List<ProductDTO> products;

    public OrderDTO() {
    }

    public OrderDTO(Long id, String status, Date date, Boolean paid, int amount, List<ProductDTO> products) {
        this.id = id;
        this.status = status;
        this.date = date;
        this.paid = paid;
        this.amount = amount;
        this.products = products;
    }

}
