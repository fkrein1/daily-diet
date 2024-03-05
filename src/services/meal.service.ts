import AsyncStorage from '@react-native-async-storage/async-storage';
import * as T from './meal.types';

export const mealService = {
  mealStorageKey: '@daily-diet-v1:meals',

  async addMeal(req: T.IAddMealRequest) {
    try {
      const storedMeals = await AsyncStorage.getItem(this.mealStorageKey);
      const meals = storedMeals ? JSON.parse(storedMeals) : [];

      const updatedMeals = JSON.stringify([...meals, req]);
      await AsyncStorage.setItem(this.mealStorageKey, updatedMeals);
    } catch (error) {
      console.error('Error adding meal:', error);
    }
  },

  async getMeals() {
    try {
      const storedMeals = await AsyncStorage.getItem(this.mealStorageKey);
      return storedMeals ? JSON.parse(storedMeals) : [];
    } catch (error) {
      console.error('Error getting meal:', error);
    }
  },
};
