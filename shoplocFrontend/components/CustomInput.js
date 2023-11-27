import React, { useState } from 'react';
import { View, Text, TextInput, StyleSheet } from 'react-native';

const CustomInput = ({ type, label, placeholder }) => {
  const [inputValue, setInputValue] = useState(''); // Utilisation de "inputValue" au lieu de "text"

  return (
    <View style={styles.container}>
      <Text style={styles.label}>{label}</Text>
      <View style={styles.inputContainer}>
        <TextInput
          style={styles.input}
          placeholderTextColor="#999999"
          value={inputValue} // Utilisation de "inputValue" ici
          onChangeText={(value) => setInputValue(value)} // Mise à jour de "inputValue"
          secureTextEntry={type === 'password'}
          keyboardType={type === 'email' ? 'email-address' : 'default'}
        />
        {inputValue === '' && (
          <Text style={styles.placeholder}>{placeholder}</Text>
        )}
      </View>
    </View>
  );
};

const styles = StyleSheet.create({
  container: {
    marginBottom: 15,
  },
  label: {
    marginBottom: 5,
    fontSize: 17,
    color: '#5D3528'
  },
  inputContainer: {
    position: 'relative',
    width: '100%',
  },
  input: {
    borderWidth: 2,
    borderColor: '#5D3528',
    borderRadius: 32.5,
    padding: 10,
    fontSize: 15,
  },
  placeholder: {
    position: 'absolute',
    left: 15,
    top: 13,
    fontStyle: 'italic',
    fontSize: 15,
    color: '#B18F84',
  },
});

export default CustomInput;
