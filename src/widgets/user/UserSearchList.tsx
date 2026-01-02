import { Link } from 'expo-router'
import { Search } from 'lucide-react-native'
import { View, Text, ScrollView, FlatList, Pressable } from 'react-native'

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
            <Link href={`/users/${item.id}`} asChild>
              <Pressable className="flex flex-row items-center gap-4 p-4 px-0">
                <View className="aspect-square h-10 w-10 rounded-full border"></View>
                <Text
                  className="flex-1 text-base tracking-widest"
                  style={{ fontFamily: 'Gliker-Regular' }}
                  numberOfLines={1}>
                  {item.username}
                </Text>
                <UserSearchDeleteBtn userId={item.id} />
              </Pressable>
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
