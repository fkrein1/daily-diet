export interface IAddMealRequest {
  name: string;
  description: string;
  date: Date;
  time: Date;
  onDiet: boolean;
}

export interface IGetMealsResponse {
  name: string;
  description: string;
  date: string;
  time: string;
  onDiet: boolean;
  id: string;
}
