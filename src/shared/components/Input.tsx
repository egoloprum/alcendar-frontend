import React, { forwardRef } from 'react'
import { View, Text, TextInput, TextInputProps, TouchableOpacity } from 'react-native'
import { Eye, EyeOff } from 'lucide-react'
import { cn } from '../utils'

type InputProps = {
  label?: string
  error?: string
  value?: string
  onChangeText?: (text: string) => void
  type?: 'text' | 'password'
  containerClassName?: string
  inputClassName?: string
  disabled?: boolean
  leftElement?: React.ReactNode
} & TextInputProps

export const Input = forwardRef<TextInput, InputProps>(
  (
    {
      label,
      error,
      value,
      onChangeText,
      type = 'text',
      containerClassName,
      inputClassName,
      disabled = false,
      leftElement,
      ...props
    },
    ref
  ) => {
    const [secure, setSecure] = React.useState(type === 'password')

    return (
      <View className={cn('w-full space-y-1', containerClassName)}>
        {label && <Text className="text-xs text-gray-600">{label}</Text>}

        <View
          className={cn(
            'flex-row items-center rounded-md border',
            error ? 'border-red-500' : 'border-gray-300',
            disabled && 'opacity-60'
          )}>
          {leftElement}

          <TextInput
            ref={ref}
            value={value}
            onChangeText={onChangeText}
            editable={!disabled}
            secureTextEntry={secure}
            placeholderTextColor="#9CA3AF"
            className={cn('w-full px-2 py-2 text-base text-gray-900', inputClassName)}
            {...props}
          />

          {type === 'password' && (
            <TouchableOpacity onPress={() => setSecure(!secure)} className="px-2 py-2" hitSlop={10}>
              {secure ? <Eye size={20} color="#6B7280" /> : <EyeOff size={20} color="#6B7280" />}
            </TouchableOpacity>
          )}
        </View>

        {error && <Text className="text-xs text-red-500">{error}</Text>}
      </View>
    )
  }
)

Input.displayName = 'Input'
