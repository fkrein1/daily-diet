import { AntDesign } from '@expo/vector-icons';
import styled, { css } from 'styled-components/native';

export const Container = styled.SafeAreaView`
  background-color: ${({ theme }) => theme.COLORS.GRAY_700};
  flex: 1;
`;

export const Wrapper = styled.View`
  padding: 0px 24px;
`;

export const Header = styled.View`
  flex-direction: row;
  justify-content: space-between;
  align-items: center;
  margin-bottom: 33px;
`;

export const Avatar = styled.Image`
  width: 40px;
  height: 40px;
  border-radius: 22px;
  border-width: 2px;
  border-color: ${({ theme }) => theme.COLORS.GRAY_200};
`;

export const Meals = styled.View``;

export const MealsTitle = styled.Text`
  font-size: 16px;
  color: ${({ theme }) => theme.COLORS.GRAY_100};
  margin-bottom: 8px;
`;

export const MealsButton = styled.TouchableOpacity.attrs({
  activeOpacity: 0.8,
})`
  background-color: ${({ theme }) => theme.COLORS.GRAY_200};
  padding: 16px 24px;
  border-radius: 6px;
  flex-direction: row;
  align-items: center;
  justify-content: center;
`;

export const MealsText = styled.Text(
  ({ theme }) => css`
    color: ${theme.COLORS.WHITE};
    font-family: ${theme.FONT_FAMILY.BOLD};
    font-size: 14px;
    margin-left: 4px;
  `,
);

export const PlusIcon = styled(AntDesign)`
  color: ${({ theme }) => theme.COLORS.WHITE};
`;

export const SectionHeader = styled.Text(
  ({ theme }) => css`
    color: ${theme.COLORS.GRAY_100};
    font-family: ${theme.FONT_FAMILY.BOLD};
    font-size: 18px;
    margin-bottom: 8px;
    margin-top: 32px;
  `,
);

export const ListSeparator = styled.View`
  height: 32px;
`;
