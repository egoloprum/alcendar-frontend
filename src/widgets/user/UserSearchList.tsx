import { Link } from 'expo-router'
import { Search } from 'lucide-react-native'
import { View, Text, ScrollView, FlatList } from 'react-native'

import { UserSearchDeleteBtn } from '@/src/features/(user)'
import { useUserSearchContext } from '@/src/shared/utils/contexts'

export const UserSearchList = () => {
  const { users } = useUserSearchContext()

  if (users) {
    return (
      <ScrollView className="flex-1">
        <FlatList
          data={users}
          renderItem={({ item }) => (
            <Link
              href={`/(protected)/users/${item.id}`}
              className="flex flex-row items-center gap-4 p-4 px-6 hover:bg-amber-100">
              <View className="h-10 w-10 rounded-full border"></View>
              <Text className="text-base tracking-widest" style={{ fontFamily: 'Gliker-Regular' }}>
                {item.username}
              </Text>
              <UserSearchDeleteBtn userId={item.id} />
            </Link>
          )}
        />
      </ScrollView>
    )
  }

  return (
    <View className="flex flex-1 items-center justify-center gap-8">
      {/* Illustrations */}
      <Search className="h-40 w-40" />
      <Text className="text-2xl uppercase tracking-widest" style={{ fontFamily: 'Gliker-Regular' }}>
        Start searching users
      </Text>
    </View>
  )
}
