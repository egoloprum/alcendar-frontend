import { View, Text } from 'react-native'
import { SignupBtn, SigninBtn } from '@/src/features/(auth)'
import { useAuth } from '../shared/hooks/useAuth'

export default function Index() {
  const { user, isLoading } = useAuth()

  if (isLoading) {
    return <Text>Loading...</Text>
  }

  if (user) {
    return (
      <View className="h-full space-y-4">
        <Text>Hello world {user.email}</Text>
      </View>
    )
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
