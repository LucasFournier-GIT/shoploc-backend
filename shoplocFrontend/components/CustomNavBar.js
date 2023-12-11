import { Text } from "react-native";
import { StyleSheet } from "react-native";
import { TouchableOpacity } from "react-native";
import { View } from "react-native";
import { Ionicons } from '@expo/vector-icons';
import { FontAwesome5 } from '@expo/vector-icons'; 
import { Entypo } from '@expo/vector-icons'; 
import { useState } from "react";
import { MaterialIcons } from '@expo/vector-icons'; 
import { Feather } from '@expo/vector-icons'; 

const CustomNavBar = ({navigation, screen}) => {


    const handleGoHomeScreen = () => {
        navigation.navigate('HomeScreen');
    }
    
    const handleGoLoginScreen = () => {
        navigation.navigate('LoginScreen')
    }
    
    const handleGoCartScreen = () => {
        navigation.navigate('CartScreen')
    }
    
    const handleProfileScreen = () => {
        navigation.navigate('ProfileScreen')
    }

    return(
        <View style={styles.navBar}>
            <TouchableOpacity onPress={handleGoHomeScreen}>
                <Ionicons 
                name={screen === 'HomeScreen' ? "home" : "home-outline"}
                size={screen === 'HomeScreen' ? 34 : 24} 
                color="white" />
            </TouchableOpacity>
            <TouchableOpacity onPress={handleGoLoginScreen}>
                {screen === 'MapScreen' ? (
                    <MaterialIcons name="location-pin" size={34} color="white" />
                ) : (
                    <Feather name="map-pin" size={24} color="white" />
                )}
            </TouchableOpacity>
            <TouchableOpacity onPress={handleGoCartScreen}>
                <Ionicons
                    name={screen === "CartScreen" ? "basket" : "basket-outline"}
                    size={screen === "CartScreen" ? 34 : 24}
                    color="white" />
            </TouchableOpacity>
            <TouchableOpacity onPress={handleProfileScreen}>
                <Ionicons
                    name={screen === "LoginScreen" ? "person" : "person-outline"}
                    size={screen === "LoginScreen" ? 34 : 24}
                    color="white" />
            </TouchableOpacity>
        </View>
    )
}

export default CustomNavBar;

const styles = StyleSheet.create({
    container:{
  
    },
    navBar: {
      flexDirection: 'row', // Pour aligner les éléments horizontalement
      justifyContent: 'space-around', // Pour répartir l'espace entre les éléments
      height:"10%",
      width:"90%",
      alignItems: 'center', // Pour centrer verticalement les éléments
      backgroundColor: '#5D3528',
      alignSelf:'center',
      borderRadius:32.5,
      //paddingVertical: 10,
      //paddingHorizontal: 20,
      position: 'absolute',
      bottom: 10,
      //left: 0,
      //right: 0,
    },
    navText: {
      color: '#FFFFFF',
      fontSize: 16,
      fontWeight: 'bold',
    },
    tabBar:{
  
    }
  });
  
  
  