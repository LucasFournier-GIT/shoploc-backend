import { View, Text, StyleSheet, ScrollView } from 'react-native';
import CustomInput from '../CustomInput';
import CustomButton from '../CustomButton';
import { useState } from 'react';
import colors from "./../../assets/colors";

const CreateAccountScreen = ({navigation}) => {
    
  const [nom, setNom] = useState('');
  const [prenom, setPrenom] = useState('');
  const [mail, setMail] = useState('');
  const [mdp, setMdp] = useState('');
  const [confMdp, setConfMdp] = useState('');
  const [immatriculation, setImmatriculation] = useState('');

  const handleChangeNom = (value) => { setNom(value); };
  const handleChangePrenom = (value) => { setPrenom(value); };
  const handleChangeMail = (value) => { setMail(value); };
  const handleChangeMdp = (value) => { setMdp(value); };
  const handleChangeConfMdp = (value) => { setConfMdp(value); };
  const handleChangeImmatriculation = (value) => { setImmatriculation(value); };

  const handleCreateAccount = () => {
    //TODO verifier que le compte n'est pas déjà enregistré
    if(mdp === confMdp){
      console.log(nom);
      console.log(prenom);
      console.log(mail);
      console.log(mdp);
      console.log(immatriculation);
    }

    //TODO enregistrer le compte dans la Base

    navigation.navigate("HomeScreen");
  }

  return (
      <View style={styles.container}>
      <Text style={styles.heading}>Bienvenue</Text>
      <View style={styles.content}>
      <ScrollView>
        <Text style={styles.heading2}>Inscription</Text>
        <CustomInput type={"text"} label={"Votre nom"} placeholder={"Votre nom"} onChange={handleChangeNom} />
        <CustomInput type={"text"} label={"Votre prénom"} placeholder={"Votre prénom"} onChange={handleChangePrenom} />
        <CustomInput type={"email-address"} label={"Votre adresse email"} placeholder={"Votre adresse email"} onChange={handleChangeMail} />
        <CustomInput type={"text"} label={"Votre immatrirculation (facultative)"} placeholder={"Votre numéro d'immatriculation"} onChange={handleChangeImmatriculation}/>
        <CustomInput type={"password"} label={"Votre mot de passe"} placeholder={"Votre mot de passe"} onChange={handleChangeMdp}/>
        <CustomInput type={"password"} label={"Confirmation - Votre mot de passe"} placeholder={"Votre mot de passe"} onChange={handleChangeConfMdp}/>
        </ScrollView>
        <CustomButton text={"Créer un compte"} onPress={handleCreateAccount}/>
        
        <Text style={styles.footer}>
            ShopLoc by SEQI
        </Text>
      </View>
    </View>
  )
}


const styles = StyleSheet.create({
    container: {
      flex: 1,
      //justifyContent: 'center',
      alignItems: 'center',
      backgroundColor: colors.primary,
    },
    heading: {
      fontSize: 30,
      fontWeight: 'bold',
      marginBottom: 20,
      marginTop: 20,
      color: colors.background,
      //fontFamily: 'LilyScriptOne-Regular',
    },
    heading2: {
      color: colors.primary,
      //fontFamily: 'LilyScriptOne-Regular',
      fontSize: 20,
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
  })
export default CreateAccountScreen;