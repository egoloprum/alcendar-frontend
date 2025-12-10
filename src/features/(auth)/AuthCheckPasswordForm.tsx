import { Button, Checkbox, Input } from '@/src/shared/components'
import { useRouter } from 'expo-router'
import React, { useState } from 'react'
import { View } from 'react-native'

export const AuthCheckPasswordForm = ({ username }: { username: string }) => {
  const [isChecked, setIsChecked] = useState<boolean>(false)
  const [password, setPassword] = useState<string>('')
  const [error, setError] = useState<string>('')

  const router = useRouter()

  const handlePasswordCheck = (value: string) => {
    setPassword(value)
    let errorMessage = ''

    if (!value) {
      errorMessage = ''
    } else if (value.length < 6) {
      errorMessage = 'Password must be at least 6 characters'
    } else if (value.length > 50) {
      errorMessage = 'Password must be less than 50 characters'
    } else if (!/\d/.test(value)) {
      errorMessage = 'Password must contain at least one number'
    } else if (!/[a-z]/.test(value)) {
      errorMessage = 'Password must contain at least one lowercase letter'
    } else if (!/[A-Z]/.test(value)) {
      errorMessage = 'Password must contain at least one uppercase letter'
    }

    setError(errorMessage)
  }

  const isFormValid = !error && password.length > 0

  const handlePress = () => {
    if (isFormValid) {
      router.push({
        pathname: '/auth/check-birthday',
        params: { username, password, remember: isChecked ? 'true' : 'false' },
      })
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
