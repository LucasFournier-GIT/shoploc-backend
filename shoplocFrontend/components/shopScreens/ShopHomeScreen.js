import { View, Text, StyleSheet, StatusBar, Image, ScrollView } from 'react-native';
import colors from "../../assets/colors";
import CustomSearchBar from "../CustomSearchBar"
import logo from "./../../assets/logo.png";
import { useContext, useEffect, useState } from 'react';
import ProductCard from '../ProductCard';
import { AuthContext } from '../AuthContext';
import CustomNavBar from '../CustomNavBar';



const ShopHomeScreen = ({ navigation }) => {

    const shopId = 1; //TODO route.params, récupérer l'id du magasin à la connexion
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
          });
  
        } catch (error) {
          console.error('Error fetching products:', error);
        }
      };
  
      fetchProducts();
    }, [shopId, token]);
  


    return (
        <View>
            <StatusBar
                animated={true}
                backgroundColor={colors.primary}
            />
            <View style={styles.head} >
              <Image source={logo} style={styles.logo} />
              <Text style={styles.heading}>Produits du magasin</Text>
            </View>

            <ScrollView contentContainerStyle={styles.scrollViewContent}>
                {products.map((product) => (
                <ProductCard
                    key={product.id}
                    name={product.nom}
                    quantity={product.disponibilite}
                    description={product.description}
                    imageUrl={product.image}
                    navigation={navigation}
                    productId={product.id}
                />
            ))}
      </ScrollView>
      <CustomNavBar navigation={navigation} screen="HomeScreen"></CustomNavBar>

        </View>
    )
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
        height:"150px",
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
      backgroundColor: colors.background,
      position: 'sticky',
      top: 0,
      zIndex: 1, 
      },
      heading: {
        fontSize: 30,
        display:"flex",
        fontWeight: 'bold',
        marginTop: 5,
        color: colors.primary,
        marginLeft:"auto",
        marginRight:"auto",
        alignSelf:"center"
    }
});


export default ShopHomeScreen;