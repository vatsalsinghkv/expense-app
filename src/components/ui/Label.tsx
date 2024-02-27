import { StyleSheet, Text, TextStyle, View } from 'react-native';
import React from 'react';
import { GlobalStyles } from '../../styles';

type Props = { children: React.ReactNode; style?: TextStyle };

const Label = ({ children, style }: Props) => {
  return <Text style={[styles.label, style]}>{children}</Text>;
};

export default Label;

const styles = StyleSheet.create({
  label: {
    marginBottom: 4,
    fontSize: 16,
    fontWeight: '500',
    color: GlobalStyles.colors.text2,
  },
});
