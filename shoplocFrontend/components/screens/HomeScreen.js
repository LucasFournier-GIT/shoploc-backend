import { StatusBar, View } from "react-native";
import CustomNavBar from "./../CustomNavBar";
import CustomSearchBar from "./../CustomSearchBar"
import { StyleSheet } from "react-native";
import { Text } from "react-native";
import { SearchBar } from 'react-native-elements';
import { ScrollView } from "react-native";
import ShopCard from "../ShopCard";

const dummyShops = [
    {
      id: 1,
      name: 'Auchan',
      status: true,
      hours: '8h00 - 18h00',
      imageUrl: 'https://www.farouknasri.com/files/2020/02/nouveau_logo_auchan.png',
    },
    {
      id: 2,
      name: 'Carrefour',
      status: false,
      hours: '9h00 - 20h00',
      imageUrl: 'https://upload.wikimedia.org/wikipedia/fr/thumb/3/3b/Logo_Carrefour.svg/1200px-Logo_Carrefour.svg.png',
    },
    {
        id: 3,
        name: 'Boulangerie Sohet ',
        status: true,
        hours: '8h00 - 18h00',
        imageUrl: 'https://images.unsplash.com/photo-1503023345310-bd7c1de61c7d?q=80&w=1965&auto=format&fit=crop&ixlib=rb-4.0.3&ixid=M3wxMjA3fDB8MHxwaG90by1wYWdlfHx8fGVufDB8fHx8fA%3D%3D',
      },
      {
        id: 4,
        name: 'Adeo surgelés',
        status: false,
        hours: '9h00 - 20h00',
        imageUrl: 'https://media.licdn.com/dms/image/C4D0BAQGc0tDAzkpMog/company-logo_200_200/0/1630537268957/adeo_services_logo?e=2147483647&v=beta&t=DbwPoC_d7o5JGUhn0_mTUudlQV-9o3kU5VFNY64KUms',
      },
      {
        id: 5,
        name: 'VadeResto',
        status: true,
        hours: '8h00 - 18h00',
        imageUrl: 'data:image/png;base64,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',
      },
      {
        id: 6,
        name: 'Auchan Villeneuve d Ascq',
        status: false,
        hours: '9h00 - 20h00',
        imageUrl: 'https://images.unsplash.com/photo-1503023345310-bd7c1de61c7d?q=80&w=1965&auto=format&fit=crop&ixlib=rb-4.0.3&ixid=M3wxMjA3fDB8MHxwaG90by1wYWdlfHx8fGVufDB8fHx8fA%3D%3D',
      },
  ];
  
  

const HomeScreen = ({ navigation }) => {

    return (
        <View style={styles.View}>
            <StatusBar
                animated={true}
                backgroundColor="#5D3528"
            />
            <CustomSearchBar></CustomSearchBar>
            <ScrollView contentContainerStyle={styles.scrollViewContent}>
                {dummyShops.map((shop) => (
                
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
            <CustomNavBar navigation={navigation} />
        </View>
    );
}

const styles = StyleSheet.create({
    View: {
        flex: 1,
        backgroundColor: "#EFEFEF",
        height: "100%"
    },
    searchBarContainer: {
        backgroundColor: '#EFEFEF',
        borderWidth: 1.5,
        borderColor: '#5D3528',
        borderTopWidth: 0,
        borderBottomWidth: 0,
        paddingHorizontal: 10,
        height:"150%"
    },
    searchBarInputContainer: {
        backgroundColor: "#FFFFFF",
        borderWidth: 1.5,
        borderColor: '#5D3528',
    },
    searchBarInput: {
        color: "#5D3528",
        fontStyle: 'italic',
    },
    scrollViewContent: {
        flexDirection: 'row',
        flexWrap: 'wrap',
        justifyContent: 'space-evenly',
        paddingHorizontal: 5, // Pas d'espace à gauche et à droite
        paddingBottom: "25%", 
        // Ajoutez un style pour ajuster l'espace entre les cartes
        marginTop: 10, // Espace en haut de la liste de cartes
        backgroundColor:"#EFEFEF"
      },
});

export default HomeScreen;
