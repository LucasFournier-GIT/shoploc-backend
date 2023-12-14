import { ScrollView, StyleSheet, Text } from "react-native";
import { View } from "react-native-animatable";
import { TouchableOpacity } from "react-native-gesture-handler";
import CustomButton from "../CustomButton";
import CustomNavBar from "../CustomNavBar";
import colors from './../../assets/colors';


// Calcul de la somme totale des produits (price * quantity)
  const RecapCart = ({ navigation, route }) => {
    const { TotalAmount } = route.params;
  
    const handleCancel = () => {
      navigation.navigate("CartScreen");
    }

    const handleValidate = () => {
      navigation.navigate("PaymentScreen", {navigation:navigation, TotalAmount:TotalAmount})
    }

    return (
      <View style = {styles.container}>
        <View style={styles.card}>
          <View>
            <Text style={styles.text}>Vous allez valider un panier d'un montant de <Text style={styles.amount}>{TotalAmount}€</Text>. Êtes-vous sûr de vouloir valider ce panier ? </Text>
          </View>
          <View style={styles.row}>
            <CustomButton text={"Annuler"} onPress={handleCancel}></CustomButton>
            <CustomButton text={"Payer ce panier"} onPress={handleValidate}></CustomButton>
          </View>
        </View>
        <CustomNavBar navigation={navigation} screen="CartScreen" />
      </View>

    );
  };
  const styles = StyleSheet.create({
    container: {
      flex: 1,
      justifyContent: "center",
      alignItems: "center",
    },
    card: {
      backgroundColor: "white",
      borderRadius: 32.5,
      padding: 20,
      elevation: 5,
      maxWidth: 300, // Ajuster la largeur de la carte selon les besoins
    },
    amount: {
      fontWeight: "bold",
      color: colors.secondary,
    },
    text: {
      textAlign: "center",
      fontSize: 18,
      marginBottom: 60,
    },
    row:{
      position:"absolute",
      bottom:0,
      alignSelf:"center",
      flexDirection:"row",
      marginBottom:5,
    }
  });
  
  export default RecapCart;
  