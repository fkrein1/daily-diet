import { createNativeStackNavigator } from '@react-navigation/native-stack';
import { AddMeal } from '@src/screens/AddMeal/add-meal.components';
import { Home } from '@src/screens/Home/home.component';
import { useTheme } from 'styled-components/native';
import { AppRoutesParamList } from './app.types';

const { Navigator, Screen } = createNativeStackNavigator<AppRoutesParamList>();

export function AppRoutes() {
  const theme = useTheme();
  return (
    <Navigator
      screenOptions={{
        headerShown: false,
      }}
    >
      <Screen name="Home" component={Home} />
      <Screen name="AddMeal" component={AddMeal} />
    </Navigator>
  );
}
