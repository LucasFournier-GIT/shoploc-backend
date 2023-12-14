import React, { useState } from 'react';
import { View, Text, StyleSheet } from 'react-native';
import CustomInput from '../CustomInput';
import CustomButton from '../CustomButton';
import { useNavigation } from '@react-navigation/native';
import colors from "./../../assets/colors";

const LoginScreen = ({ navigation }) => {

  const [email, setEmail] = useState('');
  const [password, setPassword] = useState('');

  const handleEmailChange = (value) => { setEmail(value); };
  const handlePasswordChange = (value) => { setPassword(value); };

  const handleConnexion = () => {
    console.log(email);
    console.log(password);

    //TODO Connexion avec email et MDP

    //Si la connexion est réussie :
    navigation.navigate('HomeScreen');
  };

  return (
    <View style={styles.container}>
      <Text style={styles.heading}>Bienvenue</Text>
      <View style={styles.content}>
        <Text style={styles.heading2}>Connexion</Text>
        <CustomInput
          type={"email-address"}
          label={"Votre adresse email"}
          placeholder={"Entrez votre adresse email"}
          onChange={handleEmailChange}
        />
        <CustomInput
          type={"password"}
          label={"Votre mot de passe"}
          placeholder={"Entrez votre mot de passe"}
          onChange={handlePasswordChange} 
        />
        <CustomButton text={"Se connecter"}  onPress={handleConnexion}/>
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
    alignItems: 'center',
    backgroundColor: colors.primary,
  },
  heading: {
    fontSize: 39,
    fontWeight: 'bold',
    marginBottom: 20,
    marginTop: 20,
    color: colors.background,
    //fontFamily: 'LilyScriptOne-Regular',
  },
  heading2: {
    color: colors.primary,
    //fontFamily: 'LilyScriptOne-Regular',
    fontSize: 26,
    marginBottom: 15
  },
  content:{
    flex: 1,
    width:'100%',
    backgroundColor: colors.background,
    borderTopLeftRadius: 50,
    borderTopRightRadius: 50,
    padding:'10%',
    
  },
  createAccountText: {
    marginTop: 10,
    color: colors.primary,
    fontSize: 15,
    alignSelf: 'flex-end', 
  },
  createAccountLink: {
    fontWeight: 'bold',
    color: colors.secondary,

  },
  footer :{
    color: colors.primary,
    position:'absolute',
    bottom:10,
    alignSelf:'center'
  }
});

export default LoginScreen;
