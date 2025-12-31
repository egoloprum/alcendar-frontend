import './global.css'
import { Theme, ThemeProvider } from '@react-navigation/native'
import { QueryClient, QueryClientProvider } from '@tanstack/react-query'
import { useFonts } from 'expo-font'
import { SplashScreen, Stack } from 'expo-router'
import { useEffect } from 'react'
import { Platform, useColorScheme } from 'react-native'

import { AuthProvider } from '../shared/utils/contexts'

const queryClient = new QueryClient()

SplashScreen.preventAutoHideAsync()

export default function RootLayout() {
  const [loaded, error] = useFonts({
    'Gliker-Regular': require('../shared/fonts/gliker-regular.ttf'),
    'Gliker-Bold': require('../shared/fonts/gliker-bold.ttf')
  })

  const colorScheme = useColorScheme()

  useEffect(() => {
    if (loaded || error) {
      SplashScreen.hideAsync()
    }
  }, [loaded, error])

  if (!loaded && !error) {
    return null
  }

  return (
    <QueryClientProvider client={queryClient}>
      <AuthProvider>
        <ThemeProvider value={colorScheme === 'dark' ? DarkTheme : DefaultTheme}>
          <Stack>
            <Stack.Screen name="index" options={{ headerShown: false }} />
            <Stack.Screen name="auth" options={{ headerShown: false }} />
            <Stack.Screen name="(protected)" options={{ headerShown: false }} />
            {/* <Stack.Screen name="(protected)/(tabs)" options={{ headerShown: false }} /> */}
          </Stack>
        </ThemeProvider>
      </AuthProvider>
    </QueryClientProvider>
  )
}

const fonts = Platform.select({
  web: {
    regular: {
      fontFamily: 'Gliker-Regular',
      fontWeight: '400'
    },
    medium: {
      fontFamily: 'Gliker-Regular',
      fontWeight: '500'
    },
    bold: {
      fontFamily: 'Gliker-Bold',
      fontWeight: '700'
    },
    heavy: {
      fontFamily: 'Gliker-Bold',
      fontWeight: '800'
    }
  },

  ios: {
    regular: {
      fontFamily: 'Gliker-Regular',
      fontWeight: '400'
    },
    medium: {
      fontFamily: 'Gliker-Regular',
      fontWeight: '500'
    },
    bold: {
      fontFamily: 'Gliker-Bold',
      fontWeight: '700'
    },
    heavy: {
      fontFamily: 'Gliker-Bold',
      fontWeight: '800'
    }
  },

  android: {
    regular: {
      fontFamily: 'Gliker-Regular',
      fontWeight: '400'
    },
    medium: {
      fontFamily: 'Gliker-Regular',
      fontWeight: '500'
    },
    bold: {
      fontFamily: 'Gliker-Bold',
      fontWeight: '700'
    },
    heavy: {
      fontFamily: 'Gliker-Bold',
      fontWeight: '800'
    }
  },

  default: {
    regular: { fontFamily: 'sans-serif', fontWeight: '400' },
    medium: { fontFamily: 'sans-serif', fontWeight: '500' },
    bold: { fontFamily: 'sans-serif', fontWeight: '700' },
    heavy: { fontFamily: 'sans-serif', fontWeight: '800' }
  }
} as const satisfies Record<string, Theme['fonts']>)

const DefaultTheme: Theme = {
  dark: false,
  colors: {
    primary: '#F87060',
    background: '#fef3c7',
    card: '#fef3c7',
    text: '#1F2937',
    border: 'oklch(21% 0.034 264.665)',
    notification: '#F87060'
  },
  fonts
}

const DarkTheme: Theme = {
  dark: true,
  colors: {
    primary: '#F87060',
    background: '#0F172A',
    card: '#1E293B',
    text: '#F8FAFC',
    border: '#334155',
    notification: '#F87060'
  },
  fonts
}
