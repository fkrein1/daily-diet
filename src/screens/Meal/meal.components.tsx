import { useTheme } from 'styled-components/native';
import * as S from './meal.styles';
import * as T from './meal.types';

export function Meal({ navigation, route }: T.MealProps) {
  const { item } = route.params;
  const theme = useTheme();
  return (
    <S.Container
      color={item.onDiet ? theme.COLORS.GREEN_LIGHT : theme.COLORS.RED_LIGHT}
    >
      <S.Header>
        <S.BackButton onPress={() => navigation.goBack()}>
          <S.ArrowLeft name="arrowleft" size={24} />
        </S.BackButton>
        <S.WrapperText>
          <S.HeaderText>Refeição</S.HeaderText>
        </S.WrapperText>
        <S.BackButton />
      </S.Header>

      <S.Content></S.Content>
    </S.Container>
  );
}
