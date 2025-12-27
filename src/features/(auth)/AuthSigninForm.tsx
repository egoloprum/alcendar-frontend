import React from 'react'
import { View } from 'react-native'
import { useForm } from 'react-hook-form'

import { Button, Input } from '@/src/shared/components'
import { useMutation, useQueryClient } from '@tanstack/react-query'
import { signinUser } from './api/auth'
import { zodResolver } from '@hookform/resolvers/zod'
import { SigninFormValues, SigninSchema } from './utils/schemas'
import { useRouter } from 'expo-router'

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
        router.replace('/')
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
        error={errors.password?.message || mutation.error?.message}
        onChangeText={v => setValue('password', v)}
      />

      {/* {mutation.error && <Text className="text-sm text-red-500">{mutation.error.message}</Text>} */}

      <Button loading={mutation.isPending} onPress={handleSubmit(onSubmit)}>
        Sign in
      </Button>
    </View>
  )
}
