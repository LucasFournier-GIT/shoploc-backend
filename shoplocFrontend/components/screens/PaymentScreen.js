import React, { useState } from 'react';
import { Image, Modal, StyleSheet, Text, TouchableOpacity, View } from 'react-native';
import CustomNavBar from '../CustomNavBar';
import CustomInput from '../CustomInput';
import CustomButton from '../CustomButton';
import logo from './../../assets/logo.png';
import colors from "./../../assets/colors";
import CustomModal from './../CustomModal';

const PaymentScreen = ({ navigation, TotalAmount }) => {
  const [paymentOption, setPaymentOption] = useState(TotalAmount);
  const [number, setNumber] = useState(0);
  const [isModalVisible, setIsModalVisible] = useState(false);

  const handleOptionSelection = (option) => {
    setPaymentOption(option);
  };

  const handleNumberChange = (value) => {
    setNumber(value);
  }

  const handleValidate = () => {
    //Retirer les éléments du panier
    setIsModalVisible(true);

  }

  return (
    <View style={styles.container}>
      <View style={styles.card}>

        <View style={styles.option}>
            <TouchableOpacity style={styles.optionHead} onPress={() => handleOptionSelection('magasin')}>
            <Text style={styles.optionText}>Payer en magasin</Text>
            </TouchableOpacity>
            {paymentOption === 'magasin' && <Text>Valider votre commande maintenant et payez la en magasin au moment de la retirer, sur présentation de votre code ShopLoc</Text>}
        </View>


        <View style={styles.option}>

            <TouchableOpacity style={styles.optionHead} onPress={() => handleOptionSelection('ligne')}>
            <Text style={styles.optionText}>Payer en ligne</Text>
            </TouchableOpacity>
            {paymentOption === 'ligne' && 
                <View>
                    <Text>Payez votre commande en ligne dès maintenant ({TotalAmount}€)</Text>
                    <CustomInput
                        type={"text"}
                        label={"Numéro de carte"}
                        placeholder={"Votre numéro de carte"}
                        onChange={handleNumberChange} 
                    />
                    <CustomInput
                        type={"text"}
                        label={"Date de péremption"}
                        placeholder={"Date de fin de validité de la carte "}
                        onChange={handleNumberChange} 
                    />
                    <CustomInput
                        type={"text"}
                        label={"CVC"}
                        placeholder={"Cryptogramme"}
                        onChange={handleNumberChange} 
                    />
                    <CustomButton text={"Valider"} onPress={handleValidate}></CustomButton>
                </View>
            }
        </View>


      </View>
      <CustomModal
        isVisible={isModalVisible}
        onClose={() => setIsModalVisible(false)}
        modalText={"Le paiement a bien été effectué"}
      />
      <CustomNavBar navigation={navigation} screen="CartScreen" />

    </View>
  );
};

const styles = StyleSheet.create({
  container: {
    flex: 1,
  },
  optionHead: {
    flexDirection: 'row',
    alignItems: 'center',
    marginBottom:5,
  },
  option:{
    backgroundColor: colors.background ,
    margin: 5,
    padding: 10,
  },
  optionText:{
    fontSize:17
  },
  card: {
    backgroundColor: 'white',
    borderRadius: 32.5,
    padding: 20,
    elevation: 5,
    margin:10,
  },
  modalContainer: {
    flex: 1,
    justifyContent: 'center',
    alignItems: 'center',
    backgroundColor: 'rgba(0, 0, 0, 0.5)', 
  },
  modalContent: {
    backgroundColor: 'white',
    borderRadius: 10,
    padding: 20,
    alignItems: 'center',
    elevation: 5, // Ombre
  },
  modalText: {
    fontSize: 18,
    marginBottom: 20,
    textAlign: 'center',
  },
  modalButton: {
    padding: 10,
    borderRadius: 5,
    marginTop: 10,
  },
  buttonText: {
    color: 'white',
    fontSize: 16,
    textAlign: 'center',
  },

});

export default PaymentScreen;