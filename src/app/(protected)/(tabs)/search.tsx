import { Redirect } from 'expo-router'
import { View } from 'react-native'

import { UserSearchForm } from '@/src/features/(user)'
import { useAuthContext } from '@/src/shared/utils/contexts'
import { UserSearchProvider } from '@/src/shared/utils/contexts/userSearchContext'
import { UserSearchList } from '@/src/widgets/user'

export default function Tab() {
  const { isAuthenticated, isLoading } = useAuthContext()

  if (isLoading) return null

  if (!isAuthenticated) {
    return <Redirect href="/" />
  }

  return (
    <UserSearchProvider>
      <View className="flex h-full w-full flex-col gap-4">
        <View className="p-4 px-6">
          <UserSearchForm />
        </View>
        <UserSearchList />
      </View>
    </UserSearchProvider>
  )
}
