import { Link } from 'expo-router'
import React from 'react'
import { View, Text } from 'react-native'

export const TermsAndConditions = ({}) => {
  return (
    <View className="mt-4 flex flex-row flex-wrap justify-center gap-x-1 text-center">
      <Text className="inline text-base text-gray-600" style={{ fontFamily: 'Gliker-Regular' }}>
        By continuing, you agree to
      </Text>
      <Link
        href="/auth/signin"
        className="text-base underline"
        style={{ fontFamily: 'Gliker-Regular' }}>
        Alcendar&apos;s Terms of Service
      </Link>
      <Text className="text-base text-gray-600" style={{ fontFamily: 'Gliker-Regular' }}>
        and{' '}
      </Text>
      <Link
        href="/auth/signin"
        className="text-base underline"
        style={{ fontFamily: 'Gliker-Regular' }}>
        Privacy Policy.
      </Link>
    </View>
  )
}
