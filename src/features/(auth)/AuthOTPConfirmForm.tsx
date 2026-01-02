import { zodResolver } from '@hookform/resolvers/zod'
import { useMutation } from '@tanstack/react-query'
import { useRouter } from 'expo-router'
import React, { useRef, useState } from 'react'
import { useForm } from 'react-hook-form'
import { View, Text, TextInput } from 'react-native'

import { Button, Input } from '@/src/shared/components'

import { verifyOtp } from './api/auth'
import { useResendOtp } from './utils/hooks'
import { OtpFormValues, OtpSchema } from './utils/schemas'

interface AuthOTPConfirmFormProps {
  email: string
}

const OTP_LENGTH = 6

export const AuthOTPConfirmForm = ({ email }: AuthOTPConfirmFormProps) => {
  const {
    handleSubmit,
    setValue,
    formState: { errors }
  } = useForm<OtpFormValues>({
    defaultValues: {
      email: email
    },
    resolver: zodResolver(OtpSchema)
  })

  const [otp, setOtp] = useState<string[]>(Array(OTP_LENGTH).fill(''))
  const inputsRef = useRef<TextInput[]>([])

  const mutation = useMutation({
    mutationFn: (payload: OtpFormValues) => {
      return verifyOtp(payload)
    }
  })
  const { resendOtp, canResend, secondsLeft } = useResendOtp()

  const router = useRouter()

  const syncForm = (next: string[]) => {
    setOtp(next)
    setValue('token', next.join(''))
  }

  const getFirstEmptyIndex = () => {
    const index = otp.findIndex(digit => digit === '')
    return index === -1 ? otp.length - 1 : index
  }

  const handleChange = (value: string, index: number) => {
    if (!/^\d?$/.test(value)) return

    const next = [...otp]
    next[index] = value
    syncForm(next)

    if (next.every(Boolean)) {
      handleSubmit(onSubmit)()
    }

    if (value && index < OTP_LENGTH - 1) {
      inputsRef.current[index + 1]?.focus()
    }
  }

  const handleKeyPress = (key: string, index: number) => {
    const correctIndex = getFirstEmptyIndex()

    if (index !== correctIndex) {
      inputsRef.current[correctIndex]?.focus()
    }

    if (key === 'Backspace' && otp[index] === '' && index > 0) {
      inputsRef.current[index - 1]?.focus()
    }
  }

  const onSubmit = (data: OtpFormValues) => {
    mutation.mutate(
      { email, token: data.token },
      {
        onSuccess: () => router.replace('/initial-settings/age-confirmation')
      }
    )
  }

  return (
    <View className="w-full gap-8">
      <View className="gap-4">
        <Text className="text-base text-gray-600" style={{ fontFamily: 'Gliker-Regular' }}>
          Enter the code sent to {email}
        </Text>
        <View className="flex max-w-[400px] flex-row flex-wrap gap-2">
          {otp.map((digit, index) => (
            <React.Fragment key={index}>
              <Input
                ref={ref => {
                  if (ref) inputsRef.current[index] = ref
                }}
                value={digit}
                keyboardType="number-pad"
                maxLength={1}
                onChangeText={v => handleChange(v, index)}
                onKeyPress={({ nativeEvent }) => handleKeyPress(nativeEvent.key, index)}
                inputClassName="text-center max-h-10 max-w-10 aspect-square p-0"
                containerClassName="aspect-square max-w-11"
                textContentType="oneTimeCode"
                autoComplete="sms-otp"
              />
            </React.Fragment>
          ))}
        </View>
      </View>

      {mutation.error && (
        <Text
          className="text-base uppercase tracking-widest text-red-400"
          style={{ fontFamily: 'Gliker-Regular' }}>
          {mutation.error.message}
        </Text>
      )}

      <View className="gap-4">
        <Button loading={mutation.isPending} onPress={handleSubmit(onSubmit)}>
          Verify
        </Button>

        <Button variant="ghost" disabled={!canResend} onPress={() => resendOtp(email)}>
          <Text
            className="text-base uppercase tracking-widest"
            style={{ fontFamily: 'Gliker-Regular' }}>
            Resend code {!canResend && `in 00:${String(secondsLeft).padStart(2, '0')}`}
          </Text>
        </Button>
      </View>
    </View>
  )
}
