import { Button, Input } from '@/src/shared/components'
import React, { useState } from 'react'
import { View } from 'react-native'
import { useSignup } from './lib/SignupContext'
import { useMutation } from '@tanstack/react-query'
import { useRouter } from 'expo-router'

const EMAIL_REGEX = /^[^\s@]+@[^\s@]+\.[^\s@]+$/

export const AuthCheckEmailForm = () => {
  const [email, setEmail] = useState('')
  const { data, update } = useSignup()

  const username = data.username
  const password = data.password

  const isValidEmail = EMAIL_REGEX.test(email)

  const router = useRouter()

  const { mutate, isPending, isError, error } = useMutation({
    mutationFn: async () => {
      const res = await fetch(`${process.env.EXPO_PUBLIC_BASE_URL}/auth/signup`, {
        method: 'POST',
        headers: { 'Content-Type': 'application/json' },
        body: JSON.stringify({ email: email, password: password, username: username }),
      })

      if (!res.ok) {
        const data = await res.json()
        throw new Error(data.error || 'Failed to sign up')
      }

      return res.json()
    },
    onSuccess: () => {
      update({ email })
      router.push('/auth/require-confirmation')
    },
  })

  const errorMessage = !email
    ? ''
    : !isValidEmail
      ? 'Enter a valid email address'
      : isError
        ? (error as Error).message
        : ''

  return (
    <View className="space-y-4">
      <Input
        id="email"
        placeholder="Email"
        value={email}
        onChangeText={setEmail}
        error={errorMessage}
        keyboardType="email-address"
      />

      <Button
        title="Continue"
        variant="primary"
        loading={isPending}
        disabled={!isValidEmail || isPending}
        onPress={() => mutate()}
      />
    </View>
  )
}
