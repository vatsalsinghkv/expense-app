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
import { MaterialIcons } from '@expo/vector-icons'; // Import Ionicons from Expo vector icons
import { GlobalStyles } from '../../styles';
import Label from './Label';

// Define a type for valid Ionicons icon names
type IconsName = keyof typeof MaterialIcons.glyphMap;

interface InputProps extends TextInputProps {
  label?: string;
  icon?: IconsName; // Update icon prop to accept IoniconsName type
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
      {label && <Label style={labelStyle}>{label}</Label>}
      <View style={styles.inputContainer}>
        {icon && (
          <MaterialIcons
            color='#64748b'
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
