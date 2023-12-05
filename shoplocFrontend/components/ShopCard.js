import React from 'react';
import { View, Text, Image, StyleSheet } from 'react-native';
import { TouchableOpacity } from 'react-native-gesture-handler';

const ShopCard = ({ navigation, name, id, status, hours, imageUrl }) => {

  const handleShopPress = () => {
    navigation.navigate('ShopScreen', { shopId: id });
  };



  return (
    <View style={styles.card} >
    <TouchableOpacity style={styles.container} onPress={handleShopPress}>
      <Image source={{ uri: imageUrl }} style={styles.image} />
      <Text style={styles.name}>{name}</Text>
      <Text style={[styles.status, { color: status ? '#2ecc71' : '#e74c3c' }]}>
        {status ? 'Ouvert' : 'Fermé'}
      </Text>
      <Text style={styles.hours}>{hours}</Text>
    </TouchableOpacity>
    </View>
  );
};

const styles = StyleSheet.create({
  container:{
    width:"100%",
    backgroundColor:"transparent",
    margin:0,
    padding:0
  },
  card: {
    borderColor: '#ccc',
    borderRadius: 32.5,
    backgroundColor: '#fff',
    elevation: 5,
    margin:5,
    width: '47%', 
    marginBottom: 5,
  
  },
  image: {
    width: '100%',
    aspectRatio: 1, 
    borderRadius: 32.5,
    marginTop: 0,
    marginBottom:5
  },
  name: {
    fontSize: 17,
    fontWeight: 'bold',
    marginBottom: 5,
    textAlign: 'center',
    paddingLeft:5,
    paddingRight:5,
  },
  status: {
    fontSize: 17,
    fontStyle: 'italic',
    textAlign: 'center', // Centrage du texte
    paddingLeft:5,
    paddingRight:5,
  },
  hours: {
    fontSize: 17,
    fontStyle: 'italic',
    color: '#555',
    textAlign: 'center', // Centrage du texte
    paddingLeft:5,
    paddingRight:5,
    marginBottom:5  
  },
});

export default ShopCard;
