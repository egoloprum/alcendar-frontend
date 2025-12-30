import { X } from 'lucide-react-native'
import React from 'react'
import { TouchableOpacity } from 'react-native'

export const UserSearchDeleteBtn = ({ userId }: { userId: string }) => {
  const handlePress = () => {
    console.log(`${userId} is deleted`)
  }

  return (
    <TouchableOpacity
      onPress={handlePress}
      className="z-10 ml-auto aspect-square h-10 w-10 items-center justify-center rounded-full"
      hitSlop={10}>
      <X />
    </TouchableOpacity>
  )
}
