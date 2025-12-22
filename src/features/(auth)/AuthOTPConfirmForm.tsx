import React from 'react'
import { View, Text } from 'react-native'
import { useForm } from 'react-hook-form'
import { zodResolver } from '@hookform/resolvers/zod'

import { Button, Input } from '@/src/shared/components'
import { OtpFormValues, otpSchema } from './schemas/otp.schema'
import { useVerifyOtp } from './hooks/useVerifyOtp'

interface AuthOTPConfirmFormProps {
  email: string
}

export const AuthOTPConfirmForm = ({ email }: AuthOTPConfirmFormProps) => {
  const {
    handleSubmit,
    setValue,
    formState: { errors },
  } = useForm<OtpFormValues>({
    resolver: zodResolver(otpSchema),
  })

  const { mutate, isPending, error } = useVerifyOtp()

  const onSubmit = (data: OtpFormValues) => {
    mutate(
      { email: email, token: data.token },
      {
        onSuccess: () => {
          console.log('Signup completed')
          // navigate to app / login
        },
      }
    )
  }

  return (
    <View className="w-full gap-4">
      <Text className="text-sm text-gray-600">Enter the code sent to {email}</Text>

      <Input
        label="OTP Code"
        placeholder="123456"
        keyboardType="number-pad"
        error={errors.token?.message}
        onChangeText={v => setValue('token', v)}
      />

      {error && <Text className="text-red-500 text-sm">{error.message}</Text>}

      <Button loading={isPending} onPress={handleSubmit(onSubmit)}>
        Verify
      </Button>
    </View>
  )
}
