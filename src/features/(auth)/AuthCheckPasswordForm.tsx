import { Button, Checkbox, Input } from '@/src/shared/components'
import React, { useState } from 'react'
import { View } from 'react-native'
import { useSignup } from './lib/SignupContext'
import { useRouter } from 'expo-router'
import * as Crypto from 'expo-crypto'
import { validatePassword } from './lib/helpers'

export const AuthCheckPasswordForm = () => {
  const [isChecked, setIsChecked] = useState<boolean>(false)
  const [password, setPassword] = useState<string>('')
  const [error, setError] = useState<string>('')

  const { update } = useSignup()

  const handlePasswordCheck = (value: string) => {
    setPassword(value)
    setError(validatePassword(value))
  }

  const isFormValid = !error && password.length > 0

  const router = useRouter()

  const handlePress = async () => {
    if (isFormValid) {
      const hashedPassword = await Crypto.digestStringAsync(
        Crypto.CryptoDigestAlgorithm.SHA256,
        password
      )
      update({ password: hashedPassword })
      router.push('/auth/create-email')
    }
  }

  return (
    <View className="space-y-4">
      <Input
        id="password"
        placeholder="Password"
        value={password}
        onChangeText={handlePasswordCheck}
        error={error}
        type="password"
      />
      <Checkbox checked={isChecked} onValueChange={setIsChecked} title="Remember login info." />
      <Button title="Continue" variant="primary" onPress={handlePress} disabled={!isFormValid} />
    </View>
  )
}
