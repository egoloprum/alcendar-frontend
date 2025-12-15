import { AuthCheckEmailForm, useSignup } from '@/src/features/(auth)'
import { useRouter } from 'expo-router'
import React, { useEffect, useState } from 'react'
import { View, Text, ActivityIndicator } from 'react-native'

const CreateEmail = () => {
  const { data } = useSignup()
  const router = useRouter()
  const [shouldRender, setShouldRender] = useState<boolean>(false)

  useEffect(() => {
    const timer = setTimeout(() => {
      if (!data.password) {
        router.replace('/auth/create-password')
      } else if (!data.username) {
        router.replace('/auth/create-username')
      } else {
        setShouldRender(true)
      }
    }, 100)

    return () => clearTimeout(timer)
  }, [data.username, data.password, router])

  if (!shouldRender) {
    return (
      <View className="flex-1 justify-center items-center">
        <ActivityIndicator size="large" />
      </View>
    )
  }

  return (
    <View className="p-4 px-6 flex flex-col gap-4 w-full">
      <Text className="text-xl font-bold">What&apos;s your email?</Text>
      <Text className="text-base text-gray-600">
        Enter the email where you can be contacted. No one will see this on your profile.
      </Text>
      <AuthCheckEmailForm />
    </View>
  )
}

export default CreateEmail
