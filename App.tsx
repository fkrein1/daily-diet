import {
  NunitoSans_400Regular,
  NunitoSans_700Bold,
  useFonts,
} from '@expo-google-fonts/nunito-sans';
import { Routes } from '@src/routes';
import { theme } from '@src/theme';
import { StatusBar } from 'expo-status-bar';
import { ThemeProvider } from 'styled-components/native';

export default function App() {
  let [fontsLoaded, fontError] = useFonts({
    NunitoSans_400Regular,
    NunitoSans_700Bold,
  });

  if (!fontsLoaded && !fontError) {
    return null;
  }

  return (
    <ThemeProvider theme={theme}>
      <StatusBar style="dark" />
      <Routes />
    </ThemeProvider>
  );
}
