import * as SecureStore from 'expo-secure-store'
import AsyncStorage from '@react-native-async-storage/async-storage'
import { Platform } from 'react-native'

const SESSION_KEY = 'USER_SESSION'

const isWeb = Platform.OS === 'web'

export async function saveSession(session: any) {
  if (isWeb) {
    await AsyncStorage.setItem(SESSION_KEY, JSON.stringify(session))
  } else {
    await SecureStore.setItemAsync(SESSION_KEY, JSON.stringify(session))
  }
}

export async function getSession(): Promise<any | null> {
  const session = isWeb
    ? await AsyncStorage.getItem(SESSION_KEY)
    : await SecureStore.getItemAsync(SESSION_KEY)

  return session ? JSON.parse(session) : null
}

export async function removeSession() {
  if (isWeb) {
    await AsyncStorage.removeItem(SESSION_KEY)
  } else {
    await SecureStore.deleteItemAsync(SESSION_KEY)
  }
}
