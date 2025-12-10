import React from 'react'
import {
  Text,
  StyleSheet,
  TouchableOpacity,
  GestureResponderEvent,
  StyleProp,
  ViewStyle,
  TextStyle,
} from 'react-native'

import { LoaderCircle } from 'lucide-react'

type ButtonProps = {
  title?: string
  onPress?: (event: GestureResponderEvent) => void
  disabled?: boolean
  loading?: boolean
  variant?: 'primary' | 'secondary' | 'ghost'
  style?: StyleProp<ViewStyle>
  textStyle?: StyleProp<TextStyle>
  children?: React.ReactNode
}

export const Button: React.FC<ButtonProps> = ({
  title,
  onPress,
  disabled = false,
  loading = false,
  variant = 'primary',
  style,
  textStyle,
  children,
}) => {
  const content = children ?? title

  const variantStyles = [
    styles.button,
    variant === 'primary' && styles.primary,
    variant === 'secondary' && styles.secondary,
    variant === 'ghost' && styles.ghost,
    disabled && styles.disabled,
    style,
  ]

  const textVariantStyles = [
    styles.text,
    variant === 'secondary' && styles.textSecondary,
    textStyle,
  ]

  return (
    <TouchableOpacity
      onPress={onPress}
      disabled={disabled}
      style={variantStyles}
      activeOpacity={0.8}
    >
      {loading ? (
        <LoaderCircle className="animate-spin" />
      ) : typeof content === 'string' || typeof content === 'number' ? (
        <Text style={textVariantStyles as any}>{content}</Text>
      ) : (
        content
      )}
    </TouchableOpacity>
  )
}

const styles = StyleSheet.create({
  button: {
    paddingVertical: 10,
    paddingHorizontal: 14,
    borderRadius: 8,
    alignItems: 'center',
    justifyContent: 'center',
  },
  primary: {
    backgroundColor: '#2563EB',
  },
  secondary: {
    backgroundColor: '#E5E7EB',
  },
  ghost: {
    backgroundColor: 'transparent',
    borderWidth: 1,
    borderColor: '#D1D5DB',
  },
  disabled: {
    opacity: 0.6,
  },
  text: {
    color: '#FFFFFF',
    fontSize: 16,
    fontWeight: '600',
  },
  textSecondary: {
    color: '#111827',
  },
})
