import { useAuthContext } from '@/src/shared/utils'
import { View, Text } from 'react-native'

export default function Tab() {
  const { user } = useAuthContext()

  return (
    <View className="flex h-full w-full flex-col gap-4 bg-amber-50 p-4 px-6">
      <View>
        <Text>{user?.id}</Text>
      </View>
    </View>
  )
}
