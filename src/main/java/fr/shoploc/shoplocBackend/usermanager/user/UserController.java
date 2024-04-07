package fr.shoploc.shoplocBackend.usermanager.user;

import org.springframework.http.HttpStatus;
import org.springframework.http.ResponseEntity;
import org.springframework.web.bind.annotation.*;

@RestController
@RequestMapping("/api/user")
public class UserController {

    private final UserService userService;

    public UserController(UserService userService) {
        this.userService = userService;
    }

    @GetMapping
    public ResponseEntity<Object> getUser(@RequestHeader("Authorization") String authorizationHeader) {
        String token = authorizationHeader.substring(7);
        try {
            return ResponseEntity.ok().body(userService.getUser(token));
        } catch (Exception e) {
            System.out.println(e.getMessage());
            return ResponseEntity.status(HttpStatus.NOT_FOUND).body(e.getMessage());
        }
    }

    @GetMapping("/{email}")
    public ResponseEntity<Object> getUserId(@PathVariable String email, @RequestHeader("Authorization") String authorizationHeader) {
        String token = authorizationHeader.substring(7);
        try {
            return ResponseEntity.ok().body(userService.getUserId(email));
        } catch (Exception e) {
            System.out.println(e.getMessage());
            return ResponseEntity.status(HttpStatus.NOT_FOUND).body(e.getMessage());
        }
    }

    @PatchMapping
    public ResponseEntity<Object> updateUser(@RequestHeader("Authorization") String authorizationHeader, @RequestBody User user) {
        String token = authorizationHeader.substring(7);
        try {
            return ResponseEntity.ok().body(userService.updateUser(token, user));
        } catch (Exception e) {
            System.out.println(e.getMessage());
            return ResponseEntity.status(HttpStatus.INTERNAL_SERVER_ERROR).body(e.getMessage());
        }
    }
}
