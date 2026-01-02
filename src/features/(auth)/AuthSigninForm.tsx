import { zodResolver } from '@hookform/resolvers/zod'
import { useMutation, useQueryClient } from '@tanstack/react-query'
import { useRouter } from 'expo-router'
import React from 'react'
import { useForm } from 'react-hook-form'
import { Text, View } from 'react-native'

import { Button, Input } from '@/src/shared/components'

import { signinUser } from './api/auth'
import { SigninFormValues, SigninSchema } from './utils/schemas'

export const AuthSigninForm = () => {
  const {
    handleSubmit,
    setValue,
    formState: { errors }
  } = useForm<SigninFormValues>({
    resolver: zodResolver(SigninSchema)
  })

  const mutation = useMutation({
    mutationFn: (payload: SigninFormValues) => {
      return signinUser(payload)
    }
  })

  const router = useRouter()
  const queryClient = useQueryClient()

  const onSubmit = (data: SigninFormValues) => {
    mutation.mutate(data, {
      onSuccess: async () => {
        await queryClient.invalidateQueries({ queryKey: ['auth', 'me'] })
        router.replace('/feed')
      }
    })
  }

  return (
    <View className="w-full gap-8">
      <View className="gap-4">
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
      </View>

      {mutation.error && (
        <Text
          className="text-base uppercase tracking-widest text-red-400"
          style={{ fontFamily: 'Gliker-Regular' }}>
          {mutation.error.message}
        </Text>
      )}

      <Button
        loading={mutation.isPending}
        disabled={mutation.isPending}
        onPress={handleSubmit(onSubmit)}>
        Sign in
      </Button>
    </View>
  )
}
