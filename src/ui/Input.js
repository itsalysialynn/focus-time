import React from 'react';
import { TextInput, StyleSheet } from 'react-native';
import colors from '../constants/colors';
import fontSize from '../constants/fontSize';
import spacing from '../constants/spacing';

const Input = ({ value, onChangeText, placeholder }) => (
  <TextInput
    style={styles.input}
    onChangeText={onChangeText}
    value={value}
    placeholder={placeholder}
    placeholderTextColor={colors.slateGrey}
  />
);

export default Input;

const styles = StyleSheet.create({
  input: {
    height: 40,
    borderWidth: 1,
    padding: spacing.sm,
    borderRadius: 3,
    width: 260,
    fontSize: fontSize.md,
    color: colors.eerieBlack,
  },
});
