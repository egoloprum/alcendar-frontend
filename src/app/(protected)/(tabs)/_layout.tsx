import { useAuthContext } from '@/src/shared/utils'
import { Redirect, Tabs } from 'expo-router'
import React from 'react'
import { Text } from 'react-native'

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
          tabBarIcon: ({ color, size }) => <Text style={{ color, fontSize: 20 }}>🏠</Text>
        }}
      />
      <Tabs.Screen
        name="search"
        options={{
          title: 'Search',
          tabBarIcon: ({ color, size }) => <Text style={{ color, fontSize: 20 }}>🔍</Text>
        }}
      />
      <Tabs.Screen
        name="create"
        options={{
          title: 'New',
          tabBarIcon: ({ color, size }) => <Text style={{ color, fontSize: 20 }}>➕</Text>
        }}
      />
      <Tabs.Screen
        name="user"
        options={{
          title: 'User',
          tabBarIcon: ({ color, size }) => <Text style={{ color, fontSize: 20 }}>👤</Text>
        }}
      />
    </Tabs>
  )
}
