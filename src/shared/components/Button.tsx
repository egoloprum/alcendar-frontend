import React from 'react'
import { Text, TouchableOpacity, ActivityIndicator, View } from 'react-native'
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
    <View className="relative w-full">
      <View className="absolute inset-0 translate-x-1 translate-y-1 rounded-full border-2 bg-gray-800" />

      <TouchableOpacity
        activeOpacity={0.9}
        disabled={disabled || loading}
        onPress={onPress}
        className={cn(
          'z-10 w-full flex-row items-center justify-center rounded-full px-4 py-2.5 active:translate-x-1 active:translate-y-1',
          variant === 'primary' && 'border-2 bg-primary',
          variant === 'secondary' && 'border-2 bg-secondary',
          variant === 'ghost' && 'border-2 bg-ghost',
          disabled && 'translate-x-1 translate-y-1 bg-disabled',
          className
        )}>
        {loading ? (
          <ActivityIndicator size="small" color={variant === 'secondary' ? '#111827' : '#FFFFFF'} />
        ) : typeof content === 'string' || typeof content === 'number' ? (
          <Text
            className={cn(
              'text-base uppercase tracking-widest text-gray-900',
              disabled && 'text-gray-100',
              textClassName
            )}
            style={{ fontFamily: 'Gliker-Regular' }}>
            {content}
          </Text>
        ) : (
          content
        )}
      </TouchableOpacity>
    </View>
  )
}
