import * as S from './meal-sucess.styles';
import * as T from './meal-sucess.types';

import OffDietImg from '@src/assets/ilustration-off-diet.svg';
import OnDietImg from '@src/assets/ilustration-on-diet.svg';

export function MealSuccess({ navigation, route }: T.MealSuccessProps) {
  const { onDiet } = route.params;

  return (
    <S.Container>
      <S.Wrapper>
        {onDiet ? (
          <S.TitleOnDiet>Continue assim!</S.TitleOnDiet>
        ) : (
          <S.TitleOffDiet>Que pena!</S.TitleOffDiet>
        )}
        {onDiet ? (
          <S.Subtitle>
            Você continua <S.Bold>dentro da dieta</S.Bold>. Muito bem!
          </S.Subtitle>
        ) : (
          <S.Subtitle>
            Você <S.Bold>saiu da dieta</S.Bold> dessa vez, mas continue se
            esforçando e não desista!
          </S.Subtitle>
        )}
        {onDiet ? <OnDietImg /> : <OffDietImg />}
        <S.Button onPress={() => navigation.navigate('Home')}>
          <S.ButtonText>Ir para a página inicial</S.ButtonText>
        </S.Button>
      </S.Wrapper>
    </S.Container>
  );
}
