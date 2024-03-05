import { AntDesign } from '@expo/vector-icons';
import styled from 'styled-components/native';

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
