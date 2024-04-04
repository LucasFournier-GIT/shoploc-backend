package fr.shoploc.shoplocBackend.usermanager.auth;

import fr.shoploc.shoplocBackend.usermanager.user.Role;
import lombok.RequiredArgsConstructor;
import org.springframework.dao.DataIntegrityViolationException;
import org.springframework.http.HttpStatus;
import org.springframework.http.ResponseEntity;
import org.springframework.web.bind.annotation.PostMapping;
import org.springframework.web.bind.annotation.RequestBody;
import org.springframework.web.bind.annotation.RequestMapping;
import org.springframework.web.bind.annotation.RestController;

@RestController
@RequestMapping("/api/auth")
@RequiredArgsConstructor
public class AuthenticationController {

    private final AuthenticationService service;

    @PostMapping("/register/user")
    public ResponseEntity<AuthenticationResponse> registerUser(
            @RequestBody RegisterRequest request
    ) {
        try {
            AuthenticationResponse response = service.register(request, Role.USER);
            return ResponseEntity.ok(response);
        } catch (DataIntegrityViolationException e) {
            return ResponseEntity.status(HttpStatus.CONFLICT)
                    .body(new AuthenticationResponse("Erreur lors de l'inscription. Adresse e-mail déjà utilisée."));
        } catch (Exception e) {
            return ResponseEntity.status(HttpStatus.INTERNAL_SERVER_ERROR)
                    .body(new AuthenticationResponse("Erreur interne du serveur."));
        }
    }

    @PostMapping("/register/shop")
    public ResponseEntity<AuthenticationResponse> registerShop(
            @RequestBody RegisterRequest request
    ) {
        try {
            AuthenticationResponse response = service.register(request, Role.SHOP);
            return ResponseEntity.ok(response);
        } catch (DataIntegrityViolationException e) {
            return ResponseEntity.status(HttpStatus.CONFLICT)
                    .body(new AuthenticationResponse("Erreur lors de l'inscription. Adresse e-mail déjà utilisée."));
        } catch (Exception e) {
            return ResponseEntity.status(HttpStatus.INTERNAL_SERVER_ERROR)
                    .body(new AuthenticationResponse("Erreur interne du serveur."));
        }
    }

    @PostMapping("/register/admin")
    public ResponseEntity<AuthenticationResponse> registerAdmin(
            @RequestBody RegisterRequest request
    ) {
        try {
            AuthenticationResponse response = service.register(request, Role.ADMIN);
            return ResponseEntity.ok(response);
        } catch (DataIntegrityViolationException e) {
            return ResponseEntity.status(HttpStatus.CONFLICT)
                    .body(new AuthenticationResponse("Erreur lors de l'inscription. Adresse e-mail déjà utilisée."));
        } catch (Exception e) {
            return ResponseEntity.status(HttpStatus.INTERNAL_SERVER_ERROR)
                    .body(new AuthenticationResponse("Erreur interne du serveur."));
        }
    }

    @PostMapping("/authenticate")
    public ResponseEntity<AuthenticationResponse> authenticate(
            @RequestBody AuthenticationRequest request
    ) {
        return ResponseEntity.ok(service.authenticate(request));
    }
}
