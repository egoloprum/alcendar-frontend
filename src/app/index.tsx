import { Redirect } from 'expo-router'
import { View } from 'react-native'

import { SignupBtn, SigninBtn } from '@/src/features/(auth)'

import { useAuthContext } from '../shared/utils/contexts'

export default function Index() {
  const { isAuthenticated, isLoading } = useAuthContext()

  if (isLoading) return null

  if (isAuthenticated) {
    return <Redirect href="/(protected)/(tabs)" />
  }

  return (
    <View className="h-full space-y-4">
      <View className="h-[36rem] w-full border p-4"></View>
      <View className="flex w-full gap-4 p-4 px-6">
        <SignupBtn />
        <SigninBtn />
      </View>
    </View>
  )
}
