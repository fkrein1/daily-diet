import avatar from '@src/assets/avatar.jpg';
import Logo from '@src/assets/logo.svg';

import { useFocusEffect } from '@react-navigation/native';
import { helpers } from '@src/helpers';
import { mealService } from '@src/services/meal.service';
import { IMeal } from '@src/services/meal.types';
import { compareDesc, parse } from 'date-fns';
import { useCallback, useState } from 'react';
import { SectionList } from 'react-native';
import { RenderItem } from './components/render-item.component';
import * as S from './home.styles';
import * as T from './home.types';

export function Home({ navigation }: T.HomeProps) {
  const [meals, setMeals] = useState<IMeal[]>([]);

  const hasMeals = meals.length > 0;
  const onDietPercentage =
    meals.filter((meal) => meal.onDiet).length / meals.length;
  const isOnDiet = onDietPercentage >= 0.5;

  const handleItemPress = (item: IMeal) => {
    navigation.navigate('Meal', { item });
  };

  const organizeMealsByDate = () => {
    const groupMealsByDay = () =>
      meals.reduce((acc, meal) => {
        const day = helpers.formatDayOfYear(meal.date);
        acc[day] = acc[day] || [];
        acc[day].push(meal);
        return acc;
      }, {} as { [key: string]: IMeal[] });

    const sortDays = (days: string[]) =>
      days.sort((a, b) => {
        const dateA = parse(a, 'dd/MM/yy', new Date());
        const dateB = parse(b, 'dd/MM/yy', new Date());
        return compareDesc(dateA, dateB);
      });

    const mealsByDay = groupMealsByDay();
    const sortedDays = sortDays(Object.keys(mealsByDay));

    const transformedList = sortedDays.map((day) => ({
      title: day,
      data: mealsByDay[day].sort(
        (a, b) => Number(new Date(b.time)) - Number(new Date(a.time)),
      ),
    }));

    return transformedList;
  };

  const getMeals = async () => {
    const savedMeals = await mealService.getMeals();
    setMeals(savedMeals);
  };

  useFocusEffect(
    useCallback(() => {
      getMeals();
    }, []),
  );

  return (
    <S.Container>
      <S.Wrapper>
        <S.Header>
          <Logo />
          <S.Avatar source={avatar} />
        </S.Header>

        {hasMeals && (
          <S.Stats onDiet={isOnDiet} activeOpacity={0.8}>
            <S.ArrowRight name={'arrow-up-right'} size={28} onDiet={isOnDiet} />
            <S.StatsTitle>
              {helpers.formatPercentage(onDietPercentage)}
            </S.StatsTitle>
            <S.StatsText>das refeições dentro da dieta</S.StatsText>
          </S.Stats>
        )}

        <S.Meals>
          <S.MealsTitle>Refeições</S.MealsTitle>
          <S.MealsButton onPress={() => navigation.navigate('AddMeal')}>
            <S.PlusIcon name="plus" size={16} />
            <S.MealsText>Nova refeição</S.MealsText>
          </S.MealsButton>
        </S.Meals>

        <SectionList
          style={{ marginBottom: 350, paddingBottom: 50 }}
          sections={organizeMealsByDate()}
          renderItem={({ item }) => (
            <RenderItem handleItemPress={handleItemPress} item={item} />
          )}
          showsVerticalScrollIndicator={false}
          keyExtractor={(item) => item.id}
          stickySectionHeadersEnabled={false}
          renderSectionHeader={({ section }) => (
            <S.SectionHeader>{section.title}</S.SectionHeader>
          )}
        />
      </S.Wrapper>
    </S.Container>
  );
}
