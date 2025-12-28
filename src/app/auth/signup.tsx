import { AuthSignupForm } from '@/src/features/(auth)'
import { TermsAndConditions } from '@/src/widgets/auth'
import React from 'react'
import { View, Text } from 'react-native'

const Signup = ({}) => {
  return (
    <View className="flex h-full w-full flex-col gap-4 bg-amber-50 p-4 px-6">
      <Text
        className="my-4 text-2xl font-bold uppercase tracking-widest"
        style={{ fontFamily: 'Gliker-Regular' }}>
        Sign up to Alcendar
      </Text>
      <AuthSignupForm />
      <TermsAndConditions />
    </View>
  )
}

export default Signup
