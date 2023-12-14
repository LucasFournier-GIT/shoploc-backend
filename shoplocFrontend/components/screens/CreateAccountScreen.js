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

const CreateAccountScreen = () => {
    return (
        <View style={styles.container}>
        <Text style={styles.heading}>Bienvenue</Text>
        <View style={styles.content}>
          <Text style={styles.heading2}>Inscription</Text>
          <CustomInput type={"text"} label={"Votre nom"} placeholder={"Votre nom"}/>
          <CustomInput type={"email-address"} label={"Votre adresse email"} placeholder={"Votre adresse email"}/>
          <CustomInput type={"text"} label={"Votre immatrirculation (facultative)"} placeholder={"Votre numéro d'immatriculation"}/>
          <CustomInput type={"password"} label={"Votre mot de passe"} placeholder={"Votre mot de passe"}/>
          <CustomInput type={"password"} label={"Confirmation - Votre mot de passe"} placeholder={"Votre mot de passe"}/>
          <CustomButton text={"Créer un compte"}/>
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
      backgroundColor: "#5D3528",
    },
    heading: {
      fontSize: 30,
      fontWeight: 'bold',
      marginBottom: 20,
      marginTop: 20,
      color: '#EFEFEF',
      //fontFamily: 'LilyScriptOne-Regular',
    },
    heading2: {
      color:'#5D3528',
      //fontFamily: 'LilyScriptOne-Regular',
      fontSize: 20,
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
  })
export default CreateAccountScreen;