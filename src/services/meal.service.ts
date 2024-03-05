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

  async getMeals(): Promise<T.IMeal[]> {
    try {
      const storedMeals = await AsyncStorage.getItem(this.mealStorageKey);
      return storedMeals ? JSON.parse(storedMeals) : [];
    } catch (error) {
      console.error('Error getting meal:', error);
      return [];
    }
  },

  async deleteMeal(id: string) {
    try {
      const storedMeals = await AsyncStorage.getItem(this.mealStorageKey);
      const meals: T.IMeal[] = storedMeals ? JSON.parse(storedMeals) : [];

      const updatedMeals = meals.filter((meal) => meal.id !== id);

      await AsyncStorage.setItem(
        this.mealStorageKey,
        JSON.stringify(updatedMeals),
      );
    } catch (error) {
      console.error('Error deleting meal:', error);
    }
  },

  async editMeal(meal: T.IEditMealRequest) {
    try {
      const storedMeals = await AsyncStorage.getItem(this.mealStorageKey);
      const meals: T.IMeal[] = storedMeals ? JSON.parse(storedMeals) : [];

      const updatedMeals = meals.map((item) => {
        if (item.id === meal.id) {
          return meal;
        }
        return item;
      });

      await AsyncStorage.setItem(
        this.mealStorageKey,
        JSON.stringify(updatedMeals),
      );
    } catch (error) {
      console.error('Error deleting meal:', error);
    }
  },
};
