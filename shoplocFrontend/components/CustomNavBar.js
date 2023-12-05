import { Text } from "react-native";
import { StyleSheet } from "react-native";
import { TouchableOpacity } from "react-native";
import { View } from "react-native";

const CustomNavBar = ({navigation}) => {
    return(
        <View style={styles.navBar}>
            <TouchableOpacity onPress={() => navigation.navigate('HomeScreen')}>
                <Text style={styles.navText}>Home</Text>
            </TouchableOpacity>
            <TouchableOpacity onPress={() => navigation.navigate('LoginScreen')}>
                <Text style={styles.navText}>Traj</Text>
            </TouchableOpacity>
            <TouchableOpacity onPress={() => navigation.navigate('LoginScreen')}>
                <Text style={styles.navText}>Pani</Text>
            </TouchableOpacity>
            <TouchableOpacity onPress={() => navigation.navigate('LoginScreen')}>
                <Text style={styles.navText}>Prof</Text>
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
  
  
  