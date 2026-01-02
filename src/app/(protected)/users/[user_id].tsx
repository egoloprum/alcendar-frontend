import { Link, useLocalSearchParams } from 'expo-router'
import { ChevronRight } from 'lucide-react-native'
import React from 'react'
import { View, Text } from 'react-native'

import { Button, Container } from '@/src/shared/components'

export default function Page() {
  const { user_id } = useLocalSearchParams()

  return (
    <Container>
      <View className="gap-4 rounded-xl border-2 border-gray-700 p-4">
        <View className="flex-row items-center gap-6">
          <View className="h-20 w-20 rounded-full border-2"></View>
          <Text className="tracking-wides text-2xl" style={{ fontFamily: 'Gliker-Regular' }}>
            Iver Anton Kornstad
          </Text>
        </View>
        <View className="flex-row gap-8">
          <View>
            <Text className="text-base" style={{ fontFamily: 'Gliker-Regular' }}>
              Following
            </Text>
            <Text className="text-xl" style={{ fontFamily: 'Gliker-Bold' }}>
              172
            </Text>
          </View>
          <View>
            <Text className="text-base" style={{ fontFamily: 'Gliker-Regular' }}>
              Followers
            </Text>
            <Text className="text-xl" style={{ fontFamily: 'Gliker-Bold' }}>
              16037
            </Text>
          </View>
        </View>
      </View>

      <View className="flex-row flex-wrap gap-4">
        <Button textClassName="text-xs">Follow</Button>
        <Button variant="secondary" textClassName="text-xs">
          Share QR code
        </Button>
      </View>
      {/* Horizontal scroll view for posts */}
      <View className="flex-row gap-2 overflow-x-auto [-ms-overflow-style:none] [scrollbar-width:none] [&::-webkit-scrollbar]:hidden">
        <View className="h-[100px] w-[100px] rounded-xl border-2"></View>
        <View className="h-[100px] w-[100px] rounded-xl border-2"></View>
        <View className="h-[100px] w-[100px] rounded-xl border-2"></View>
        <View className="h-[100px] w-[100px] rounded-xl border-2"></View>
      </View>

      <View className="gap-6 rounded-xl border-2 p-4">
        {/* Horizontal scroll view for filters */}
        <View className="-my-2 flex-row gap-2 overflow-x-scroll py-2 [-ms-overflow-style:none] [scrollbar-width:none] [&::-webkit-scrollbar]:hidden">
          <Button textClassName="text-xs">Water</Button>
          <Button textClassName="text-xs" variant="ghost">
            Beer
          </Button>
          <Button textClassName="text-xs" variant="ghost">
            Wine
          </Button>
          <Button textClassName="text-xs" variant="ghost">
            Vodka
          </Button>
          <Button textClassName="text-xs" variant="ghost">
            Whiskey
          </Button>
        </View>

        <View className="gap-4">
          <Text className="tracking-wides text-base" style={{ fontFamily: 'Gliker-Bold' }}>
            This week
          </Text>
          <View className="flex-row gap-6">
            <View>
              <Text className="text-sm" style={{ fontFamily: 'Gliker-Regular' }}>
                Distance
              </Text>
              <Text className="text-base" style={{ fontFamily: 'Gliker-Regular' }}>
                19.2 km
              </Text>
            </View>
            <View>
              <Text className="text-sm" style={{ fontFamily: 'Gliker-Regular' }}>
                Time
              </Text>
              <Text className="text-base" style={{ fontFamily: 'Gliker-Regular' }}>
                1h 58m
              </Text>
            </View>
            <View>
              <Text className="text-sm" style={{ fontFamily: 'Gliker-Regular' }}>
                Elevation
              </Text>
              <Text className="text-base" style={{ fontFamily: 'Gliker-Regular' }}>
                0 m
              </Text>
            </View>
          </View>
        </View>

        {/* Graph for drinks */}
        <View className="h-40 rounded-xl border-2 p-4"></View>
      </View>

      <View className="gap-6 rounded-xl border-2 p-4">
        <View className="flex-row items-center justify-between">
          <Text className="tracking-wides text-xl" style={{ fontFamily: 'Gliker-Bold' }}>
            Trophy Case
          </Text>
          <Text className="tracking-wides text-base" style={{ fontFamily: 'Gliker-Regular' }}>
            24
          </Text>
        </View>
        {/* View for trophies */}
        <View className="flex-row justify-center gap-2">
          <View className="w-fit flex-col items-center gap-2 px-2">
            <View className="h-16 w-16 rounded-xl border-2"></View>
            <Text className="text-sm" style={{ fontFamily: 'Gliker-Regular' }}>
              Jun 2025
            </Text>
          </View>
          <View className="w-fit flex-col items-center gap-2 px-2">
            <View className="h-16 w-16 rounded-xl border-2"></View>
            <Text className="text-sm" style={{ fontFamily: 'Gliker-Regular' }}>
              Jun 2024
            </Text>
          </View>
          <View className="w-fit flex-col items-center gap-2 px-2">
            <View className="h-16 w-16 rounded-xl border-2"></View>
            <Text className="text-sm" style={{ fontFamily: 'Gliker-Regular' }}>
              Jun 2023
            </Text>
          </View>
          <View className="w-fit flex-col items-center gap-2 px-2">
            <View className="h-16 w-16 rounded-xl border-2"></View>
            <Text className="text-sm" style={{ fontFamily: 'Gliker-Regular' }}>
              Jun 2022
            </Text>
          </View>
        </View>
        <Link href="/" className="flex flex-row items-center justify-between py-2">
          <Text className="text-base" style={{ fontFamily: 'Gliker-Regular' }}>
            All trophies
          </Text>
          <ChevronRight />
        </Link>
      </View>
    </Container>
  )
}
