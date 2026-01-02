import React from 'react'
import { View } from 'react-native'

import { AuthSignoutBtn } from '@/src/features/(auth)'

export default function Index() {
  return (
    <View className="flex h-full w-full flex-col gap-4 p-4">
      <AuthSignoutBtn />
    </View>
  )
}
