import { AntDesign } from '@expo/vector-icons';
import styled, { css } from 'styled-components/native';

interface ContainerProps {
  color: string;
}

export const Container = styled.SafeAreaView<ContainerProps>`
  background-color: ${({ color }) => color};
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

export const MealWrapper = styled.View``;

export const MealTitle = styled.Text(
  ({ theme }) => css`
    font-family: ${theme.FONT_FAMILY.BOLD};
    color: ${theme.COLORS.GRAY_100};
    font-size: 20px;
    margin-bottom: 8px;
  `,
);

export const MealSubitle = styled.Text(
  ({ theme }) => css`
    color: ${theme.COLORS.GRAY_200};
    font-size: 16px;
    margin-bottom: 24px;
  `,
);

export const DateTitle = styled.Text(
  ({ theme }) => css`
    font-family: ${theme.FONT_FAMILY.BOLD};
    color: ${theme.COLORS.GRAY_100};
    font-size: 14px;
    margin-bottom: 8px;
  `,
);

export const DateValue = styled.Text(
  ({ theme }) => css`
    color: ${theme.COLORS.GRAY_200};
    font-size: 16px;
    margin-bottom: 24px;
  `,
);

export const DietBadge = styled.View(
  ({ theme }) => css`
    padding: 8px 16px;
    border-radius: 50%;
    background-color: ${theme.COLORS.GRAY_600};
    flex-direction: row;
    gap: 5px;
    align-items: center;
    justify-content: center;
    align-self: flex-start;
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

export const DietText = styled.Text(
  ({ theme }) => css`
    color: ${theme.COLORS.GRAY_100};
    font-size: 14px;
  `,
);

export const ButtonWrapper = styled.View`
  gap: 8px;
`;

export const EditButton = styled.TouchableOpacity`
  flex-direction: row;
  gap: 12px;
  align-items: center;
  justify-content: center;
  background-color: ${({ theme }) => theme.COLORS.GRAY_200};
  border-radius: 6px;
  padding: 16px;
`;

export const EditIcon = styled(AntDesign)`
  color: ${({ theme }) => theme.COLORS.WHITE};
`;

export const EditText = styled.Text(
  ({ theme }) => css`
    color: ${theme.COLORS.WHITE};
    font-family: ${theme.FONT_FAMILY.BOLD};
    font-size: 14px;
  `,
);

export const DeleteButton = styled.TouchableOpacity`
  flex-direction: row;
  gap: 12px;
  align-items: center;
  justify-content: center;
  border-color: ${({ theme }) => theme.COLORS.GRAY_100};
  border-width: 1px;
  border-radius: 6px;
  padding: 16px;
`;

export const DeleteIcon = styled(AntDesign)`
  color: ${({ theme }) => theme.COLORS.GRAY_100};
`;

export const DeleteText = styled.Text(
  ({ theme }) => css`
    color: ${theme.COLORS.GRAY_100};
    font-family: ${theme.FONT_FAMILY.BOLD};
    font-size: 14px;
  `,
);
