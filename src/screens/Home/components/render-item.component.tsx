import { helpers } from '@src/helpers';
import * as S from './render-item.styles';
import * as T from './render-item.types';

export function RenderItem({ item, handleItemPress }: T.RendeItemProps) {
  return (
    <S.Container activeOpacity={0.8} onPress={() => handleItemPress(item)}>
      <S.Time>{helpers.formatDateToTime(item.time)}</S.Time>
      <S.Separator />
      <S.Meal numberOfLines={1}>{item.name}</S.Meal>
      {item.onDiet ? <S.GreenIcon /> : <S.RedIcon />}
    </S.Container>
  );
}
