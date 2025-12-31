import React from 'react'
import { View, Text } from 'react-native'

import { AuthSignupForm } from '@/src/features/(auth)'
import { TermsAndConditions } from '@/src/widgets/auth'

const Signup = ({}) => {
  return (
    <View className="flex h-full w-full flex-col gap-4 p-4 px-6">
      <Text
        className="my-4 text-3xl uppercase tracking-widest"
        style={{ fontFamily: 'Gliker-Bold' }}>
        Sign up to Alcendar
      </Text>
      <AuthSignupForm />
      <TermsAndConditions />
    </View>
  )
}

export default Signup
