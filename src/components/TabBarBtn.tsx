// TabBarBtn.tsx

import React, { FC } from 'react';
import { TouchableOpacity, StyleSheet, Text, StyleProp, ViewStyle } from 'react-native';

import { GlobalStyles } from '../styles';
import { LinearGradient } from 'expo-linear-gradient';

interface TabBarBtnProps {
  children: React.ReactNode;
  color?: keyof typeof GlobalStyles.gradients;
  style?: StyleProp<ViewStyle>;
}

const TabBarBtn: FC<TabBarBtnProps> = ({ children, style, color = 'default', ...props }) => (
  <LinearGradient
    colors={GlobalStyles.gradients[color]}
    style={[styles.container, style]}
    start={{ x: 0, y: 0 }}
    end={{ x: 1, y: 1 }}
  >
    <TouchableOpacity style={styles.touchable} {...props}>
      <Text style={styles.text}>{children}</Text>
    </TouchableOpacity>
  </LinearGradient>
);

const styles = StyleSheet.create({
  container: {
    borderRadius: 25, // Adjust the border radius as needed
    width: 50, // Adjust width and height as needed
    height: 50,
    alignItems: 'center',
    justifyContent: 'center',
    bottom: 5,
    elevation: 5, // Add elevation for a shadow effect
  },
  touchable: {
    flex: 1,
    alignItems: 'center',
    justifyContent: 'center',
  },
  text: {
    color: 'white', // Your desired text color
    fontSize: 32, // Adjust font size as needed
    fontWeight: 'bold',
  },
});

export default TabBarBtn;
