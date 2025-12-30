import { View } from 'react-native'

import { UserSearchForm } from '@/src/features/(user)'
import { UserSearchProvider } from '@/src/shared/utils/contexts/userSearchContext'
import { UserSearchList } from '@/src/widgets/user'

export default function Tab() {
  return (
    <UserSearchProvider>
      <View className="flex h-full w-full flex-col gap-4 bg-amber-50">
        <View className="p-4 px-6">
          <UserSearchForm />
        </View>
        <UserSearchList />
      </View>
    </UserSearchProvider>
  )
}
