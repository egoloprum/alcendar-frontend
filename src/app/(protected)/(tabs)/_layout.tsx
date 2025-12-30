import { Link, Redirect, Tabs } from 'expo-router'
import { Bell, CirclePlus, House, Search, User, Settings } from 'lucide-react-native'
import React from 'react'
import { Text } from 'react-native'

import { useAuthContext } from '@/src/shared/utils/contexts'

export default function TabsLayout() {
  const { isAuthenticated, isLoading } = useAuthContext()

  if (isLoading) return null

  if (!isAuthenticated) {
    return <Redirect href="/" />
  }

  return (
    <Tabs
      screenOptions={{
        tabBarActiveTintColor: 'blue',
        tabBarInactiveTintColor: 'gray',
        tabBarShowLabel: true,
        headerShown: true
      }}>
      <Tabs.Screen
        name="index"
        options={{
          title: 'Home',
          tabBarIcon: ({ color, size }) => (
            <Text style={{ color, fontSize: 20 }}>
              <House />
            </Text>
          ),
          headerRight: () => (
            <Link href="/notifications" className="mr-4">
              <Bell />
            </Link>
          )
        }}
      />
      <Tabs.Screen
        name="search"
        options={{
          title: 'Search',
          tabBarIcon: ({ color, size }) => (
            <Text style={{ color, fontSize: 20 }}>
              <Search />
            </Text>
          )
        }}
      />
      <Tabs.Screen
        name="create"
        options={{
          title: 'New',
          tabBarIcon: ({ color, size }) => (
            <Text style={{ color, fontSize: 20 }}>
              <CirclePlus />
            </Text>
          )
        }}
      />
      <Tabs.Screen
        name="user"
        options={{
          title: 'User',
          tabBarIcon: ({ color, size }) => (
            <Text style={{ color, fontSize: 20 }}>
              <User />
            </Text>
          ),
          headerRight: () => (
            <Link href="/settings" className="mr-4">
              <Settings />
            </Link>
          )
        }}
      />
    </Tabs>
  )
}
