import { ScrollView, StyleSheet, Text, View } from "react-native";
import { TouchableOpacity } from "react-native-gesture-handler";
import CustomButton from "../CustomButton";
import CustomNavBar from "../CustomNavBar";
import colors from './../../assets/colors';

const RecapCart = ({ navigation, route }) => {
  const { TotalAmount } = route.params;

  const handleCancel = () => {
    navigation.navigate("CartScreen");
  }

  const handleValidate = () => {
    navigation.navigate("PaymentScreen", { navigation: navigation, TotalAmount: TotalAmount });
  }

  return (
    <View style={styles.container}>
      <View style={styles.content}>
        <View style={styles.card}>
          <View>
            <Text style={styles.text}>Vous allez valider un panier d'un montant de <Text style={styles.amount}>{TotalAmount}€</Text>. Êtes-vous sûr de vouloir valider ce panier ? </Text>
          </View>
          <View style={styles.row}>
            <CustomButton text={"Annuler"} onPress={handleCancel}></CustomButton>
            <CustomButton text={"Payer ce panier"} onPress={handleValidate}></CustomButton>
          </View>
        </View>
      </View>
      <CustomNavBar navigation={navigation} screen="CartScreen" style={styles.navBar} />
    </View>
  );
};

const styles = StyleSheet.create({
  container: {
    flex: 1,
  },
  content: {
    flex: 1,
    justifyContent: "center",
    alignItems: "center",
  },
  card: {
    backgroundColor: "white",
    borderRadius: 32.5,
    padding: 20,
    elevation: 5,
    maxWidth: "90%",
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
  row: {
    flexDirection: "row",
    justifyContent: "space-between",
    paddingHorizontal: 20,
    paddingBottom: 10,
  },
  navBar: {
    position: "absolute",
    bottom: 0,
    width: "100%",
  },
});

export default RecapCart;
