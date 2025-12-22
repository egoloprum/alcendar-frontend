import { AuthOTPConfirmForm } from '@/src/features/(auth)'
import { useLocalSearchParams } from 'expo-router'
import React from 'react'
import { View, Text } from 'react-native'

const VerifyConfirmation = ({}) => {
  const { email } = useLocalSearchParams<{
    email: string
  }>()

  return (
    <View className="p-4 px-6 flex flex-col gap-4 w-full">
      <Text className="text-xl font-bold">Sign up to Alcendar</Text>
      <AuthOTPConfirmForm email={email} />
    </View>
  )
}

export default VerifyConfirmation
