import React from 'react'
import { View, Text } from 'react-native'
import { useForm } from 'react-hook-form'
import { zodResolver } from '@hookform/resolvers/zod'
import { z } from 'zod'
import { Button, Input } from '@/src/shared/components'
import { useSetUsername } from './hooks/useSetUsername'
import { useRouter } from 'expo-router'

const usernameSchema = z.object({
  username: z.string().min(3).max(20),
})

type AuthSetUsernameFormValues = z.infer<typeof usernameSchema>

export const AuthSetUsernameForm = () => {
  const router = useRouter()
  const {
    handleSubmit,
    setValue,
    formState: { errors },
  } = useForm<AuthSetUsernameFormValues>({
    resolver: zodResolver(usernameSchema),
  })

  const { mutate, isPending, error } = useSetUsername()

  const onSubmit = (data: AuthSetUsernameFormValues) => {
    mutate(data.username, {
      onSuccess: () => {
        console.log('Username set!')
        router.replace('/auth/create-birthday')
      },
    })
  }

  return (
    <View className="w-full gap-4">
      <Input
        label="Username"
        placeholder="Choose a unique username"
        error={errors.username?.message}
        onChangeText={v => setValue('username', v, { shouldValidate: true })}
      />

      {error && <Text className="text-red-500">{error.message}</Text>}

      <Button loading={isPending} onPress={handleSubmit(onSubmit)}>
        Continue
      </Button>
    </View>
  )
}
