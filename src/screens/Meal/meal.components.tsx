import { helpers } from '@src/helpers';
import { mealService } from '@src/services/meal.service';
import { Alert } from 'react-native';
import { useTheme } from 'styled-components/native';
import * as S from './meal.styles';
import * as T from './meal.types';

export function Meal({ navigation, route }: T.MealProps) {
  const { item } = route.params;
  const theme = useTheme();

  const handleEditMeal = () => {
    navigation.navigate('EditMeal', { item });
  };

  const handleDeleteMeal = () => {
    Alert.alert('Deseja realmente excluir o registro da refeição?', '', [
      {
        text: 'Cancelar',
        style: 'cancel',
      },
      {
        text: 'Sim, exluir',
        onPress: async () => {
          await mealService.deleteMeal(item.id);
          navigation.navigate('Home');
        },
      },
    ]);
  };

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

      <S.Content>
        <S.MealWrapper>
          <S.MealTitle>{item.name}</S.MealTitle>
          <S.MealSubitle>{item.description}</S.MealSubitle>
          <S.DateTitle>Data e hora</S.DateTitle>
          <S.DateValue>{`${helpers.formatDayOfYear(
            item.date,
          )} às ${helpers.formatDateToTime(item.time)}`}</S.DateValue>
          <S.DietBadge>
            {item.onDiet ? <S.GreenIcon /> : <S.RedIcon />}

            <S.DietText>
              {item.onDiet ? 'dentro da dieta' : 'fora da dieta'}
            </S.DietText>
          </S.DietBadge>
        </S.MealWrapper>

        <S.ButtonWrapper>
          <S.EditButton activeOpacity={0.8} onPress={handleEditMeal}>
            <S.EditIcon name="edit" size={18} />
            <S.EditText>Editar refeição</S.EditText>
          </S.EditButton>
          <S.DeleteButton activeOpacity={0.8} onPress={handleDeleteMeal}>
            <S.DeleteIcon name="delete" size={18} />
            <S.DeleteText>Excluir refeição</S.DeleteText>
          </S.DeleteButton>
        </S.ButtonWrapper>
      </S.Content>
    </S.Container>
  );
}
