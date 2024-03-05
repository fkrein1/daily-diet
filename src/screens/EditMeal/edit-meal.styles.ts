import { AntDesign } from '@expo/vector-icons';
import styled, { css } from 'styled-components/native';

export const Container = styled.SafeAreaView`
  background-color: ${({ theme }) => theme.COLORS.GRAY_500};
  flex: 1;
`;

export const Header = styled.View`
  flex-direction: row;
  align-items: center;
  justify-content: space-between;
`;

export const BackButton = styled.Pressable`
  width: 72px;
  height: 72px;
  align-items: center;
  justify-content: center;
`;

export const ArrowLeft = styled(AntDesign)`
  color: ${({ theme }) => theme.COLORS.GRAY_100};
`;

export const WrapperText = styled.View`
  justify-self: center;
  align-self: center;
`;

export const HeaderText = styled.Text`
  font-size: 18px;
  font-family: ${({ theme }) => theme.FONT_FAMILY.BOLD};
  text-align: center;
`;

export const Content = styled.View`
  background-color: ${({ theme }) => theme.COLORS.GRAY_700};
  height: 96%;
  border-top-right-radius: 20px;
  border-top-left-radius: 20px;
  padding: 40px 24px;
  justify-content: space-between;
`;

export const Label = styled.Text(
  ({ theme }) => css`
    color: ${theme.COLORS.GRAY_200};
    font-family: ${theme.FONT_FAMILY.BOLD};
    font-size: 14px;
    margin-bottom: 4px;
  `,
);

export const DescriptionLabel = styled(Label)`
  margin-top: 24px;
`;

const InputText = styled.TextInput(
  ({ theme }) => css`
    color: ${theme.COLORS.GRAY_100};
    font-size: 16px;
    border: 1px;
    padding: 18px 14px;
    border-radius: 6px;
    border-color: ${theme.COLORS.GRAY_500};
  `,
);

export const NameInput = styled(InputText)``;

export const DescriptionInput = styled(InputText)`
  min-height: 120px;
`;

export const DateTimeContainer = styled.View`
  flex-direction: row;
  gap: 8px;
  margin: 24px 0px;
`;

export const DateTimeWrapper = styled.View`
  flex: 1;
  align-items: flex-start;
`;

export const DietContainer = styled.View`
  flex-direction: row;
  gap: 12px;
`;

interface DietButtonProps {
  isSelected?: boolean;
}

export const DietButton = styled.Pressable<DietButtonProps>(
  ({ theme, isSelected }) => css`
    padding: 16px;
    background-color: ${isSelected
      ? theme.COLORS.GREEN_LIGHT
      : theme.COLORS.GRAY_600};
    border-color: ${isSelected
      ? theme.COLORS.GREEN_DARK
      : theme.COLORS.GRAY_600};
    flex: 1;
    border-width: 1px;
    border-radius: 6px;
    flex-direction: row;
    align-items: center;
    justify-content: center;
    gap: 4px;
  `,
);

export const NotDietButton = styled(DietButton)(
  ({ theme, isSelected }) => css`
    background-color: ${isSelected
      ? theme.COLORS.RED_LIGHT
      : theme.COLORS.GRAY_600};
    border-color: ${isSelected ? theme.COLORS.RED_DARK : theme.COLORS.GRAY_600};
  `,
);
export const GreenIcon = styled.View`
  width: 8px;
  height: 8px;
  border-radius: 50%;
  background-color: ${({ theme }) => theme.COLORS.GREEN_DARK};
`;

export const RedIcon = styled(GreenIcon)`
  background-color: ${({ theme }) => theme.COLORS.RED_DARK};
`;

export const DietLabel = styled(Label)`
  margin-bottom: 0px;
`;

export const ConfirmButton = styled.TouchableOpacity`
  background-color: ${({ theme }) => theme.COLORS.GRAY_200};
  padding: 16px;
  border-radius: 6px;
`;

export const ConfirmText = styled.Text(
  ({ theme }) => css`
    color: ${theme.COLORS.WHITE};
    font-size: 14px;
    text-align: center;
    font-family: ${theme.FONT_FAMILY.BOLD};
  `,
);

export const ErrorText = styled.Text`
  color: ${({ theme }) => theme.COLORS.RED_DARK};
  margin-top: 4px;
`;
