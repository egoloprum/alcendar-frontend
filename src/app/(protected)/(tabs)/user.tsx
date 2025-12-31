import { View, Text } from 'react-native'

import { useAuthContext } from '@/src/shared/utils/contexts'

export default function Tab() {
  const { user } = useAuthContext()

  return (
    <View className="flex h-full w-full flex-col gap-4 p-4 px-6">
      <View>
        <Text>{user?.id}</Text>
      </View>
    </View>
  )
}
