import avatar from '@src/assets/avatar.jpg';
import Logo from '@src/assets/logo.svg';

import * as S from './home.styles';
import * as T from './home.types';

export function Home({ navigation }: T.HomeProps) {
  return (
    <S.Container>
      <S.Wrapper>
        <S.Header>
          <Logo />
          <S.Avatar source={avatar} />
        </S.Header>

        <S.Meals>
          <S.MealsTitle>Refeições</S.MealsTitle>
          <S.MealsButton onPress={() => navigation.navigate('AddMeal')}>
            <S.PlusIcon name="plus" size={16} />
            <S.MealsText>Nova refeição</S.MealsText>
          </S.MealsButton>
        </S.Meals>
      </S.Wrapper>
    </S.Container>
  );
}
