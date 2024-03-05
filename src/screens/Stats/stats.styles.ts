import { AntDesign } from '@expo/vector-icons';
import styled, { css } from 'styled-components/native';

interface ContainerProps {
  onDiet: boolean;
}

export const Container = styled.SafeAreaView<ContainerProps>`
  background-color: ${({ onDiet, theme }) =>
    onDiet ? theme.COLORS.GREEN_LIGHT : theme.COLORS.RED_LIGHT};
  flex: 1;
`;

export const Header = styled.View`
  flex-direction: row;
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
  margin-top: 30px;
  margin-bottom: 34px;
`;

export const HeaderTitle = styled.Text`
  font-size: 32px;
  font-family: ${({ theme }) => theme.FONT_FAMILY.BOLD};
  color: ${({ theme }) => theme.COLORS.GRAY_100};
  text-align: center;
`;

export const HeaderText = styled.Text(
  ({ theme }) => css`
    color: ${theme.COLORS.GRAY_200};
    font-size: 14px;
    text-align: center;
  `,
);

export const Content = styled.View`
  background-color: ${({ theme }) => theme.COLORS.GRAY_700};
  height: 96%;
  border-top-right-radius: 20px;
  border-top-left-radius: 20px;
  padding: 33px 24px;
`;

export const StatsText = styled.Text(
  ({ theme }) => css`
    color: ${theme.COLORS.GRAY_100};
    font-size: 14px;
    text-align: center;
    font-family: ${theme.FONT_FAMILY.BOLD};
    margin-bottom: 23px;
  `,
);

export const Card = styled.View(
  ({ theme }) => css`
    background-color: ${theme.COLORS.GRAY_600};
    padding: 16px;
    border-radius: 8px;
    margin-bottom: 12px;
  `,
);

export const CardGreen = styled(Card)`
  background-color: ${({ theme }) => theme.COLORS.GREEN_LIGHT};
`;

export const CardRed = styled(Card)`
  background-color: ${({ theme }) => theme.COLORS.RED_LIGHT};
`;

export const CardTitle = styled.Text(
  ({ theme }) => css`
    color: ${theme.COLORS.GRAY_100};
    font-size: 24px;
    text-align: center;
    font-family: ${theme.FONT_FAMILY.BOLD};
    margin-bottom: 8px;
  `,
);

export const CardSubtitle = styled.Text(
  ({ theme }) => css`
    color: ${theme.COLORS.GRAY_200};
    font-size: 14px;
    text-align: center;
  `,
);

export const LastCardWrapper = styled.View`
  flex-direction: row;
  gap: 12px;
`;
