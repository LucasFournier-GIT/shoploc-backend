package fr.shoploc.shoplocBackend.usermanager.user;

import fr.shoploc.shoplocBackend.config.JwtService;
import org.springframework.stereotype.Service;

import java.util.Optional;

@Service
public class UserService {
    private final UserRepository userRepository;
    private final JwtService jwtService;

    public UserService(UserRepository userRepository, JwtService jwtService) {
        this.userRepository = userRepository;
        this.jwtService = jwtService;
    }

    public Optional<User> findUserByEmail(String userEmail) {
        return userRepository.findByEmail(userEmail);
    }

    public User getUser(String token) throws Exception {
        String userEmail = jwtService.extractUserEmail(token);
        Optional<User> user = findUserByEmail(userEmail);
        if (user.isPresent()) {
            return user.get();
        } else {
            throw new Exception("Utilisateur introuvable.");
        }
    }
}
