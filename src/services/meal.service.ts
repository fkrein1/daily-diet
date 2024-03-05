import AsyncStorage from '@react-native-async-storage/async-storage';
import uuid from 'react-native-uuid';

import * as T from './meal.types';

export const mealService = {
  mealStorageKey: '@daily-diet-v1:meals',

  async addMeal(req: T.IAddMealRequest) {
    try {
      const storedMeals = await AsyncStorage.getItem(this.mealStorageKey);
      const meals = storedMeals ? JSON.parse(storedMeals) : [];

      const updatedMeals = JSON.stringify([
        ...meals,
        { ...req, id: uuid.v4() },
      ]);
      await AsyncStorage.setItem(this.mealStorageKey, updatedMeals);
    } catch (error) {
      console.error('Error adding meal:', error);
    }
  },

  async getMeals(): Promise<T.IGetMealsResponse[]> {
    try {
      const storedMeals = await AsyncStorage.getItem(this.mealStorageKey);
      return storedMeals ? JSON.parse(storedMeals) : [];
    } catch (error) {
      console.error('Error getting meal:', error);
      return [];
    }
  },
};
