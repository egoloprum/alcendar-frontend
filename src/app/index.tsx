import { View } from 'react-native'
import { SignupBtn, LoginBtn, GoToWhereWasLeftOnBtn } from '@/src/features/(auth)'
import { getSession } from '../shared/utils'
import { Suspense, use, useMemo } from 'react'

function SessionContent() {
  const sessionPromise = useMemo(() => getSession(), [])
  const session = use(sessionPromise)

  if (session) {
    return <GoToWhereWasLeftOnBtn />
  }
  return
}

export default function Index() {
  return (
    <View className="h-full space-y-4">
      <View className="h-[36rem] w-full border p-4"></View>
      <View className="flex w-full gap-4 p-4 px-6">
        <SignupBtn />
        <LoginBtn />
        <Suspense>
          <SessionContent />
        </Suspense>
      </View>
    </View>
  )
}
