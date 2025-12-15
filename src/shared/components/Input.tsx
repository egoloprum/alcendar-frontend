import { Eye, EyeOff } from 'lucide-react'
import React from 'react'
import { View, Text, TextInput, TextInputProps, TouchableOpacity } from 'react-native'

type InputProps = {
  id?: string
  label?: string
  error?: string
  value?: string
  onChangeText?: (text: string) => void
  placeholder?: string
  keyboardType?: TextInputProps['keyboardType']
  textProps?: TextInputProps
  type?: 'password' | 'text'
}

export const Input: React.FC<InputProps> = ({
  id,
  label,
  error,
  value,
  onChangeText,
  placeholder,
  keyboardType,
  textProps,
  type = 'text',
}) => {
  const [showPassword, setShowPassword] = React.useState<boolean>(type === 'text' ? false : true)

  const handlePress = () => {
    setShowPassword(!showPassword)
  }

  return (
    <View className="w-full space-y-1">
      {label ? <Text className="text-xs text-gray-600">{label}</Text> : null}
      <View className="flex flex-row gap-2 border rounded-md hover:border-gray-400 focus-within:border-blue-500">
        <TextInput
          id={id}
          value={value}
          onChangeText={onChangeText}
          placeholder={placeholder}
          secureTextEntry={showPassword}
          keyboardType={keyboardType}
          className="border-none outline-none w-full px-3 py-2"
          {...textProps}
        />
        {type === 'password' && (
          <TouchableOpacity className="w-fit px-3 py-2" onPress={handlePress}>
            {showPassword ? <Eye /> : <EyeOff />}
          </TouchableOpacity>
        )}
      </View>
      {error ? <Text className="text-xs text-red-500">{error}</Text> : null}
    </View>
  )
}
