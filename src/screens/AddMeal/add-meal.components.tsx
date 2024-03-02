import RNDateTimePicker from '@react-native-community/datetimepicker';
import { Keyboard, TouchableWithoutFeedback, View } from 'react-native';
import * as S from './add-meal.styles';
import * as T from './add-meal.types';

import { Fragment } from 'react';
import { Controller, useForm } from 'react-hook-form';

export function AddMeal({ navigation }: T.AddMealProps) {
  const {
    control,
    handleSubmit,
    formState: { errors },
  } = useForm({
    defaultValues: {
      name: '',
      description: '',
      date: new Date(),
      time: new Date(),
      onDiet: undefined,
    },
  });
  const onSubmit = (data) => console.log(data);

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
              rules={{
                required: true,
              }}
              render={({ field: { onChange, onBlur, value } }) => (
                <S.NameInput
                  onBlur={onBlur}
                  onChangeText={onChange}
                  value={value}
                />
              )}
              name="name"
            />
            {errors.name && <S.ErrorText>Nome é obrigatório</S.ErrorText>}
            <S.DescriptionLabel>Descrição</S.DescriptionLabel>
            <Controller
              control={control}
              rules={{
                required: true,
              }}
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
            {errors.description && (
              <S.ErrorText>Descrição é obrigatória</S.ErrorText>
            )}

            <S.DateTimeContainer>
              <S.DateTimeWrapper>
                <S.Label>Data</S.Label>
                <Controller
                  control={control}
                  rules={{
                    required: true,
                  }}
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
                  rules={{
                    required: true,
                  }}
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
                rules={{
                  required: true,
                }}
                render={({ field: { onChange, value } }) => (
                  <Fragment>
                    <S.DietButton
                      onPress={() => onChange('true')}
                      isSelected={value === 'true'}
                    >
                      <S.GreenIcon />
                      <S.DietLabel>Sim</S.DietLabel>
                    </S.DietButton>
                    <S.NotDietButton
                      onPress={() => onChange('false')}
                      isSelected={value === 'false'}
                    >
                      <S.RedIcon />
                      <S.DietLabel>Não</S.DietLabel>
                    </S.NotDietButton>
                  </Fragment>
                )}
                name="onDiet"
              />
            </S.DietContainer>
            {errors.onDiet && (
              <S.ErrorText>Seleciona a opção de dieta</S.ErrorText>
            )}
          </View>

          <S.ConfirmButton activeOpacity={0.8} onPress={handleSubmit(onSubmit)}>
            <S.ConfirmText>Cadastrar refeição</S.ConfirmText>
          </S.ConfirmButton>
        </S.Content>
      </S.Container>
    </TouchableWithoutFeedback>
  );
}
