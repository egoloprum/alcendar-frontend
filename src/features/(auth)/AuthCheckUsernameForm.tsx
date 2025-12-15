import { Button, Input } from '@/src/shared/components'
import React, { useState, useEffect } from 'react'
import { View } from 'react-native'
import { useQuery } from '@tanstack/react-query'
import { useSignup } from './lib/SignupContext'
import { useRouter } from 'expo-router'

interface UsernameResponse {
  available: boolean
  message: string
}

const useDebounce = <T,>(value: T, delay: number): T => {
  const [debounced, setDebounced] = useState(value)

  useEffect(() => {
    const id = setTimeout(() => setDebounced(value), delay)
    return () => clearTimeout(id)
  }, [value, delay])

  return debounced
}

export const AuthCheckUsernameForm = () => {
  const [username, setUsername] = useState('')
  const debouncedUsername = useDebounce(username, 300)

  const { update } = useSignup()
  const router = useRouter()

  const sanitizeUsername = (raw: string) => raw.replace(/[^a-zA-Z0-9._]/g, '').replace(/^\.+/, '')

  const handleChangeText = (text: string) => {
    const sanitized = sanitizeUsername(text)
    setUsername(sanitized)
  }

  const isValidUsername = debouncedUsername.length >= 5

  const { data, isLoading, isError } = useQuery<UsernameResponse>({
    queryKey: ['checkUsername', debouncedUsername],
    enabled: isValidUsername,
    queryFn: async () => {
      const res = await fetch(`${process.env.EXPO_PUBLIC_BASE_URL}/auth/check-username`, {
        method: 'POST',
        headers: { 'Content-Type': 'application/json' },
        body: JSON.stringify({ username: debouncedUsername }),
      })

      if (!res.ok) {
        throw new Error('Request failed')
      }

      return res.json()
    },
  })

  const errorMessage =
    debouncedUsername.length === 0
      ? ''
      : !isValidUsername
        ? 'Username must be at least 5 characters long'
        : data && !data.available
          ? data.message
          : isError
            ? 'Unable to validate username. Please try again.'
            : ''

  const isButtonDisabled = !isValidUsername || isLoading || !data?.available

  const handlePress = () => {
    update({ username })
    router.push('/auth/create-password')
  }

  return (
    <View className="space-y-4">
      <Input
        id="username"
        placeholder="Username"
        value={username}
        onChangeText={handleChangeText}
        error={errorMessage}
      />

      <Button
        title="Continue"
        variant="primary"
        loading={isLoading}
        disabled={isButtonDisabled}
        onPress={handlePress}
      />
    </View>
  )
}
