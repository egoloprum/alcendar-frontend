import { Button, Input } from '@/src/shared/components'

import { View } from 'react-native'

export const AuthConfirmForm = () => {
  const handleSubmit = () => {
    console.log('Submitted')
  }

  return (
    <View className="flex flex-col gap-4 w-full">
      <Input
        label="One-Time Password (OTP)"
        placeholder="Enter 6-digit code"
        keyboardType="numeric"
      />
      <Button onPress={handleSubmit}>Continue</Button>
    </View>
  )
}
