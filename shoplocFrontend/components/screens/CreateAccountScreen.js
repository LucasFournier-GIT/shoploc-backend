import { View, Text, StyleSheet, ScrollView } from 'react-native';
import CustomInput from '../CustomInput';
import CustomButton from '../CustomButton';
import { useState } from 'react';
import colors from "./../../assets/colors";
import { useEffect } from 'react';

const CreateAccountScreen = ({navigation}) => {

  // États locaux pour stocker les informations du formulaire et le token
  const [nom, setNom] = useState('');
  const [prenom, setPrenom] = useState('');
  const [mail, setMail] = useState('');
  const [mdp, setMdp] = useState('');
  const [confMdp, setConfMdp] = useState('');
  const [immatriculation, setImmatriculation] = useState('');
  const [token, setToken] = useState('');

  const handleChangeNom = (value) => { 
    console.log("HELLO0");
    setNom(value); console.log("nom : ", value)
  };
  const handleChangePrenom = (value) => { setPrenom(value); };
  const handleChangeMail = (value) => { setMail(value); };
  const handleChangeMdp = (value) => { setMdp(value); };
  const handleChangeConfMdp = (value) => { setConfMdp(value); };
  const handleChangeImmatriculation = (value) => { setImmatriculation(value); };

    // Fonction pour envoyer la requête d'inscription
    const handleCreateAccount = async () => {
      console.log(nom);
      console.log(prenom);
      console.log(mail);
      console.log(mdp);
      //console.log(immatriculation);
      console.log(token);

      if (mdp === confMdp) {
        try {
          const response = await fetch('http://localhost:8080/api/auth/register', {
            method: 'POST',
            headers: {
              'Content-Type': 'application/json',
            },
            body: JSON.stringify({
              email: mail,
              password: mdp,
            }),
          });
          const data = await response.json();

          setToken(data.token);
        } catch (error) {
          console.error('Erreur lors de l\'inscription : ', error);
        }
      }
      console.log(nom);
      console.log(prenom);
      console.log(mail);
      console.log(mdp);
      //console.log(immatriculation);
      console.log(token);
    
    };

    // Effectue la requête lorsque le token change
    useEffect(() => {
      if (token) {
        // Faites quelque chose avec le token, par exemple, stockez-le localement
        console.log('Token enregistré : ', token);
      }
    }, [token]);

    return (
        <View style={styles.container}>
        <Text style={styles.heading}>Bienvenue</Text>
        <View style={styles.content}>
          <Text style={styles.heading2}>Inscription</Text>
          <CustomInput type={"text"} label={"Votre nom"} placeholder={"Votre nom"} onChange={handleChangeNom} />
          <CustomInput type={"text"} label={"Votre prénom"} placeholder={"Votre prénom"} onChange={handleChangePrenom} />
        <CustomInput type={"email-address"} label={"Votre adresse email"} placeholder={"Votre adresse email"} onChange={handleChangeMail} />
        <CustomInput type={"text"} label={"Votre immatriculation (facultative)"} placeholder={"Votre numéro d'immatriculation"} onChange={handleChangeImmatriculation} />
        <CustomInput type={"password"} label={"Votre mot de passe"} placeholder={"Votre mot de passe"} onChange={handleChangeMdp} />
        <CustomInput type={"password"} label={"Confirmation - Votre mot de passe"} placeholder={"Votre mot de passe"} onChange={handleChangeConfMdp} />

        <CustomButton text={"Créer un compte"} onPress={handleCreateAccount} />
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