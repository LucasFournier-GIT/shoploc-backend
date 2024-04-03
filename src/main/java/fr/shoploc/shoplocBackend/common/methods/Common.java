package fr.shoploc.shoplocBackend.common.methods;

import fr.shoploc.shoplocBackend.config.JwtService;
import fr.shoploc.shoplocBackend.usermanager.user.User;
import fr.shoploc.shoplocBackend.usermanager.user.UserService;
import org.springframework.stereotype.Service;

import java.util.Optional;

@Service
public class Common {
    private final UserService userService;
    private final JwtService jwtService;

    public Common(UserService userService, JwtService jwtService) {
        this.userService = userService;
        this.jwtService = jwtService;
    }

    public Long getUserId(String token) throws Exception {
        String userEmail = jwtService.extractUserEmail(token);
        Optional<User> user = userService.findUserByEmail(userEmail);
        if (user.isPresent()) {
            return user.get().getId();
        } else {
            throw new Exception("Utilisateur introuvable.");
        }
    }
}
