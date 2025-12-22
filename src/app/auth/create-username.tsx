import { AuthSetUsernameForm } from '@/src/features/(auth)'
import { useAuth } from '@/src/shared/hooks'
import React from 'react'
import { View, Text } from 'react-native'

const CreateUsername = ({}) => {
  const { user, loading } = useAuth()

  console.log({ user, loading })

  return (
    <View className="p-4 px-6 flex flex-col gap-4 w-full">
      <Text className="text-xl font-bold">Create unique username</Text>
      <AuthSetUsernameForm />
    </View>
  )
}

export default CreateUsername
