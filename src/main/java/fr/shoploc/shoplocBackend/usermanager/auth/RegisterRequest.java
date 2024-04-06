package fr.shoploc.shoplocBackend.usermanager.auth;

import lombok.AllArgsConstructor;
import lombok.Builder;
import lombok.Data;
import lombok.NoArgsConstructor;

@Data
@Builder
@AllArgsConstructor
@NoArgsConstructor
public class RegisterRequest {

    private String firstname;
    private String lastname;
    private String email;
    private String password;
    private String carRegistrationNumber;
    // Il prend pas la plaque d'immatriculation quand on s'inscrit
}
