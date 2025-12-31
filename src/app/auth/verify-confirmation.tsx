import { useLocalSearchParams } from 'expo-router'
import React from 'react'
import { View, Text } from 'react-native'

import { AuthOTPConfirmForm } from '@/src/features/(auth)'

const VerifyConfirmation = ({}) => {
  const { email } = useLocalSearchParams<{
    email: string
  }>()

  return (
    <View className="flex h-full w-full flex-col gap-4 p-4 px-6">
      <Text
        className="my-4 text-3xl uppercase tracking-widest"
        style={{ fontFamily: 'Gliker-Bold' }}>
        6-digit code
      </Text>
      <AuthOTPConfirmForm email={email} />
    </View>
  )
}

export default VerifyConfirmation
