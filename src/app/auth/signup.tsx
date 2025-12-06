import { AuthBtnGoogle, AuthForm } from '@/src/features/(auth)'
import { Link } from 'expo-router'
import React from 'react'
import { View, Text } from 'react-native'

const Signup = ({}) => {
  return (
    <View className="p-4 px-6 flex flex-col gap-4 w-full">
      <Text className="text-xl font-bold">Create an Account</Text>
      <AuthForm />
      <View className="flex flex-row items-center gap-4">
        <View className="h-[1px] flex-1 bg-black" />
        <Text>or</Text>
        <View className="h-[1px] flex-1 bg-black" />
      </View>
      <View>
        <AuthBtnGoogle />
      </View>
      <View className="text-center mt-4 flex flex-row justify-center flex-wrap gap-x-1">
        <Text className="inline">By continuing, you agree to</Text>
        <Link href="/auth/login" className="underline">
          Alcendar&apos;s Terms of Service
        </Link>
        <Text>and </Text>
        <Link href="/auth/login" className="underline">
          Privacy Policy.
        </Link>
      </View>
    </View>
  )
}

export default Signup
