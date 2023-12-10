import React from 'react';
import { View, Text, Button, StyleSheet, ScrollView, ScrollViewBase } from 'react-native';
import ShopCartSummary from './../ShopCartSummary';
import CustomNavBar from '../CustomNavBar';

const CartScreen = ({ navigation }) => {
    const storeCarts = [
        {
          id: 1,
          name: 'Magasin A',
          products: [
            { id: 101, name: 'Produit 1', quantity: 2, price: 10.99 },
            { id: 102, name: 'Produit 2', quantity: 1, price: 7.49 },
          ],
        },
        {
          id: 2,
          name: 'Magasin B',
          products: [
            { id: 201, name: 'Produit 3', quantity: 3, price: 5.99 },
            { id: 202, name: 'Produit 4', quantity: 1, price: 12.99 },
          ],
        },
        {
          id: 3,
          name: 'Magasin C',
          products: [
            { id: 203, name: 'Produit 5', quantity: 2, price: 8.49 },
            { id: 204, name: 'Produit 6', quantity: 4, price: 9.99 },
          ],
        },
      ];
      
      const handleValidateAll = () => {
        const totalAmount = storeCarts.reduce((acc, store) => {
          return (
            acc +
            store.products.reduce((storeAcc, product) => {
              return storeAcc + product.quantity * product.price;
            }, 0)
          );
        }, 0);
        
        navigation.navigate("RecapCart", { TotalAmount: totalAmount });

      };
      
  return (
    <View style={styles.container}>
        <Text style={styles.heading}>Paniers</Text>
        <ScrollView style={styles.card}>

          {storeCarts.map((cart) => (
            <ShopCartSummary navigation={navigation} key={cart.id} store={cart} />
          ))}
      </ScrollView>

      <View style={styles.buttonContainer}>
        <Button title="Valider tout" onPress={handleValidateAll} color={"#275C50"} />
      </View>

      <CustomNavBar navigation={navigation} />
    </View>
  );
};

const styles = StyleSheet.create({
    container: {
      flex: 1,
      top: 0,
      backgroundColor: "#EFEFEF",
      
    },
    content: {
      bottom: 125,
    },
    heading: {
      fontSize: 30,
      fontWeight: 'bold',
      marginTop: 5,
      color: '#5D3528',
      alignSelf: 'center',
    },
    card: {
      backgroundColor: "#fff",
      borderRadius: 32.5,
      margin: 10,
      marginBottom:135,
      padding:5,
    },
    buttonContainer: {
      position: 'absolute',
      bottom: 85, // Modifier cette valeur pour ajuster la position du conteneur du bouton
      width: '100%',
      alignItems: 'center', // Centrer horizontalement le bouton dans son conteneur
      
    },
  });
  

export default CartScreen;
