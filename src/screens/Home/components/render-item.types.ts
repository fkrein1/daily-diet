import { IMeal } from '@src/services/meal.types';

export interface RendeItemProps {
  item: IMeal;
  handleItemPress: (item: IMeal) => void;
}
