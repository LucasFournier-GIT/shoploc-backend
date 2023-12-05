// Dans ShopScreen.js

import React from 'react';
import { View, Text } from 'react-native';
import CustomSearchBar from './../CustomSearchBar'
import CustomNavBar from './../CustomNavBar'
import { StyleSheet } from 'react-native';

const ShopScreen = ({ route, navigation }) => {
  const { shopId } = route.params;
  return (
    <View style={styles.container}>
        <CustomSearchBar></CustomSearchBar>
        <CustomNavBar navigation={navigation}></CustomNavBar>
    </View>
    
  );
};

const styles = StyleSheet.create({
    container:{
        flex: 1,
        backgroundColor: "#EFEFEF",
        height: "100%"
    }
})

export default ShopScreen;
