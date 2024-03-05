import { helpers } from '@src/helpers';
import * as S from './stats.styles';
import * as T from './stats.types';

export function Stats({ navigation, route }: T.StatsProps) {
  const { meals } = route.params;

  const numberOfMeals = meals.length;
  const mealsOnDiet = meals.filter((meal) => meal.onDiet).length;
  const mealsOffDiet = numberOfMeals - mealsOnDiet;
  const onDietPercentage = mealsOnDiet / numberOfMeals;
  const isOnDiet = onDietPercentage >= 0.5;
  const bestOnDietStreak = calculateBestOnDietStreak();

  function calculateBestOnDietStreak() {
    let bestOnDietStreak = 0;
    let counter = 0;

    meals.forEach((meal) => {
      if (meal.onDiet) {
        counter++;
        bestOnDietStreak = Math.max(counter, bestOnDietStreak);
      } else {
        counter = 0;
      }
    });
    return bestOnDietStreak;
  }

  return (
    <S.Container onDiet={isOnDiet}>
      <S.Header>
        <S.BackButton onPress={() => navigation.goBack()}>
          <S.ArrowLeft name="arrowleft" size={24} />
        </S.BackButton>
        <S.WrapperText>
          <S.HeaderTitle>
            {helpers.formatPercentage(onDietPercentage)}
          </S.HeaderTitle>
          <S.HeaderText>das refeições dentro da dieta</S.HeaderText>
        </S.WrapperText>
        <S.BackButton />
      </S.Header>

      <S.Content>
        <S.StatsText>Estatísticas gerais</S.StatsText>
        <S.Card>
          <S.CardTitle>{bestOnDietStreak}</S.CardTitle>
          <S.CardSubtitle>
            melhor sequência de pratos dentro da dieta
          </S.CardSubtitle>
        </S.Card>
        <S.Card>
          <S.CardTitle>{numberOfMeals}</S.CardTitle>
          <S.CardSubtitle>refeições registradas</S.CardSubtitle>
        </S.Card>

        <S.LastCardWrapper>
          <S.CardGreen>
            <S.CardTitle>{mealsOnDiet}</S.CardTitle>
            <S.CardSubtitle>refeições dentro da dieta</S.CardSubtitle>
          </S.CardGreen>
          <S.CardRed>
            <S.CardTitle>{mealsOffDiet}</S.CardTitle>
            <S.CardSubtitle>refeições fora da dieta</S.CardSubtitle>
          </S.CardRed>
        </S.LastCardWrapper>
      </S.Content>
    </S.Container>
  );
}
