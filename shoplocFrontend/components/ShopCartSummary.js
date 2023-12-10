import React from 'react';
import { View, Text, Button, StyleSheet, TouchableOpacity } from 'react-native';
import CartItem from './CartItem';

const ShopCartSummary = ({ store, navigation }) => {
  const removeFromCart = (productIdToRemove) => {
    // Logique pour retirer un produit du panier
  };

  const handleIncrease = (productId) => {
    // Logique pour augmenter la quantité d'un produit dans le panier
    // Assurez-vous de mettre à jour l'état ou le contenu du panier du magasin
    // Exemple : setStore({ ...store, products: updatedProducts });
  };

  const handleDecrease = (productId) => {
    // Logique pour diminuer la quantité d'un produit dans le panier
    // Assurez-vous de gérer le cas où la quantité atteint zéro pour retirer le produit du panier
    // Exemple : removeFromCart(productId);
  };

  const handleValidate = () => {
    navigation.navigate("RecapCart", { store });
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
        <Text style={styles.buttonText} >
            Valider
        </Text>
      </TouchableOpacity>
    </View>
  );
};

const styles = StyleSheet.create({
    heading2: {
    color: '#5D3528',
    fontSize: 20,
    marginBottom: 15
  },
  button:{
    backgroundColor:"#275C50",
    padding:5,
    borderRadius:32.5,
    elevation:5,
    //alignSelf:"center",
    //right:0,
    alignSelf:"flex-end",
    alignItems:'center',
  },
  buttonText:{
    color:"#fff",
    marginVertical:5,
    marginHorizontal:10
  }
});

export default ShopCartSummary;
