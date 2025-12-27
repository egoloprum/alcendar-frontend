import { AuthGoogleBtn, AuthSigninForm } from '@/src/features/(auth)'
import { Link } from 'expo-router'
import React from 'react'
import { View, Text } from 'react-native'

const Signin = () => {
  return (
    <View className="flex w-full flex-col gap-4 p-4 px-6">
      <Text className="text-xl font-bold">Log in to Alcendar</Text>
      <AuthSigninForm />
      <View className="flex flex-row items-center gap-4">
        <View className="h-[1px] flex-1 bg-black" />
        <Text>or</Text>
        <View className="h-[1px] flex-1 bg-black" />
      </View>
      <View>
        <AuthGoogleBtn />
      </View>
      <View className="mt-4 flex flex-row flex-wrap justify-center gap-x-1 text-center">
        <Text className="inline">By continuing, you agree to</Text>
        <Link href="/auth/signin" className="underline">
          Alcendar&apos;s Terms of Service
        </Link>
        <Text>and </Text>
        <Link href="/auth/signin" className="underline">
          Privacy Policy.
        </Link>
      </View>
    </View>
  )
}

export default Signin
