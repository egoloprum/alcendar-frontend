import { useHeaderHeight } from '@react-navigation/elements'
import React, { ReactNode } from 'react'
import { View } from 'react-native'

import { cn } from '../utils'

interface ContainerProps {
  children: ReactNode
  className?: string
}

export const Container = ({ children, className }: ContainerProps) => {
  const headerHeight = useHeaderHeight()

  return (
    <View
      className={cn('flex h-full w-full flex-col gap-4 overflow-y-auto p-4', className)}
      style={{ paddingTop: headerHeight }}>
      {children}
    </View>
  )
}
