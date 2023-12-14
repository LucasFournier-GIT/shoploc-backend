import React from 'react';
import { View, Text, StyleSheet, TouchableOpacity } from 'react-native';
import CartItem from './CartItem';
import colors from "./../assets/colors";

const ShopCartSummary = ({ store, navigation }) => {
  const removeFromCart = (productIdToRemove) => {
    // Logique pour retirer un produit du panier
  };

// Fonction pour augmenter la quantité d'un produit dans le panier
const handleIncrease = (productId) => {
  // Trouver le produit dans le panier en fonction de son ID (productId)
  //const updatedProducts = store.products.map((product) => {
  //  if (product.id === productId) {
  //    return { ...product, quantity: product.quantity + 1 };
  //  }
  //  return product;
  //S});

  // Mettre à jour le panier avec la quantité mise à jour du produit
  //setStore({ ...store, products: updatedProducts });
};

// Fonction pour diminuer la quantité d'un produit dans le panier
const handleDecrease = (productId) => {
  // Trouver le produit dans le panier en fonction de son ID (productId)
  //const updatedProducts = store.products.map((product) => {
  //  if (product.id === productId && product.quantity > 0) {
  //    return { ...product, quantity: product.quantity - 1 };
  //  }
  //  return product;
  //});

  // Mettre à jour le panier avec la quantité mise à jour du produit
};

const handleValidate = () => {
  const totalAmount = store.products.reduce((acc, product) => {
    return acc + product.price * product.quantity;
  }, 0);

  navigation.navigate("RecapCartScreen", { TotalAmount: totalAmount, navigation: navigation });
};

  return (
    <View style={styles.container}>
      <Text style={styles.heading2}>{store.name}</Text>

      {store.products.map((product) => (
        <CartItem
          key={product.id}
          product={product}
          handleIncrease={() => handleIncrease(product.id)}
          handleDecrease={() => handleDecrease(product.id)}
          removeFromCart={() => removeFromCart(product.id)}
        />
      ))}
      <TouchableOpacity style={styles.button} onPress={handleValidate}>
        <Text style={styles.buttonText}>
          Valider
        </Text>
      </TouchableOpacity>
    </View>
  );
};

const styles = StyleSheet.create({
  heading2: {
    color: colors.primary,
    fontSize: 20,
    marginBottom: 15
  },
  container: {
    // Styles pour le conteneur global du composant ShopCartSummary
  },
  button: {
    backgroundColor: colors.secondary,
    padding: 5,
    borderRadius: 32.5,
    elevation: 5,
    alignSelf: "flex-end",
    alignItems: 'center',
  },
  buttonText: {
    color: "white",
    marginVertical: 5,
    marginHorizontal: 10
  }

});

export default ShopCartSummary;
