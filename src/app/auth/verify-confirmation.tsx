import { AuthOTPConfirmForm } from '@/src/features/(auth)'
import { useLocalSearchParams } from 'expo-router'
import React from 'react'
import { View, Text } from 'react-native'

const VerifyConfirmation = ({}) => {
  const { email } = useLocalSearchParams<{
    email: string
  }>()

  return (
    <View className="flex w-full flex-col gap-4 p-4 px-6">
      <Text className="text-3xl font-bold">6-digit code</Text>
      <AuthOTPConfirmForm email={email} />
    </View>
  )
}

export default VerifyConfirmation
