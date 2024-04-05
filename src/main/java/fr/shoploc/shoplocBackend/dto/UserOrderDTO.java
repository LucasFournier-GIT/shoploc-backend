package fr.shoploc.shoplocBackend.dto;

import lombok.Getter;
import lombok.Setter;

import java.util.Date;
import java.util.List;

@Getter
@Setter
public class UserOrderDTO {
    private Long id;
    private String status;
    private Date date;
    private List<ShopDTO> shops;
}
