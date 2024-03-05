export interface IAddMealRequest {
  name: string;
  description: string;
  date: Date;
  time: Date;
  onDiet: boolean;
}

export interface IEditMealRequest {
  name: string;
  description: string;
  date: Date;
  time: Date;
  onDiet: boolean;
  id: string;
}

export interface IMeal {
  name: string;
  description: string;
  date: string;
  time: string;
  onDiet: boolean;
  id: string;
}
