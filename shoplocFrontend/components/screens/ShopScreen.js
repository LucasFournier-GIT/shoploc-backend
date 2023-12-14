import React, { useEffect, useState } from 'react';
import { View, Text, StyleSheet, ScrollView, Image, TouchableOpacity } from 'react-native';
import CustomSearchBar from './../CustomSearchBar';
import CustomNavBar from './../CustomNavBar';
import ProductCard from './../ProductCard';
import logo from './../../assets/logo.png';
import { Octicons } from '@expo/vector-icons'; 
import colors from "./../../assets/colors";

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

  const [products, setProducts] = useState([]);

  useEffect(() => {
    const fetchProducts = async () => {
      try {
        const response = await axios.get(`http://localhost/api/product/shop/${shopId}`);
        setProducts(response.data);
      } catch (error) {
        console.error('Error fetching products:', error);
      }
    };

    fetchProducts();
  }, [shopId]);


  return (
    <View style={styles.container}>
      {/* Première ligne */}
      <View style={styles.header}>
        <View style={styles.headerLeft}>
          <Image source={logo} style={styles.logo} />
        </View>
        <View style={styles.headerMiddle}>
          <Text style={styles.heading2}>Magasin °{shopId}</Text>
        </View>
        <TouchableOpacity style={styles.headerRight}>
          <Octicons name="info" size={24} color={colors.primary} />
        </TouchableOpacity>
      </View>

      {/* Deuxième ligne */}
      <View style={styles.searchBarContainer}>
        <CustomSearchBar />
      </View>

      {/* Contenu de la liste de produits */}
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

      {/* Barre de navigation en bas */}
      <CustomNavBar navigation={navigation} screen="HomeScreen" />
    </View>
  );
};

const styles = StyleSheet.create({
  container: {
    flex: 1,
    backgroundColor: colors.backgroundColor,
    height: "100%"
  },
  header: {
    flexDirection: 'row',
    alignItems: 'center',
    justifyContent: 'space-between',
    paddingHorizontal: 15,
    paddingTop: 10,
    paddingBottom: 5,
    borderBottomWidth: 1,
    borderBottomColor: colors.primary,
  },
  headerLeft: {
    flex: 1,
  },
  headerMiddle: {
    flex: 3,
    alignItems:"center"
  },
  headerRight: {
    flex: 1,
    alignItems: 'flex-end',
    marginRight:10,
  },
  logo: {
    width: 50,
    height: 50,
  },
  heading2: {
    color: colors.primary,
    fontSize: 18,
    fontWeight: 'bold',
  },
  scrollViewContent: {
    flexDirection: 'row',
    flexWrap: 'wrap',
    justifyContent: 'space-between',
    paddingHorizontal: 5,
    paddingBottom: "25%",
    marginTop: 10,
  },
  searchBarContainer: {
    paddingHorizontal: 10,
    height:"9%"
  },
});


export default ShopScreen;
