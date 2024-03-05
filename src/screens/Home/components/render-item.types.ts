import { IGetMealsResponse } from "@src/services/meal.types";

export interface RendeItemProps {
  item: IGetMealsResponse;
  handleItemPress: (item: IGetMealsResponse) => void;
}
