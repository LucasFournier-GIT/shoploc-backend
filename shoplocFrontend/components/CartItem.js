import React from 'react';
import { View, Text, Button, StyleSheet, TouchableOpacity } from 'react-native';
import colors from "./../assets/colors";

const CartItem = ({ product, handleIncrease, handleDecrease }) => {
  return (
    <View style={styles.container}>
      <Text style={styles.productName}>{product.name}</Text>
      <Text>{product.price * product.quantity}€</Text>
      <View style={styles.quantityContainer}>
        <TouchableOpacity style={styles.button} onPress={handleIncrease}>
          <Text style={styles.buttonText}>+</Text>
        </TouchableOpacity>
        <Text style={styles.quantityText}>{product.quantity}</Text>
        <TouchableOpacity style={styles.button} onPress={handleDecrease}>
          <Text style={styles.buttonText}>-</Text>
        </TouchableOpacity>
      </View>
    </View>
  );
};

const styles = StyleSheet.create({
  container: {
    flexDirection: 'row',
    justifyContent: 'space-between',
    alignItems: 'center',
    borderBottomWidth: 1,
    borderBottomColor: colors.tertiary,
    paddingVertical: 10,
    paddingHorizontal: 5,
    backgroundColor: colors.background,
    marginBottom: 2,
  },
  productName: {
    fontSize: 16,
  },
  quantityContainer: {
    flexDirection: 'row',
    alignItems: 'center',
    backgroundColor: colors.secondary,
    borderRadius: 32.5,
    elevation: 5,
  },
  quantityText: {
    marginHorizontal: 10,
    fontSize: 16,
    color: "white"
  },
  button: {
    backgroundColor: colors.secondary,
    padding: 5,
    borderRadius: 32.5,
    elevation: 10,
    width: 30,
    alignItems: 'center',
  },
  buttonText: {
    color: "white"
  }
});

export default CartItem;
