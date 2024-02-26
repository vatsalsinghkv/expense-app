// src/components/TabBarBtn.tsx

import React, { FC } from 'react';
import {
  TouchableOpacity,
  StyleSheet,
  Text,
  StyleProp,
  ViewStyle,
  TouchableOpacityProps,
} from 'react-native';
import { GlobalStyles } from '../styles';

interface TabBarBtnProps extends TouchableOpacityProps {
  children: React.ReactNode;
  style?: StyleProp<ViewStyle>;
}

const TabBarBtn: FC<TabBarBtnProps> = ({ children, style, ...props }) => (
  <TouchableOpacity style={[styles.container, style]} {...props}>
    <Text style={styles.text}>{children}</Text>
  </TouchableOpacity>
);

const styles = StyleSheet.create({
  container: {
    backgroundColor: GlobalStyles.colors.primary200, // Your desired background color
    borderRadius: 25, // Adjust the border radius as needed
    width: 50, // Adjust width and height as needed
    height: 50,
    alignItems: 'center',
    justifyContent: 'center',
    bottom: 5,
    elevation: 5, // Add elevation for a shadow effect
  },
  text: {
    color: 'white', // Your desired text color
    fontSize: 32, // Adjust font size as needed
    fontWeight: 'bold',
  },
});

export default TabBarBtn;
