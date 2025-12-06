import React from 'react'
import {
  View,
  Text,
  TextInput,
  StyleSheet,
  ViewStyle,
  TextStyle,
  TextInputProps,
} from 'react-native'

type InputProps = {
  label?: string
  error?: string
  value?: string
  onChangeText?: (text: string) => void
  placeholder?: string
  secureTextEntry?: boolean
  keyboardType?: TextInputProps['keyboardType']
  inputStyle?: TextStyle | TextStyle[]
  containerStyle?: ViewStyle | ViewStyle[]
  textProps?: TextInputProps
}

export const Input: React.FC<InputProps> = ({
  label,
  error,
  value,
  onChangeText,
  placeholder,
  secureTextEntry,
  keyboardType,
  inputStyle,
  containerStyle,
  textProps,
}) => {
  return (
    <View style={[styles.container, containerStyle]}>
      {label ? <Text style={styles.label}>{label}</Text> : null}
      <TextInput
        value={value}
        onChangeText={onChangeText}
        placeholder={placeholder}
        secureTextEntry={secureTextEntry}
        keyboardType={keyboardType}
        style={[styles.input, inputStyle]}
        {...textProps}
      />
      {error ? <Text style={styles.error}>{error}</Text> : null}
    </View>
  )
}

const styles = StyleSheet.create({
  container: {
    width: '100%',
  },
  label: {
    marginBottom: 6,
    color: '#111827',
    fontSize: 13,
  },
  input: {
    borderWidth: 1,
    borderColor: '#e5e7eb',
    paddingVertical: 10,
    paddingHorizontal: 12,
    borderRadius: 8,
    fontSize: 14,
    color: '#0f172a',
    backgroundColor: '#fff',
    shadowColor: '#000',
    shadowOffset: { width: 0, height: 1 },
    shadowOpacity: 0.06,
    shadowRadius: 2,
    elevation: 1,
  },
  error: {
    marginTop: 6,
    color: '#dc2626',
    fontSize: 12,
  },
})
