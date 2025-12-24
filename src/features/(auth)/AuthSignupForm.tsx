import React from 'react'
import { View, Text } from 'react-native'
import { useForm } from 'react-hook-form'
import { zodResolver } from '@hookform/resolvers/zod'

import { Button, Input } from '@/src/shared/components'
import { SignupFormValues, signupSchema } from './schemas/signup.schema'
import { useSignup } from './hooks/useSignup'
import { useRouter } from 'expo-router'
import { removeSession } from '@/src/shared/utils'

export const AuthSignupForm = () => {
  const {
    handleSubmit,
    setValue,
    formState: { errors }
  } = useForm<SignupFormValues>({
    resolver: zodResolver(signupSchema)
  })

  const { mutate, isPending, error } = useSignup()

  const router = useRouter()

  const onSubmit = (data: SignupFormValues) => {
    mutate(data, {
      onSuccess: res => {
        removeSession()
        router.push({
          pathname: '/auth/verify-confirmation',
          params: {
            email: data.email
          }
        })
      }
    })
  }

  return (
    <View className="w-full gap-4">
      <Input
        label="Email"
        placeholder="Email"
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

      <Input
        label="Confirm password"
        placeholder="Confirm password"
        type="password"
        error={errors.confirmPassword?.message}
        onChangeText={v => setValue('confirmPassword', v)}
      />

      {error && <Text className="text-sm text-red-500">{error.message}</Text>}

      <Button loading={isPending} onPress={handleSubmit(onSubmit)}>
        Continue
      </Button>
    </View>
  )
}
