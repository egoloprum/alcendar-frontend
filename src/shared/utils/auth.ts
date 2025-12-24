import * as SecureStore from 'expo-secure-store'
import AsyncStorage from '@react-native-async-storage/async-storage'
import { Platform } from 'react-native'
import { AuthSession } from '@/src/shared/types/session'

const SESSION_KEY = 'USER_SESSION'
const isWeb = Platform.OS === 'web' && typeof window !== 'undefined'

export async function saveSession(session: AuthSession): Promise<void> {
  const value = JSON.stringify(session)

  if (isWeb) {
    await AsyncStorage.setItem(SESSION_KEY, value)
  } else {
    await SecureStore.setItemAsync(SESSION_KEY, value)
  }
}

export async function getSession(): Promise<AuthSession | null> {
  if (Platform.OS === 'web' && !isWeb) return null

  const value = isWeb
    ? await AsyncStorage.getItem(SESSION_KEY)
    : await SecureStore.getItemAsync(SESSION_KEY)

  return value ? (JSON.parse(value) as AuthSession) : null
}

export async function removeSession(): Promise<void> {
  if (isWeb) {
    await AsyncStorage.removeItem(SESSION_KEY)
  } else {
    await SecureStore.deleteItemAsync(SESSION_KEY)
  }
}
