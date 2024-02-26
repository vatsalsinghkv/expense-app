// Button.tsx

import React from 'react';
import {
  TouchableOpacity,
  Text,
  StyleSheet,
  ViewStyle,
  TextStyle,
} from 'react-native';

import { GlobalStyles } from '../../styles';
import { LinearGradient } from 'expo-linear-gradient';

interface ButtonProps {
  title: string;
  onPress: () => void;
  variant?: 'solid' | 'outline';
  color?: keyof typeof GlobalStyles.gradients; // Updated color prop
  styleText?: TextStyle;
  style?: ViewStyle;
}

const Button: React.FC<ButtonProps> = ({
  title,
  onPress,
  variant = 'solid',
  color = 'primary', // Default color is primary
  styleText,
  style,
}) => {
  const buttonStyle: ViewStyle =
    variant === 'solid' ? styles.solidButton : styles.outlineButton;
  const textStyle: TextStyle =
    variant === 'solid' ? styles.solidButtonText : styles.outlineButtonText;

  return (
    <TouchableOpacity style={[styles.button, style]} onPress={onPress}>
      <LinearGradient
        colors={GlobalStyles.gradients[color]}
        style={[styles.gradient, buttonStyle]}
        start={{ x: 0, y: 0 }}
        end={{ x: 1, y: 1 }}
      >
        <Text style={[styles.buttonText, textStyle, styleText]}>{title}</Text>
      </LinearGradient>
    </TouchableOpacity>
  );
};

const styles = StyleSheet.create({
  button: {
    borderRadius: 10,
    minWidth: 120,
    flex: 1,
    elevation: 2, // Android elevation for shadow
    overflow: 'hidden', // This ensures the LinearGradient is clipped to the borderRadius
  },
  gradient: {
    borderRadius: 10,
    paddingVertical: 20,
    alignItems: 'center',
    justifyContent: 'center',
  },
  solidButton: {
    // No specific style needed for solidButton as the gradient handles the background
  },
  outlineButton: {
    borderWidth: 1,
    borderColor: GlobalStyles.colors.primary400, // Blue color for outline button
  },
  buttonText: {
    fontSize: 18,
    color: '#fff', // White color for button text
    fontWeight: 'bold',
  },
  solidButtonText: {
    color: '#fff', // White color for solid button text
  },
  outlineButtonText: {
    color: GlobalStyles.colors.primary200, // Blue color for outline button text
  },
});

export default Button;
