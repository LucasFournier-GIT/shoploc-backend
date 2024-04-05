package fr.shoploc.shoplocBackend.usermanager.user;

import fr.shoploc.shoplocBackend.config.JwtService;
import org.springframework.stereotype.Service;

import java.lang.reflect.Field;
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

    public User updateUser(String token, User user) throws Exception {
        String userEmail = jwtService.extractUserEmail(token);
        User userToUpdate = userRepository.findByEmail(userEmail).orElse(null);
        if (userToUpdate != null) {
            for (Field field : User.class.getDeclaredFields()) {
                field.setAccessible(true);
                Object newValue = field.get(user);
                if (newValue != null) {
                    field.set(userToUpdate, newValue);
                }
            }
            return userRepository.save(userToUpdate);
        }
        throw new Exception("User not found");
    }
}
