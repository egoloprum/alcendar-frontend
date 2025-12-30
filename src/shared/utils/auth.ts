import * as SecureStore from 'expo-secure-store'
import { Platform } from 'react-native'
import { AuthTokens } from '../types'

const ACCESS_TOKEN_KEY = 'accessToken'
const REFRESH_TOKEN_KEY = 'refreshToken'

const webStorage = {
  setItem: async (key: string, value: string) => {
    if (typeof window !== 'undefined') {
      localStorage.setItem(key, value)
    }
  },
  getItem: async (key: string): Promise<string | null> => {
    if (typeof window !== 'undefined') {
      return localStorage.getItem(key)
    }
    return null
  },
  deleteItem: async (key: string) => {
    if (typeof window !== 'undefined') {
      localStorage.removeItem(key)
    }
  }
}

export const saveAuthTokens = async (accessToken: string, refreshToken: string): Promise<void> => {
  if (Platform.OS === 'web') {
    await webStorage.setItem(ACCESS_TOKEN_KEY, accessToken)
    await webStorage.setItem(REFRESH_TOKEN_KEY, refreshToken)
  } else {
    await SecureStore.setItemAsync(ACCESS_TOKEN_KEY, accessToken)
    await SecureStore.setItemAsync(REFRESH_TOKEN_KEY, refreshToken)
  }
}

export const getAuthTokens = async (): Promise<AuthTokens> => {
  if (Platform.OS === 'web') {
    const accessToken = await webStorage.getItem(ACCESS_TOKEN_KEY)
    const refreshToken = await webStorage.getItem(REFRESH_TOKEN_KEY)
    return { accessToken, refreshToken }
  } else {
    const accessToken = await SecureStore.getItemAsync(ACCESS_TOKEN_KEY)
    const refreshToken = await SecureStore.getItemAsync(REFRESH_TOKEN_KEY)
    return { accessToken, refreshToken }
  }
}

export const removeAuthTokens = async (): Promise<void> => {
  if (Platform.OS === 'web') {
    await Promise.all([
      webStorage.deleteItem(ACCESS_TOKEN_KEY),
      webStorage.deleteItem(REFRESH_TOKEN_KEY)
    ])
  } else {
    await Promise.all([
      SecureStore.deleteItemAsync(ACCESS_TOKEN_KEY),
      SecureStore.deleteItemAsync(REFRESH_TOKEN_KEY)
    ])
  }
}
