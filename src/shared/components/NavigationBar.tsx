import { BottomTabBarProps } from '@react-navigation/bottom-tabs'
import { House, Search, CirclePlus, User } from 'lucide-react-native'
import { View, TouchableOpacity } from 'react-native'
import Animated, { FadeIn, FadeOut, LinearTransition } from 'react-native-reanimated'
import { SafeAreaView } from 'react-native-safe-area-context'

import { cn } from '@/src/shared/utils'

const AnimatedTouchableOpacity = Animated.createAnimatedComponent(TouchableOpacity)

export function NavigationBar({ state, descriptors, navigation }: BottomTabBarProps) {
  return (
    <SafeAreaView edges={['bottom']}>
      <View className="w-[90%] self-center">
        <View className="absolute inset-0 translate-x-1 translate-y-1 rounded-full border-2 bg-gray-800" />

        <View className="flex-row items-center justify-center rounded-full border-2 bg-disabled px-3 py-3">
          {state.routes.map((route, index) => {
            if (['_sitemap', '+not-found'].includes(route.name)) return null

            const { options } = descriptors[route.key]
            const label = options.title ?? options.tabBarLabel ?? route.name

            const isFocused = state.index === index

            const onPress = () => {
              const event = navigation.emit({
                type: 'tabPress',
                target: route.key,
                canPreventDefault: true
              })

              if (!isFocused && !event.defaultPrevented) {
                navigation.navigate(route.name)
              }
            }

            return (
              <AnimatedTouchableOpacity
                key={route.key}
                onPress={onPress}
                layout={LinearTransition}
                activeOpacity={0.9}
                className="mx-1">
                <Animated.View
                  className={cn(
                    'w-full flex-row items-center rounded-full px-4 py-2',
                    isFocused ? 'bg-gray-100' : 'bg-transparent'
                  )}>
                  {getIcon(route.name, isFocused ? '#111827' : '#ffffff')}

                  <Animated.Text
                    entering={FadeIn.duration(150)}
                    exiting={FadeOut.duration(150)}
                    style={{
                      fontFamily: 'Gliker-Regular',
                      marginLeft: 8,
                      color: '#111827',
                      textTransform: 'uppercase',
                      opacity: isFocused ? 1 : 0,
                      maxWidth: isFocused ? 100 : 0
                    }}
                    numberOfLines={1}>
                    {label as string}
                  </Animated.Text>
                </Animated.View>
              </AnimatedTouchableOpacity>
            )
          })}
        </View>
      </View>
    </SafeAreaView>
  )
}

function getIcon(route: string, color: string) {
  const size = 20

  switch (route) {
    case 'index':
      return <House size={size} color={color} />
    case 'search':
      return <Search size={size} color={color} />
    case 'create':
      return <CirclePlus size={size} color={color} />
    case 'user':
      return <User size={size} color={color} />
    default:
      return <House size={size} color={color} />
  }
}
