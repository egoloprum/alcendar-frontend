import React from 'react'
import { Text, TouchableOpacity, ActivityIndicator } from 'react-native'
import type { GestureResponderEvent } from 'react-native'
import { cn } from '../utils'

type ButtonVariant = 'primary' | 'secondary' | 'ghost'

type ButtonProps = {
  title?: string
  children?: React.ReactNode
  onPress?: (event: GestureResponderEvent) => void
  disabled?: boolean
  loading?: boolean
  variant?: ButtonVariant
  className?: string
  textClassName?: string
}

export const Button: React.FC<ButtonProps> = ({
  title,
  children,
  onPress,
  disabled = false,
  loading = false,
  variant = 'primary',
  className,
  textClassName
}) => {
  const content = children ?? title

  return (
    <TouchableOpacity
      activeOpacity={0.8}
      disabled={disabled || loading}
      onPress={onPress}
      className={cn(
        'flex-row items-center justify-center rounded-lg px-4 py-2.5',
        disabled && 'opacity-60',
        variant === 'primary' && 'bg-blue-600',
        variant === 'secondary' && 'bg-gray-200',
        variant === 'ghost' && 'border border-gray-300 bg-transparent',
        className
      )}>
      {loading ? (
        <ActivityIndicator size="small" color={variant === 'secondary' ? '#111827' : '#FFFFFF'} />
      ) : typeof content === 'string' || typeof content === 'number' ? (
        <Text
          className={cn(
            'text-base font-semibold',
            variant === 'secondary' || variant === 'ghost' ? 'text-gray-900' : 'text-white',
            textClassName
          )}>
          {content}
        </Text>
      ) : (
        content
      )}
    </TouchableOpacity>
  )
}
