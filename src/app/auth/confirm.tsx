import { AuthConfirmForm } from '@/src/features/(auth)'
import React from 'react'
import { View, Text, StyleSheet } from 'react-native'

const Confirm = ({}) => {
  return (
    <View className="p-4 px-6 flex flex-col gap-4 w-full">
      <Text className="text-xl font-bold">Confirm OTP</Text>
      <AuthConfirmForm />
    </View>
  )
}

export default Confirm
