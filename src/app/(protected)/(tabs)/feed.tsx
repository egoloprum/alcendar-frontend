import { Redirect } from 'expo-router'
import { View, Text, StyleSheet } from 'react-native'

import { useAuthContext } from '@/src/shared/utils/contexts'

export default function Tab() {
  const { isAuthenticated, isLoading } = useAuthContext()

  if (isLoading) return null

  if (!isAuthenticated) {
    return <Redirect href="/" />
  }

  return (
    <View style={styles.container}>
      <Text>Tab Home</Text>
    </View>
  )
}

const styles = StyleSheet.create({
  container: {
    flex: 1,
    justifyContent: 'center',
    alignItems: 'center'
  }
})
