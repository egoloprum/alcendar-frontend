import { Check } from 'lucide-react-native'
import React from 'react'
import { View, Text, TouchableOpacity } from 'react-native'

import { cn } from '../utils'

type CheckboxProps = {
  checked?: boolean
  onValueChange?: (checked: boolean) => void
  label: string
  disabled?: boolean
  className?: string
  labelClassName?: string
}

export const Checkbox: React.FC<CheckboxProps> = ({
  checked = false,
  onValueChange,
  label,
  disabled = false,
  className,
  labelClassName
}) => {
  const toggle = () => {
    if (!disabled) {
      onValueChange?.(!checked)
    }
  }

  return (
    <TouchableOpacity
      activeOpacity={0.7}
      onPress={toggle}
      disabled={disabled}
      className={cn('flex-row items-center gap-3', disabled && 'opacity-60', className)}>
      <View
        className={cn(
          'h-5 w-5 items-center justify-center rounded-md border-2',
          checked ? 'border-blue-600 bg-blue-600' : 'border-gray-300 bg-transparent'
        )}>
        {checked && <Check size={14} color="white" />}
      </View>

      <Text className={cn('text-base text-gray-900', disabled && 'text-gray-400', labelClassName)}>
        {label}
      </Text>
    </TouchableOpacity>
  )
}
