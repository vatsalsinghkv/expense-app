import React from 'react';
import {
  TextInput,
  View,
  Text,
  StyleSheet,
  TextStyle,
  TextInputProps,
  ViewStyle,
} from 'react-native';
import { Ionicons } from '@expo/vector-icons'; // Import Ionicons from Expo vector icons
import { GlobalStyles } from '../../styles';

// Define a type for valid Ionicons icon names
type IoniconsName = keyof typeof Ionicons.glyphMap;

interface InputProps extends TextInputProps {
  label?: string;
  icon?: IoniconsName; // Update icon prop to accept IoniconsName type
  error?: string;
  labelStyle?: TextStyle;
  inputStyle?: TextStyle;
  containerStyle?: ViewStyle;
}

const Input: React.FC<InputProps> = ({
  label,
  icon,
  error,
  labelStyle,
  inputStyle,
  containerStyle,
  ...rest
}) => {
  return (
    <View style={[styles.container, containerStyle]}>
      {label && <Text style={[styles.label, labelStyle]}>{label}</Text>}
      <View style={styles.inputContainer}>
        {icon && (
          <Ionicons
            color={GlobalStyles.colors.text2}
            name={icon} // Use name instead of icon to specify the icon name
            size={24}
          />
        )}
        <TextInput
          style={[styles.input, inputStyle, { paddingLeft: 12 }]}
          {...rest}
        />
      </View>
      {error && <Text style={styles.error}>{error}</Text>}
    </View>
  );
};

const styles = StyleSheet.create({
  container: {
    // marginBottom: 16,
  },
  label: {
    marginBottom: 4,
    fontSize: 16,
    color: GlobalStyles.colors.text2,
  },
  inputContainer: {
    flexDirection: 'row',
    alignItems: 'center',
    borderWidth: 1,
    borderColor: GlobalStyles.colors.bg,
    backgroundColor: '#fff',
    borderRadius: 12,
    paddingHorizontal: 20,
    paddingVertical: 12,
  },
  input: {
    flex: 1,
    height: 40,
    color: GlobalStyles.colors.text,
    fontSize: 18,
  },
  error: {
    marginTop: 4,
    color: 'red',
    fontSize: 14,
  },
});

export default Input;
