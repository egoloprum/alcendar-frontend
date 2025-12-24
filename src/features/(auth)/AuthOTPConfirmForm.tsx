import React, { useRef, useState } from 'react'
import { View, Text, TextInput } from 'react-native'
import { useForm } from 'react-hook-form'
import { zodResolver } from '@hookform/resolvers/zod'
import { useRouter } from 'expo-router'

import { Button, Input } from '@/src/shared/components'
import { OtpFormValues, otpSchema } from './schemas/otp.schema'
import { useVerifyOtp } from './hooks/useVerifyOtp'
import { saveSession } from '@/src/shared/utils'
import { useResendOtp } from './hooks/useResendOtp'

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
    resolver: zodResolver(otpSchema)
  })

  const [otp, setOtp] = useState<string[]>(Array(OTP_LENGTH).fill(''))
  const inputsRef = useRef<TextInput[]>([])

  const { mutate, isPending, error } = useVerifyOtp()
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
    mutate(
      { email, token: data.token },
      {
        onSuccess: async res => {
          await saveSession({
            access_token: res.session.access_token,
            refresh_token: res.session.refresh_token,
            expires_at: res.session.expires_at,
            user: {
              id: res.user.id,
              email: res.user.email
            }
          })
          router.replace('/auth/age-confirmation')
        }
      }
    )
  }

  return (
    <View className="w-full gap-4">
      <Text className="text-sm text-gray-600">Enter the code sent to {email}</Text>

      <View className="flex max-w-[400px] flex-row gap-2">
        {otp.map((digit, index) => (
          <React.Fragment key={index}>
            {index === 3 && (
              <View className="flex w-1 items-center justify-center">
                <Text>-</Text>
              </View>
            )}

            <Input
              ref={ref => {
                if (ref) inputsRef.current[index] = ref
              }}
              value={digit}
              keyboardType="number-pad"
              maxLength={1}
              error={errors.token?.message}
              onChangeText={v => handleChange(v, index)}
              onKeyPress={({ nativeEvent }) => handleKeyPress(nativeEvent.key, index)}
              inputClassName="text-center"
              containerClassName="aspect-square max-w-10"
              textContentType="oneTimeCode"
              autoComplete="sms-otp"
            />
          </React.Fragment>
        ))}
      </View>

      {error && <Text className="text-sm text-red-500">{error.message}</Text>}

      <View className="flex-row items-center gap-2">
        {canResend ? (
          <Text className="text-sm text-blue-600" onPress={() => resendOtp(email)}>
            Resend code
          </Text>
        ) : (
          <Text className="text-sm text-gray-500">
            Resend code in 00:{String(secondsLeft).padStart(2, '0')}
          </Text>
        )}
      </View>

      <Button loading={isPending} onPress={handleSubmit(onSubmit)}>
        Verify
      </Button>
    </View>
  )
}
