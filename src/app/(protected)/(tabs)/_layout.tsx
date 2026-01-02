import { Tabs, Link } from 'expo-router'
import { Bell, Settings } from 'lucide-react-native'

import { HeaderBar, NavigationBar } from '@/src/shared/components'

export default function TabsLayout() {
  return (
    <Tabs screenOptions={{ headerShown: true }} tabBar={props => <NavigationBar {...props} />}>
      <Tabs.Screen
        name="feed"
        options={{
          headerTransparent: true,
          header: () => (
            <HeaderBar
              title="Home"
              right={
                <Link href="/notifications">
                  <Bell size={20} />
                </Link>
              }
            />
          )
        }}
      />

      <Tabs.Screen
        name="search"
        options={{
          headerTransparent: true,
          header: () => <HeaderBar title="Search" />
        }}
      />

      <Tabs.Screen
        name="create"
        options={{
          headerTransparent: true,
          header: () => <HeaderBar title="New" />
        }}
      />

      <Tabs.Screen
        name="user"
        options={{
          headerTransparent: true,
          header: () => (
            <HeaderBar
              title="User"
              right={
                <Link href="/settings">
                  <Settings size={20} />
                </Link>
              }
            />
          )
        }}
      />
    </Tabs>
  )
}
