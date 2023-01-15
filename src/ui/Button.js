import React from 'react';
import { TouchableOpacity, Text, StyleSheet } from 'react-native';
import colors from '../constants/colors';
import fontSize from '../constants/fontSize';
import spacing from '../constants/spacing';

const Button = ({ onPress, title }) => {
  return (
    <TouchableOpacity style={styles.button} onPress={onPress}>
      <Text style={styles.text}>{title}</Text>
    </TouchableOpacity>
  );
};

const styles = StyleSheet.create({
  button: {
    alignItems: 'center',
    justifyContent: 'center',
    borderColor: colors.oceanGreen,
    borderWidth: 1,
    borderRadius: 3,
    height: 40,
    padding: spacing.sm,
    backgroundColor: colors.oceanGreen,
  },
  text: { color: colors.white, fontSize: fontSize.md },
});

export default Button;
