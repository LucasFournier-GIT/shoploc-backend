import React, { useState } from 'react';
import { View, Text, TextInput, StyleSheet } from 'react-native';
import colors from "./../assets/colors";

const CustomInput = ({ type, label, placeholder, onChange }) => {
  const [inputValue, setInputValue] = useState('');

  const handleInputChange = (value) => {
    setInputValue(value);
    if (onChange) {
      onChange(value);
    }
  };

  return (
    <View style={styles.container}>
      <Text style={styles.label}>{label}</Text>
      <View style={styles.inputContainer}>
        <TextInput
          style={styles.input}
          secureTextEntry={type === 'password'}
          keyboardType={type === 'email-address' ? 'email-address' : 'default'}
          onChangeText={handleInputChange}
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
    color: colors.primary
  },
  inputContainer: {
    position: 'relative',
    width: '100%',
    
  },
  input: {
    borderWidth: 2,
    borderColor: colors.primary,
    borderRadius: 32.5,
    padding: 10,
    fontSize: 15,
    backgroundColor:"white"
  },
  placeholder: {
    position: 'absolute',
    left: 15,
    top: 13,
    fontStyle: 'italic',
    fontSize: 15,
    color: colors.light,
  },
});

export default CustomInput;
