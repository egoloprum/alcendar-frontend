import { AuthOTPConfirmForm } from '@/src/features/(auth)'
import { useLocalSearchParams } from 'expo-router'
import React from 'react'
import { View, Text } from 'react-native'

const VerifyConfirmation = ({}) => {
  const { email } = useLocalSearchParams<{
    email: string
  }>()

  return (
    <View className="flex h-full w-full flex-col gap-4 bg-amber-50 p-4 px-6">
      <Text
        className="my-4 text-2xl font-bold uppercase tracking-widest"
        style={{ fontFamily: 'Gliker-Regular' }}>
        6-digit code
      </Text>
      <AuthOTPConfirmForm email={email} />
    </View>
  )
}

export default VerifyConfirmation
