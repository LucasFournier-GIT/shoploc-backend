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
import colors from "./../assets/colors";

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
            <TouchableOpacity
                onPress={handleGoHomeScreen}
                style={screen === 'HomeScreen' ? styles.active : ""}
                >
                <Ionicons 
                style={styles.icon}
                name={screen === 'HomeScreen' ? "home" : "home-outline"}
                size={screen === 'HomeScreen' ? 34 : 24} 
                color="white" />
            </TouchableOpacity>
            <TouchableOpacity 
                disabled={true}
                onPress={handleGoLoginScreen}
                style={screen === 'LoginScreen' ? styles.active : ""}
                >
                {screen === 'MapScreen' ? (
                    <MaterialIcons name="location-pin" size={34} color="white" />
                ) : (
                    <Feather name="map-pin" size={24} color="white" />
                )}
            </TouchableOpacity>
            <TouchableOpacity 
                onPress={handleGoCartScreen}
                style={screen === 'CartScreen' ? styles.active : ""}
                >
                <Ionicons
                    name={screen === "CartScreen" ? "basket" : "basket-outline"}
                    size={screen === "CartScreen" ? 34 : 24}
                    color="white" />
            </TouchableOpacity>
            <TouchableOpacity 
                disabled={true}

                onPress={handleProfileScreen}
                style={screen === 'ProfileScreen' ? styles.active : ""}
                >
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
        flexDirection: 'row',
        justifyContent: 'space-around',
        height: "10%",
        width: "90%",
        alignItems: 'center',
        backgroundColor: colors.primary,
        alignSelf: 'center',
        borderRadius: 32.5,
        position: 'sticky',
        bottom: 0, 
        zIndex: 1, 
      },    
    navText: {
      color: 'white',
      fontSize: 16,
      fontWeight: 'bold',
    },
    tabBar:{
  
    },
    active:{
        backgroundColor: colors.primary,
        padding:15,
        borderRadius:50,
        height:70,
        width:80,
        alignItems:"center",
        marginBottom:25
    },
    icon:{

    },
    hidden:{
        display:"none",
    }
  });
  
  
  