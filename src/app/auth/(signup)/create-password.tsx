import { AuthCheckPasswordForm } from '@/src/features/(auth)'
import { useLocalSearchParams, useRouter } from 'expo-router'
import React, { useEffect, useState } from 'react'
import { View, Text, ActivityIndicator } from 'react-native'

const CreatePassword = ({}) => {
  const { username } = useLocalSearchParams<{ username: string }>()
  const router = useRouter()
  const [shouldRender, setShouldRender] = useState(false)

  useEffect(() => {
    const timer = setTimeout(() => {
      if (!username) {
        router.replace('/auth/create-username')
      } else {
        setShouldRender(true)
      }
    }, 100)

    return () => clearTimeout(timer)
  }, [username])

  if (!shouldRender) {
    return (
      <View className="flex-1 justify-center items-center">
        <ActivityIndicator size="large" />
      </View>
    )
  }

  return (
    <View className="p-4 px-6 flex flex-col gap-4 w-full">
      <Text className="text-xl font-bold">Create a password</Text>
      <Text className="text-base text-gray-600">
        Create a password with at least 6 letters or numbers. It should be something others
        can&apos;t guess.
      </Text>
      <AuthCheckPasswordForm username={username} />
    </View>
  )
}

export default CreatePassword
