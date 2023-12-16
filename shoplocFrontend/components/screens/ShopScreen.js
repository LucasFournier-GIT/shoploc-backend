import React, { useContext, useEffect, useState } from 'react';
import { View, Text, StyleSheet, ScrollView, Image, TouchableOpacity } from 'react-native';
import CustomSearchBar from './../CustomSearchBar';
import CustomNavBar from './../CustomNavBar';
import ProductCard from './../ProductCard';
import logo from './../../assets/logo.png';
import { Octicons } from '@expo/vector-icons'; 
import colors from "./../../assets/colors";
import { AuthContext } from '../AuthContext';

// Liste fictive de produits


const ShopScreen = ({ route, navigation }) => {
  const { shopId } = route.params;
  const { token } = useContext(AuthContext);

  const [products, setProducts] = useState([]);

  useEffect(() => {
    const fetchProducts = async () => {
      try {
        const response = await fetch(`http://localhost:8080/api/product/shop/${shopId}`, {
          method: 'GET',
          headers: {
            Authorization: `Bearer ${token}`,
            'Content-Type': 'application/json',
          },
        }).then((res)=> {
          return res.json(); 
        }).then((data)=>{
          setProducts(data);
          console.log("THE DATA", data);
        });

      } catch (error) {
        console.error('Error fetching products:', error);
      }
    };

    fetchProducts();
  }, [shopId, token]);



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
        {products.map((product) => (
          <ProductCard
            key={product.id}
            name={product.nom}
            quantity={product.disponibilite}
            description={product.description}
            imageUrl={product.image}
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
