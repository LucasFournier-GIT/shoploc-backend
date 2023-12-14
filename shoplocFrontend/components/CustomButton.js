import React from 'react';
import { TouchableOpacity, Text, StyleSheet } from 'react-native';
import colors from './../assets/colors';

const CustomButton = ({ text, onPress }) => {
  return (
    <TouchableOpacity style={styles.button} onPress={onPress}>
      <Text style={styles.buttonText}>{text}</Text>
    </TouchableOpacity>
  );
};

const styles = StyleSheet.create({
  button: {
    backgroundColor: colors.primary,
    borderRadius: 32.5,
    paddingVertical: 12,
    paddingHorizontal: 20,
    alignItems: 'center',
    justifyContent: 'center',
    alignSelf: 'flex-end', 
    margin:2,
  },
  buttonText: {
    fontSize: 17,
    color: 'white',
  },
});

export default CustomButton;
