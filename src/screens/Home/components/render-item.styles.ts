import styled, { css } from 'styled-components/native';

export const Container = styled.TouchableOpacity`
  padding: 16px 16px 16px 12px;
  border-color: ${({ theme }) => theme.COLORS.GRAY_500};
  border-width: 1px;
  border-radius: 6px;
  flex-direction: row;
  margin-bottom: 8px;
  align-items: center;
`;

export const Time = styled.Text(
  ({ theme }) => css`
    color: ${theme.COLORS.GRAY_100};
    font-size: 12px;
    font-family: ${theme.FONT_FAMILY.BOLD};
  `,
);

export const Separator = styled.View`
  background-color: ${({ theme }) => theme.COLORS.GRAY_400};
  height: 14px;
  width: 1px;
  margin: 0px 12px;
`;

export const Meal = styled.Text`
  font-size: 16px;
  color: ${({ theme }) => theme.COLORS.GRAY_200};
  flex: 1;
`;

export const GreenIcon = styled.View`
  width: 14px;
  height: 14px;
  border-radius: 50%;
  background-color: ${({ theme }) => theme.COLORS.GREEN_MID};
  margin-left: 12px;
`;

export const RedIcon = styled(GreenIcon)`
  background-color: ${({ theme }) => theme.COLORS.RED_MID};
`;
