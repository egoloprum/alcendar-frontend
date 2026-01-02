import { useNavigation } from 'expo-router'
import { ArrowLeft } from 'lucide-react-native'
import { View, Text, TouchableOpacity } from 'react-native'
import { SafeAreaView } from 'react-native-safe-area-context'

type HeaderBarProps = {
  title?: string
  right?: React.ReactNode
  showBack?: boolean
}

export function HeaderBar({ title, right, showBack = true }: HeaderBarProps) {
  const navigation = useNavigation()

  return (
    <SafeAreaView edges={['top']}>
      <View className="bg-transparent p-4">
        <View className="relative">
          <View className="absolute inset-0 translate-x-1 translate-y-1 rounded-full border-2 bg-gray-800" />

          <View className="flex-row items-center justify-between rounded-full border-2 bg-disabled px-4 py-3">
            <View className="flex-row items-center">
              {showBack && navigation.canGoBack() && (
                <TouchableOpacity
                  onPress={() => navigation.goBack()}
                  className="mr-3"
                  activeOpacity={0.7}>
                  <ArrowLeft color="white" size={20} />
                </TouchableOpacity>
              )}

              {title && (
                <Text
                  className="text-sm font-medium uppercase tracking-widest text-white"
                  style={{ fontFamily: 'Gliker-Regular' }}>
                  {title}
                </Text>
              )}
            </View>

            <View>{right}</View>
          </View>
        </View>
      </View>
    </SafeAreaView>
  )
}
