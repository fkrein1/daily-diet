import styled, { css } from 'styled-components/native';

export const Container = styled.View`
  flex: 1;
  align-items: center;
  justify-content: center;
`;

export const Wrapper = styled.View`
  padding: 32px;
  align-items: center;
`;

export const TitleOnDiet = styled.Text(
  ({ theme }) => css`
    font-family: ${theme.FONT_FAMILY.BOLD};
    color: ${theme.COLORS.GREEN_DARK};
    font-size: 24px;
    margin-bottom: 8px;
    text-align: center;
  `,
);

export const TitleOffDiet = styled(TitleOnDiet)`
  color: ${({ theme }) => theme.COLORS.RED_DARK};
`;

export const Subtitle = styled.Text`
  color: ${({ theme }) => theme.COLORS.GRAY_100};
  margin-bottom: 40px;
  text-align: center;
`;

export const Bold = styled(Subtitle)`
  font-family: ${({ theme }) => theme.FONT_FAMILY.BOLD};
  margin-bottom: 0px;
`;

export const Button = styled.TouchableOpacity`
  border-radius: 6px;
  background-color: ${({ theme }) => theme.COLORS.GRAY_200};
  align-items: center;
  justify-content: center;
  padding: 16px 24px;
  margin-top: 32px;
`;

export const ButtonText = styled.Text(
  ({ theme }) => css`
    font-family: ${theme.FONT_FAMILY.BOLD};
    color: ${theme.COLORS.WHITE};
    font-size: 14px;
    text-align: center;
  `,
);
