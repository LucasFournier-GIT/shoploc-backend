import { Image, StatusBar, View } from "react-native";
import CustomNavBar from "./../CustomNavBar";
import CustomSearchBar from "./../CustomSearchBar"
import { StyleSheet } from "react-native";
import { Text } from "react-native";
import { SearchBar } from 'react-native-elements';
import { ScrollView } from "react-native";
import ShopCard from "../ShopCard";
import logo from "./../../assets/logo.png";
import colors from "./../../assets/colors";
import { useEffect, useState } from "react";

  const token = 'eyJhbGciOiJIUzM4NCJ9.eyJzdWIiOiJjYW1pbGxlcm1wb2lyaWVyQGdtYWlsLmNvbSIsImlhdCI6MTcwMjY1MjIzOCwiZXhwIjoxNzAyNjUzNjc4fQ.jquyVK7G0xVR4HQvBQNxtYKA6v_c_g5v5P9RuQIxokUE8zi6kiMCa0nU13QJyjLc';

  

const HomeScreen = ({ navigation }) => {

    const [shops, setShops] = useState([]);

    useEffect(() => {
      // Fonction pour récupérer les données des magasins depuis votre API
      const fetchShops = async () => {
          try {
              const response = await fetch('http://localhost:8080/api/shop');
              if (response.ok) {
                  const data = await response.json();
                  console.log(data);
                  console.log("HELLLOOOO");
                  setShops(data); // Met à jour l'état avec les données des magasins récupérées
              } else {
                  console.error('1 - Erreur lors de la récupération des magasins:', response.status);
              }
          } catch (error) {
              console.error('2 - Erreur lors de la récupération des magasins:', error);
          }
      };

      fetchShops(); // Appel de la fonction pour récupérer les magasins au chargement du composant
    }, []); // Utilisation d'un tableau vide pour n'exécuter useEffect qu'une seule fois après le rendu initial


    return (
        <View style={styles.View}>
          
            <StatusBar
                animated={true}
                backgroundColor={colors.primary}
            />
            <View style={styles.head} >
              <Image source={logo} style={styles.logo} />
              <CustomSearchBar></CustomSearchBar>
            </View>
            <ScrollView contentContainerStyle={styles.scrollViewContent}>
                {shops.map((shop) => (
                
                <ShopCard
                    key={shop.id}
                    name={shop.name} 
                    status={shop.status}
                    hours={shop.hours}
                    imageUrl={shop.imageUrl}
                    navigation={navigation}
                    id={shop.id}
                />
                ))}
            </ScrollView>
            <CustomNavBar navigation={navigation} screen="HomeScreen" />

        </View>
    );
}

const styles = StyleSheet.create({
    View: {
        flex: 1,
        backgroundColor: "colors.background",
        height: "100%"
    },
    searchBarContainer: {
        backgroundColor: colors.background,
        borderWidth: 1.5,
        borderColor: colors.primary,
        borderTopWidth: 0,
        borderBottomWidth: 0,
        paddingHorizontal: 10,
        height:"150%",
        flexDirection:"row",
        flex:1,
    },
    scrollViewContent: {
        flexDirection: 'row',
        flexWrap: 'wrap',
        justifyContent: 'space-evenly',
        paddingHorizontal: 5, 
        paddingBottom: "25%", 
        backgroundColor: colors.background,
      },
    logo:{
      width: 50,
      height: 50,
      margin:15,
      marginRight:0
    },
    head: {
      flexDirection:"row"
    }
});

export default HomeScreen;
