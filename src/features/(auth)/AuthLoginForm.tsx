import React from 'react'
import { View, Text } from 'react-native'
import { useForm } from 'react-hook-form'

import { Button, Input } from '@/src/shared/components'
import { LoginFormValues, loginSchema } from './schemas/login.schema'
import { useLogin } from './hooks/useLogin'
import { zodResolver } from '@hookform/resolvers/zod'

export const AuthLoginForm = () => {
  const {
    handleSubmit,
    setValue,
    formState: { errors }
  } = useForm<LoginFormValues>({
    resolver: zodResolver(loginSchema)
  })

  const { mutate, isPending, error } = useLogin()

  const onSubmit = (data: LoginFormValues) => {
    mutate(data, {
      onSuccess: async res => {
        console.log('Logged in:', res)
      }
    })
  }

  return (
    <View className="w-full gap-4">
      <Input
        label="Email"
        placeholder="Email"
        keyboardType="email-address"
        error={errors.email?.message}
        onChangeText={v => setValue('email', v)}
      />

      <Input
        label="Password"
        placeholder="Password"
        type="password"
        error={errors.password?.message}
        onChangeText={v => setValue('password', v)}
      />

      {error && <Text className="text-sm text-red-500">{error.message}</Text>}

      <Button loading={isPending} onPress={handleSubmit(onSubmit)}>
        Sign in
      </Button>
    </View>
  )
}
