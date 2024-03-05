import { createNativeStackNavigator } from '@react-navigation/native-stack';
import { AddMeal } from '@src/screens/AddMeal/add-meal.components';
import { Home } from '@src/screens/Home/home.component';
import { Meal } from '@src/screens/Meal/meal.components';
import { MealSuccess } from '@src/screens/MealSuccess/meal-success.component';
import { useTheme } from 'styled-components/native';
import { AppRoutesParamList } from './app.types';
import { EditMeal } from '@src/screens/EditMeal/edit-meal.components';

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
      <Screen name="MealSuccess" component={MealSuccess} />
      <Screen name="Meal" component={Meal} />
      <Screen name="EditMeal" component={EditMeal} />

    </Navigator>
  );
}
