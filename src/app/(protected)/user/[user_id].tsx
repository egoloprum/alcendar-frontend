import { useLocalSearchParams } from 'expo-router'
import React from 'react'
import { View, Text } from 'react-native'

export default function Page() {
  const { user_id } = useLocalSearchParams()

  return (
    <View>
      <Text>{user_id}</Text>
    </View>
  )
}
