import { IMeal } from '@src/services/meal.types';

export type AppRoutesParamList = {
  Home: undefined;
  AddMeal: undefined;
  MealSuccess: { onDiet: boolean };
  Meal: { item: IMeal };
  EditMeal: { item: IMeal };
};
