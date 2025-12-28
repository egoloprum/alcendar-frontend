import { AuthGoogleBtn, AuthSigninForm } from '@/src/features/(auth)'
import { TermsAndConditions } from '@/src/widgets/auth'
import React from 'react'
import { View, Text } from 'react-native'

const Signin = () => {
  return (
    <View className="flex h-full w-full flex-col gap-4 bg-amber-50 p-4 px-6">
      <Text
        className="my-4 text-2xl font-bold uppercase tracking-widest"
        style={{ fontFamily: 'Gliker-Regular' }}>
        Sign in to Alcendar
      </Text>
      <AuthSigninForm />
      <View className="flex flex-row items-center gap-4">
        <View className="h-[1px] flex-1 bg-black" />
        <Text className="uppercase tracking-widest" style={{ fontFamily: 'Gliker-Regular' }}>
          or
        </Text>
        <View className="h-[1px] flex-1 bg-black" />
      </View>
      <View>
        <AuthGoogleBtn />
      </View>
      <TermsAndConditions />
    </View>
  )
}

export default Signin
