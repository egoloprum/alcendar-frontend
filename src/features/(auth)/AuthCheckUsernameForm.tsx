import { Button, Input } from '@/src/shared/components'
import React, { useState, useEffect } from 'react'
import { View } from 'react-native'
import { useQuery } from '@tanstack/react-query'
import { useRouter } from 'expo-router'

interface UsernameResponse {
  available: boolean
  message: string
  username?: string
}

const useDebounce = <T,>(value: T, delay: number): T => {
  const [debouncedValue, setDebouncedValue] = useState<T>(value)

  useEffect(() => {
    const handler = setTimeout(() => {
      setDebouncedValue(value)
    }, delay)

    return () => {
      clearTimeout(handler)
    }
  }, [value, delay])

  return debouncedValue
}

export const AuthCheckUsernameForm = ({}) => {
  const [username, setUsername] = useState('')
  const [error, setError] = useState<string>('')
  const debouncedUsername = useDebounce(username, 300)

  const handleFetching = async () => {
    if (!debouncedUsername || debouncedUsername.length < 3) {
      return {
        available: false,
        message: 'Username must be at least 3 characters long',
      }
    }

    const response = await fetch(`${process.env.EXPO_PUBLIC_BASE_URL}/auth/check-username`, {
      method: 'POST',
      headers: { 'Content-Type': 'application/json' },
      body: JSON.stringify({ username: debouncedUsername }),
    })

    if (!response.ok) {
      throw new Error('Failed to check username')
    }

    return response.json()
  }

  const {
    data,
    isLoading,
    isError,
    error: queryError,
  } = useQuery<UsernameResponse>({
    queryKey: ['checkUsername', debouncedUsername],
    queryFn: handleFetching,
    enabled: debouncedUsername.length >= 3,
    retry: 1,
    staleTime: 0,
    gcTime: 0,
  })

  useEffect(() => {
    if (isError && queryError) {
      setError('Failed to check username. Please try again.')
    } else if (data && !data.available) {
      setError(data.message)
    } else if (data && data.available) {
      setError('')
    }
  }, [data, isError, queryError])

  const handleUsernameCheck = (value: string) => {
    setUsername(value)
    if (error && value !== username) {
      setError('')
    }
  }

  const isButtonDisabled =
    !username ||
    username.length < 3 ||
    isLoading ||
    !data?.available ||
    !!error ||
    (data && !data.available)

  const router = useRouter()

  const handlePress = () => {
    router.push({
      pathname: '/auth/create-password',
      params: { username: debouncedUsername },
    })
  }

  return (
    <View className="space-y-4">
      <Input
        id="username"
        placeholder="Username"
        value={username}
        onChangeText={handleUsernameCheck}
        error={error}
      />
      <Button
        title="Continue"
        variant="primary"
        disabled={isButtonDisabled}
        loading={isLoading}
        onPress={handlePress}
      />
    </View>
  )
}
