import React from 'react';
import {
  TouchableOpacity,
  Text,
  StyleSheet,
  ViewStyle,
  TextStyle,
} from 'react-native';
import { GlobalStyles } from '../../styles';

interface ButtonProps {
  title: string;
  onPress: () => void;
  variant?: 'solid' | 'outline';
  styleText?: TextStyle;
  style?: ViewStyle;
}

const Button: React.FC<ButtonProps> = ({
  title,
  onPress,
  variant = 'solid',
  styleText,
  style,
}) => {
  const buttonStyle: ViewStyle =
    variant === 'solid' ? styles.solidButton : styles.outlineButton;
  const textStyle: TextStyle =
    variant === 'solid' ? styles.solidButtonText : styles.outlineButtonText;

  return (
    <TouchableOpacity
      style={[styles.button, buttonStyle, style]}
      onPress={onPress}
    >
      <Text style={[styles.buttonText, textStyle, styleText]}>{title}</Text>
    </TouchableOpacity>
  );
};

const styles = StyleSheet.create({
  button: {
    borderRadius: 10,
    paddingVertical: 20,
    alignItems: 'center',
    justifyContent: 'center',
    minWidth: 120,
    flex: 1,
    elevation: 2, // Android elevation for shadow
  },
  solidButton: {
    backgroundColor: GlobalStyles.colors.primary400, // Blue color for solid button
  },
  outlineButton: {
    backgroundColor: 'transparent',
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
