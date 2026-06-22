import { DarkTheme, DefaultTheme, ThemeProvider } from '@react-navigation/native';
import { Stack } from 'expo-router';
import { StatusBar } from 'expo-status-bar';
import 'react-native-reanimated';

import { useColorScheme } from '@/hooks/use-color-scheme';

export const unstable_settings = {
  anchor: '(tabs)',
};

export default function RootLayout() {
  const colorScheme = useColorScheme();

  return (
    <ThemeProvider value={colorScheme === 'dark' ? DarkTheme : DefaultTheme}>
      <Stack>
        <Stack.Screen name="(tabs)" options={{ headerShown: false }} />
        {/* <Stack.Screen name="(coffee)" options={{ headerShown: false }} />  */}
         {/* everything inside the coffee group will have this options applied
          that we don't want the headershown so setted to false this option will be
          applied to both the pages that is contact and the main home page */}

        {/* <Stack.Screen name="index" options={{title: 'Home',headerShown: false}}/>
        <Stack.Screen name="contact" options={{title: 'Contact Us'}}/> */}
        <Stack.Screen name="modal" options={{ presentation: 'modal', title: 'Modal' }} />
      </Stack>
      <StatusBar style="auto" />
    </ThemeProvider>
  );
}
