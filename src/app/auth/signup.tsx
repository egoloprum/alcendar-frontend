import { Redirect } from 'expo-router'
import React from 'react'
import { View, Text } from 'react-native'

import { AuthSignupForm } from '@/src/features/(auth)'
import { useAuthContext } from '@/src/shared/utils/contexts'
import { TermsAndConditions } from '@/src/widgets/auth'

const Signup = ({}) => {
  const { isAuthenticated, isLoading } = useAuthContext()

  if (isLoading) return null

  if (isAuthenticated) {
    return <Redirect href="/feed" />
  }

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
