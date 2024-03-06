package fr.shoploc.shoplocBackend.productInCart;

import fr.shoploc.shoplocBackend.common.models.ProductInCart;
import fr.shoploc.shoplocBackend.config.JwtService;
import fr.shoploc.shoplocBackend.productInCart.repository.ProductInCartRepository;
import fr.shoploc.shoplocBackend.productInCart.service.ProductInCartService;
import fr.shoploc.shoplocBackend.usermanager.user.User;
import fr.shoploc.shoplocBackend.usermanager.user.UserService;
import org.junit.jupiter.api.Test;
import org.mockito.InjectMocks;
import org.mockito.Mock;
import org.springframework.boot.test.context.SpringBootTest;

import java.util.Optional;

import static org.junit.jupiter.api.Assertions.*;
import static org.mockito.Mockito.*;

@SpringBootTest
public class ProductInCartServiceTest {

    @InjectMocks
    private ProductInCartService productInCartService;

    @Mock
    private ProductInCartRepository productInCartRepository;

    @Mock
    private JwtService jwtService;

    @Mock
    private UserService userService;

    @Test
    public void addProductToCart_addsProductToCart() throws Exception {
        // Arrange
        Long idProduct = 1L;
        String token = "testToken";
        when(jwtService.extractUserEmail(token)).thenReturn("test@test.com");
        when(userService.findUserByEmail("test@test.com")).thenReturn(Optional.of(new User()));

        // Act
        productInCartService.addProductToCart(idProduct, token);

        // Assert
        verify(productInCartRepository, times(1)).save(any(ProductInCart.class));
    }

    @Test
    public void removeProductToCart_removesProductFromCart() throws Exception {
        // Arrange
        Long idProduct = 1L;
        String token = "testToken";
        when(jwtService.extractUserEmail(token)).thenReturn("test@test.com");
        User user = new User();
        user.setId(1L);
        when(userService.findUserByEmail("test@test.com")).thenReturn(Optional.of(user));

        // Act
        productInCartService.removeProductToCart(idProduct, token);

        // Assert
        verify(productInCartRepository, times(1)).deleteByProductIdAndUserId(eq(idProduct), eq(user.getId()));
    }

    // TODO: Add test for getCarts

    @Test
    public void getUserId_returnsUserId_whenUserExists() throws Exception {
        // Arrange
        String token = "testToken";
        when(jwtService.extractUserEmail(token)).thenReturn("test@test.com");
        User user = new User();
        user.setId(1L);
        when(userService.findUserByEmail("test@test.com")).thenReturn(Optional.of(user));

        // Act
        Long result = productInCartService.getUserId(token);

        // Assert
        assertEquals(1L, result);
    }

    @Test
    public void getUserId_throwsException_whenUserDoesNotExist() throws Exception {
        // Arrange
        String token = "testToken";
        when(jwtService.extractUserEmail(token)).thenReturn("test@test.com");
        when(userService.findUserByEmail("test@test.com")).thenReturn(Optional.empty());

        // Act and Assert
        assertThrows(Exception.class, () -> productInCartService.getUserId(token));
    }
}