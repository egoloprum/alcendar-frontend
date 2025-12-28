import { View, Text } from 'react-native'
import { SignupBtn, SigninBtn } from '@/src/features/(auth)'
import { useAuth } from '../shared/hooks'
import { Redirect } from 'expo-router'

export default function Index() {
  // const { user, isLoading } = useAuth()

  // if (isLoading) {
  //   return <Text>Loading...</Text>
  // }

  // if (user) {
  //   return <Redirect href="/(tabs)" />
  // }

  return (
    <View className="h-full space-y-4 bg-amber-50">
      <View className="h-[36rem] w-full border p-4"></View>
      <View className="flex w-full gap-4 p-4 px-6">
        <SignupBtn />
        <SigninBtn />
      </View>
    </View>
  )
}
