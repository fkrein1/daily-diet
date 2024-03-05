import RNDateTimePicker from '@react-native-community/datetimepicker';
import { Keyboard, TouchableWithoutFeedback, View } from 'react-native';
import * as S from './add-meal.styles';
import * as T from './add-meal.types';

import { zodResolver } from '@hookform/resolvers/zod';

import * as zod from 'zod';

import { mealService } from '@src/services/meal.service';
import { Fragment } from 'react';
import { Controller, useForm } from 'react-hook-form';

const formValidationSchema = zod.object({
  name: zod.string().min(3, 'Informe o nome'),
  description: zod.string().min(3, 'Informe a descrição'),
  date: zod.date(),
  time: zod.date(),
  onDiet: zod.boolean({
    required_error: 'Selecione a opção de dieta',
  }),
});

export type FormData = zod.infer<typeof formValidationSchema>;

export function AddMeal({ navigation }: T.AddMealProps) {
  const {
    control,
    handleSubmit,
    formState: { errors },
  } = useForm<FormData>({
    resolver: zodResolver(formValidationSchema),
    defaultValues: {
      name: '',
      description: '',
      date: new Date(),
      time: new Date(),
      onDiet: undefined,
    },
  });

  const onSubmit = async (data: FormData) => {
    await mealService.addMeal(data);
    navigation.navigate('MealSuccess', { onDiet: data.onDiet });
  };

  return (
    <TouchableWithoutFeedback onPress={Keyboard.dismiss}>
      <S.Container>
        <S.Header>
          <S.BackButton onPress={() => navigation.goBack()}>
            <S.ArrowLeft name="arrowleft" size={24} />
          </S.BackButton>
          <S.WrapperText>
            <S.HeaderText>Nova refeição</S.HeaderText>
          </S.WrapperText>
          <S.BackButton />
        </S.Header>

        <S.Content>
          <View>
            <S.Label>Nome</S.Label>
            <Controller
              control={control}
              render={({ field: { onChange, onBlur, value } }) => (
                <S.NameInput
                  onBlur={onBlur}
                  onChangeText={onChange}
                  value={value}
                />
              )}
              name="name"
            />
            <S.ErrorText>{errors.name?.message}</S.ErrorText>
            <S.DescriptionLabel>Descrição</S.DescriptionLabel>
            <Controller
              control={control}
              render={({ field: { onChange, onBlur, value } }) => (
                <S.DescriptionInput
                  multiline
                  onBlur={onBlur}
                  onChangeText={onChange}
                  value={value}
                />
              )}
              name="description"
            />
            <S.ErrorText>{errors.description?.message}</S.ErrorText>

            <S.DateTimeContainer>
              <S.DateTimeWrapper>
                <S.Label>Data</S.Label>
                <Controller
                  control={control}
                  render={({ field: { onChange, value } }) => (
                    <RNDateTimePicker
                      mode="date"
                      value={value}
                      onChange={(_event, selectedDate) => {
                        onChange(selectedDate);
                      }}
                      style={{ marginLeft: -10 }}
                    />
                  )}
                  name="date"
                />
              </S.DateTimeWrapper>
              <S.DateTimeWrapper>
                <S.Label>Hora</S.Label>

                <Controller
                  control={control}
                  render={({ field: { onChange, value } }) => (
                    <RNDateTimePicker
                      mode="time"
                      value={value}
                      onChange={(_event, selectedDate) => {
                        onChange(selectedDate);
                      }}
                      style={{ marginLeft: -10 }}
                    />
                  )}
                  name="time"
                />
              </S.DateTimeWrapper>
            </S.DateTimeContainer>
            <S.Label>Está dentro da dieta?</S.Label>
            <S.DietContainer>
              <Controller
                control={control}
                render={({ field: { onChange, value } }) => (
                  <Fragment>
                    <S.DietButton
                      onPress={() => onChange(true)}
                      isSelected={value}
                    >
                      <S.GreenIcon />
                      <S.DietLabel>Sim</S.DietLabel>
                    </S.DietButton>
                    <S.NotDietButton
                      onPress={() => onChange(false)}
                      isSelected={value === false}
                    >
                      <S.RedIcon />
                      <S.DietLabel>Não</S.DietLabel>
                    </S.NotDietButton>
                  </Fragment>
                )}
                name="onDiet"
              />
            </S.DietContainer>
            <S.ErrorText>{errors.onDiet?.message}</S.ErrorText>
          </View>

          <S.ConfirmButton activeOpacity={0.8} onPress={handleSubmit(onSubmit)}>
            <S.ConfirmText>Cadastrar refeição</S.ConfirmText>
          </S.ConfirmButton>
        </S.Content>
      </S.Container>
    </TouchableWithoutFeedback>
  );
}
