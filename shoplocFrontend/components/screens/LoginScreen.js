import React from 'react';
import { View, Text, StyleSheet } from 'react-native';
import App from '../../App';
import CustomInput from '../CustomInput';
import CustomButton from '../CustomButton';
import { useNavigation } from '@react-navigation/native';


const LoginScreen = ({ navigation }) => {


  return (
    <View style={styles.container}>
      <Text style={styles.heading}>Bienvenue</Text>
      <View style={styles.content}>
        <Text style={styles.heading2}>Connexion</Text>
        <CustomInput type={"email-address"} label={"Votre adresse email"} placeholder={"Entrez votre adresse email"}/>
        <CustomInput type={"password"} label={"Votre mot de passe"} placeholder={"Entrez votre mot de passe"}/>
        <CustomButton text={"Se connecter"}/>
        <Text style={styles.createAccountText}>
          Pas de compte ? <Text style={styles.createAccountLink} onPress={() => navigation.navigate('CreateAccountScreen')}>Créer un compte</Text>
        </Text>
        <Text style={styles.footer}>
            ShopLoc by SEQI
        </Text>
      </View>
    </View>
  );
};

const styles = StyleSheet.create({
  container: {
    flex: 1,
    //justifyContent: 'center',
    alignItems: 'center',
    backgroundColor: "#5D3528",
  },
  heading: {
    fontSize: 39,
    fontWeight: 'bold',
    marginBottom: 20,
    marginTop: 20,
    color: '#EFEFEF',
    //fontFamily: 'LilyScriptOne-Regular',
  },
  heading2: {
    color:'#5D3528',
    //fontFamily: 'LilyScriptOne-Regular',
    fontSize: 26,
    marginBottom: 15
  },
  content:{
    flex: 1,
    width:'100%',
    backgroundColor: '#EFEFEF',
    borderTopLeftRadius: 50,
    borderTopRightRadius: 50,
    padding:'10%',
    
  },
  createAccountText: {
    marginTop: 10,
    color: '#5D3528',
    fontSize: 15,
    alignSelf: 'flex-end', 
  },
  createAccountLink: {
    fontWeight: 'bold',
    color:"#275C50",

  },
  footer :{
    color:"#5D3528",
    position:'absolute',
    bottom:10,
    alignSelf:'center'
  }
});

export default LoginScreen;
