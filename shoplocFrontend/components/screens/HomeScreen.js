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
import { useContext, useEffect, useState } from "react";  
import { AuthContext } from "../AuthContext";

const HomeScreen = ({ navigation }) => {

    const [shops, setShops] = useState([]);
    const { token, updateToken } = useContext(AuthContext);


    useEffect(() => {
      const fetchShopData = async () => {
        try {
          const response = await fetch('http://localhost:8080/api/shop', {
            method: 'GET',
            headers: {
              Authorization: `Bearer ${token}`,
              'Content-Type': 'application/json',
            },
          }).then((res)=> {
            return res.json(); 
          }).then((data)=>{
            setShops(data);
            console.log("THE DATA", data);
          });

          // Reste du code pour gérer la réponse de la requête...
        } catch (error) {
          console.error('Erreur lors de la requête : ', error);
        }
      };
    
      fetchShopData();
    }, [token]);
    

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
                    name={shop.nom} 
                    status={shop.status}
                    hours={shop.horairesOuverture}
                    imageUrl={shop.image}
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
      flexDirection: 'row',
      justifyContent: 'space-between',
      backgroundColor: colors.background,
      position: 'sticky',
      top: 0,
      zIndex: 1, 
      }
});

export default HomeScreen;
