import React from 'react'
import { View, Text, TouchableOpacity, StyleSheet } from 'react-native'

interface CheckboxProps {
  checked?: boolean
  onValueChange?: (checked: boolean) => void
  title: string
  disabled?: boolean
}

export const Checkbox: React.FC<CheckboxProps> = ({
  checked = false,
  onValueChange,
  title,
  disabled = false,
}) => {
  const handlePress = () => {
    if (!disabled && onValueChange) {
      onValueChange(!checked)
    }
  }

  return (
    <TouchableOpacity
      style={[styles.container, disabled && styles.disabled]}
      onPress={handlePress}
      activeOpacity={0.7}
      disabled={disabled}
    >
      {/* Checkbox Square */}
      <View style={[styles.checkbox, checked && styles.checkboxChecked]}>
        {checked && <View style={styles.checkmark} />}
      </View>

      {/* Title */}
      <Text style={[styles.title, disabled && styles.disabledTitle]}>{title}</Text>
    </TouchableOpacity>
  )
}

const styles = StyleSheet.create({
  container: {
    flexDirection: 'row',
    alignItems: 'center',
  },
  checkbox: {
    width: 20,
    height: 20,
    borderWidth: 2,
    borderColor: '#D1D1D6',
    borderRadius: 6,
    marginRight: 12,
    justifyContent: 'center',
    alignItems: 'center',
    backgroundColor: 'transparent',
  },
  checkboxChecked: {
    backgroundColor: '#007AFF',
    borderColor: '#007AFF',
  },
  checkmark: {
    width: 8,
    height: 12,
    borderBottomWidth: 2,
    borderRightWidth: 2,
    borderColor: '#FFFFFF',
    transform: [{ rotate: '45deg' }],
    marginTop: -2,
  },
  title: {
    fontSize: 16,
    color: '#000000',
    flex: 1,
  },
  disabled: {
    opacity: 0.5,
  },
  disabledTitle: {
    color: '#999999',
  },
})
