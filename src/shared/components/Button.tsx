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
    <View className="relative">
      <View className="absolute z-0 h-full w-full translate-x-1 translate-y-1 rounded-full bg-black"></View>
      <TouchableOpacity
        activeOpacity={0.9}
        disabled={disabled || loading}
        onPress={onPress}
        className={cn(
          'z-10 flex-row items-center justify-center rounded-full px-4 py-2.5 active:translate-x-1 active:translate-y-1',
          variant === 'primary' && 'border-2 bg-[#F87060]',
          variant === 'secondary' && 'border-2 bg-[#F0F66E]',
          variant === 'ghost' && 'border-2 bg-[#F0F8EA] text-gray-900',
          // disabled && 'bg-[#696D7D] translate-x-1 translate-y-1',
          disabled && 'translate-x-1 translate-y-1 opacity-80',
          className
        )}>
        {loading ? (
          <ActivityIndicator size="small" color={variant === 'secondary' ? '#111827' : '#FFFFFF'} />
        ) : typeof content === 'string' || typeof content === 'number' ? (
          <Text
            className={cn(
              'text-base font-semibold uppercase tracking-widest',
              variant === 'primary' && 'text-gray-800',
              variant === 'secondary' && '',
              variant === 'ghost' && '',
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
