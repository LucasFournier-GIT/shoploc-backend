import React from 'react';
import { View, Text, StyleSheet, ScrollView } from 'react-native';
import CustomSearchBar from './../CustomSearchBar';
import CustomNavBar from './../CustomNavBar';
import ProductCard from './../ProductCard';

// Liste fictive de produits
const dummyProducts = [
  {
    id: 1,
    name: 'Produit 1',
    quantity: 5,
    description: 'Description du produit 1',
    imageUrl: 'https://www.cuisinonsencouleurs.fr/wp-content/uploads/2012/03/DSC_0387k-1.jpg',
  },
  {
    id: 2,
    name: 'Produit 2',
    quantity: 2,
    description: 'Description du produit 2',
    imageUrl: 'https://www.cuisinonsencouleurs.fr/wp-content/uploads/2012/03/DSC_0387k-1.jpg',
  },
  {
    id: 3,
    name: 'Produit 3',
    quantity: 0,
    description: 'Description du produit 3',
    imageUrl: 'https://www.cuisinonsencouleurs.fr/wp-content/uploads/2012/03/DSC_0387k-1.jpg',
  },
  {
    id: 4,
    name: 'Produit 4',
    quantity: 5,
    description: 'Description du produit 4',
    imageUrl: 'https://www.cuisinonsencouleurs.fr/wp-content/uploads/2012/03/DSC_0387k-1.jpg',
  },
];

const ShopScreen = ({ route, navigation }) => {
  const { shopId } = route.params;
  return (
    <View style={styles.container}>
      <Text style={styles.heading2}>Nom du shop n°{shopId}</Text>
      <CustomSearchBar />
      <ScrollView contentContainerStyle={styles.scrollViewContent}>
        {dummyProducts.map((product) => (
          <ProductCard
            key={product.id}
            name={product.name}
            quantity={product.quantity}
            description={product.description}
            imageUrl={product.imageUrl}
            navigation={navigation}
            id={product.id}
          />
        ))}
      </ScrollView>
      <CustomNavBar navigation={navigation} screen="HomeScreen" />
    </View>
  );
};

const styles = StyleSheet.create({
  container: {
    flex: 1,
    backgroundColor: "#EFEFEF",
    height: "100%"
  },
  scrollViewContent: {
    flexDirection: 'row',
    flexWrap: 'wrap',
    justifyContent: 'space-between',
    paddingHorizontal: 5,
    paddingBottom: "25%",
    marginTop: 10,
  },
  heading2: {
    color:'#5D3528',
    fontSize: 26,
    alignSelf:'center'
  },
});

export default ShopScreen;
