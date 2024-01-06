import { TouchableOpacity } from "react-native";
import styled from "styled-components/native";

export const Container = styled(TouchableOpacity)`
  flex: 1;
  min-height: 56px;
  max-height: 56px;
  padding: 16px 24px;
  border-radius: 6px;
  background-color: ${({ theme }) => theme.COLORS.BRAND_MID};

  align-items: center;
  justify-content: center;
`;

export const Title = styled.Text`
  color: ${({ theme }) => theme.COLORS.WHITE};
  font-size: ${({ theme }) => theme.FONT_SIZE.MD}px;
  font-family: ${({ theme }) => theme.FONT_FAMILY.BOLD};
`;

export const Spinner = styled.ActivityIndicator.attrs(({ theme }) => ({
  color: theme.COLORS.WHITE,
}))``;
