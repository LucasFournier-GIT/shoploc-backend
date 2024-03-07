import React, { useContext, useEffect, useState } from 'react';
import { View, Text, Button, StyleSheet, ScrollView, ScrollViewBase } from 'react-native';
import ShopCartSummary from '../ShopCartSummary';
import CustomNavBar from '../CustomNavBar';
import colors from "../../assets/colors";
import { AuthContext } from '../AuthContext';

const CartScreen = ({ navigation }) => {

    //const [userCarts, setUserCarts] = useState([]);
    const { token, updateToken } = useContext(AuthContext);

    /*useEffect(() => {
        const fetchUserCarts = async () => {
            try {
                console.log("THE TOKEN", token);
                const response = await fetch('http://localhost:8080/api/product_in_cart', {
                    method: 'GET',
                    headers: {
                        Authorization: `Bearer ${token}`,
                        'Content-Type': 'application/json',
                    },
                }).then((res)=> {
                    console.log(res);

                    return res.json();
                }).then((data)=>{
                    setUserCarts(data);
                    console.log("THE DATA", data);
                });

            } catch (error) {
                console.error('Erreur lors de la requÃªte : ', error);
            }
        };

        fetchUserCarts();
    }, []);*/

    const userCarts = [
        {
            id: 1,
            name: 'Auchan',
            products: [
                { id: 101, name: 'Brioche', quantity: 2, price: 10.99 },
                { id: 102, name: 'Lait', quantity: 1, price: 7.49 },
            ],
        },
        {
            id: 2,
            name: 'Lulu Berlu',
            products: [
                { id: 201, name: 'Sirop', quantity: 3, price: 5.99 },
                { id: 202, name: 'Jus orange', quantity: 1, price: 12.99 },
            ],
        },
        {
            id: 3,
            name: 'Boulangerie Sohet',
            products: [
                { id: 203, name: 'Biscuits', quantity: 2, price: 8.49 },
                { id: 204, name: 'Pains au chocolat', quantity: 4, price: 9.99 },
            ],
        },
    ];


    const handleValidateAll = () => {
        const totalAmount = userCarts.reduce((acc, store) => {
            return (
                acc +
                store.products.reduce((storeAcc, product) => {
                    return storeAcc + product.quantity * product.price;
                }, 0)
            );
        }, 0);

        navigation.navigate("RecapCartScreen", { TotalAmount: totalAmount, navigation: navigation });

    };

    return (
        <View style={styles.container}>
            <Text style={styles.heading}>Paniers</Text>
            <ScrollView style={styles.card}>

                {userCarts.map((cart) => (
                    <ShopCartSummary navigation={navigation} key={cart.id} store={cart} />
                ))}
            </ScrollView>

            <View style={styles.buttonContainer}>
                <Button title="Valider tout" onPress={handleValidateAll} color={"#275C50"} />
            </View>

            <CustomNavBar navigation={navigation} screen="CartScreen" />
        </View>
    );
};

const styles = StyleSheet.create({
    container: {
        flex: 1,
        top: 0,
        backgroundColor: colors.background,

    },
    content: {
        bottom: 125,
    },
    heading: {
        fontSize: 30,
        fontWeight: 'bold',
        marginTop: 5,
        color: colors.primary,
        alignSelf: 'center',
    },
    card: {
        backgroundColor: "white",
        borderRadius: 32.5,
        margin: 10,
        marginBottom:135,
        padding:5,
    },
    buttonContainer: {
        position: 'absolute',
        bottom: 85,
        width: '100%',
        alignItems: 'center',

    },
});


export default CartScreen;
