import { View } from 'react-native'
import { SignupBtn, LoginBtn } from '@/src/features/(auth)'

export default function Index() {
  return (
    <View className="h-full space-y-4">
      <View className="border p-4 w-full h-[36rem]"></View>
      <View className="p-4 px-6 flex gap-4 w-full">
        <SignupBtn />
        <LoginBtn />
      </View>
    </View>
  )
}
