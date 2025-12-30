import { User } from '@/src/entities/user'
import { UserSearchForm } from '@/src/features/(user)'
import { UserSearchList } from '@/src/widgets/user'
import { useState } from 'react'
import { View } from 'react-native'

export default function Tab() {
  const [users, setUsers] = useState<User[] | null>(null)

  return (
    <View className="flex h-full w-full flex-col gap-4 bg-amber-50">
      <View className="p-4 px-6">
        <UserSearchForm setUsers={setUsers} />
      </View>
      <UserSearchList users={users} />
    </View>
  )
}
