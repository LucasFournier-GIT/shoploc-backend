import { ScrollView, Text } from "react-native";
import { View } from "react-native-animatable";
import { TouchableOpacity } from "react-native-gesture-handler";

//Recuperation des éléments du panier

  

// Calcul de la somme totale des produits (price * quantity)
  const RecapCart = ({ navigation, route }) => {
    const { store } = route.params;
  
    // Calcul du prix total du panier du magasin
    const storeTotalAmount = store.products.reduce((acc, product) => {
      return acc + product.price * product.quantity;
    }, 0);
  
    return (
      <View>
        <ScrollView>
          {/* Affichage des produits du panier */}
        </ScrollView>
        <View>
          <Text>Prix total du panier: {storeTotalAmount}</Text>
        </View>
        <TouchableOpacity>
          <Text>Valider ce panier</Text>
        </TouchableOpacity>
      </View>
    );
  };

export default RecapCart;
