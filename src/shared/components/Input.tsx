import { forwardRef, useState } from 'react'
import { View, Text, TextInput, TextInputProps, TouchableOpacity } from 'react-native'
import { Eye, EyeOff } from 'lucide-react-native'
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
    const [secure, setSecure] = useState<boolean>(type === 'password' ? true : false)

    return (
      <View className={cn('w-full gap-1', containerClassName)}>
        {label && (
          <Text
            className="ml-4 text-base tracking-widest text-gray-600"
            style={{ fontFamily: 'Gliker-Regular' }}>
            {label}
          </Text>
        )}

        <View
          className={cn(
            'flex h-12 flex-row items-center justify-between rounded-full border-2 focus:border-gray-500',
            error ? 'border-red-500' : 'border-gray-300',
            disabled && 'opacity-60'
          )}>
          {leftElement && <View className="p-2 pl-4">{leftElement}</View>}

          <TextInput
            ref={ref}
            value={value}
            onChangeText={onChangeText}
            editable={!disabled}
            secureTextEntry={secure}
            placeholderTextColor="#9CA3AF"
            className={cn(
              'h-full flex-1 rounded-full p-2 px-4 text-base tracking-widest text-gray-900',
              inputClassName
            )}
            style={{ fontFamily: 'Gliker-Regular' }}
            {...props}
          />

          {type === 'password' && (
            <TouchableOpacity
              onPress={() => setSecure(!secure)}
              className="aspect-square h-10 w-10 items-center justify-center rounded-full"
              hitSlop={10}>
              {secure ? <Eye size={20} color="#6B7280" /> : <EyeOff size={20} color="#6B7280" />}
            </TouchableOpacity>
          )}
        </View>

        {error && (
          <Text
            className="ml-4 text-base tracking-widest text-red-500"
            style={{ fontFamily: 'Gliker-Regular' }}>
            {error}
          </Text>
        )}
      </View>
    )
  }
)

Input.displayName = 'Input'
