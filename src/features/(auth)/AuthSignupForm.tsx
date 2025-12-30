import { zodResolver } from '@hookform/resolvers/zod'
import { useMutation } from '@tanstack/react-query'
import { useRouter } from 'expo-router'
import React from 'react'
import { useForm } from 'react-hook-form'
import { View, Text } from 'react-native'

import { Button, Input } from '@/src/shared/components'

import { signupUser } from './api/auth'
import { SignupFormValues, SignupSchema } from './utils/schemas'

export const AuthSignupForm = () => {
  const {
    handleSubmit,
    setValue,
    formState: { errors }
  } = useForm<SignupFormValues>({
    resolver: zodResolver(SignupSchema)
  })

  const mutation = useMutation({
    mutationFn: (payload: SignupFormValues) => {
      return signupUser(payload)
    }
  })

  const router = useRouter()

  const onSubmit = (data: SignupFormValues) => {
    mutation.mutate(data, {
      onSuccess: () =>
        router.push({
          pathname: '/auth/verify-confirmation',
          params: {
            email: data.email
          }
        })
    })
  }

  return (
    <View className="w-full gap-8">
      <View className="gap-4">
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
      </View>

      {mutation.error && (
        <Text
          className="text-base uppercase tracking-widest text-red-400"
          style={{ fontFamily: 'Gliker-Regular' }}>
          {mutation.error.message}
        </Text>
      )}

      <Button loading={mutation.isPending} onPress={handleSubmit(onSubmit)}>
        Continue
      </Button>
    </View>
  )
}
