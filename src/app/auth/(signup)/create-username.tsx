import { AuthCheckUsernameForm } from '@/src/features/(auth)'
import React from 'react'
import { View, Text } from 'react-native'

const CreateUsername = ({}) => {
  return (
    <View className="p-4 px-6 flex flex-col gap-4 w-full">
      <Text className="text-xl font-bold">Choose username</Text>
      <Text className="text-base text-gray-600">You can always change it later.</Text>
      <AuthCheckUsernameForm />
    </View>
  )
}

export default CreateUsername
