import styled from "styled-components/native";
import { Image } from "expo-image";

export const Container = styled.View`
  width: 100%;
  padding: 32px;
  background-color: ${({ theme }) => theme.COLORS.GRAY_700};

  flex-direction: row;
  align-items: center;
  gap: 12px;
`;

export const VStack = styled.View`
  flex: 1;
`;

export const Message = styled.Text`
  color: ${({ theme }) => theme.COLORS.GRAY_100};
  font-size: ${({ theme }) => theme.FONT_SIZE.MD}px;
  font-family: ${({ theme }) => theme.FONT_FAMILY.REGULAR};
`;

export const Name = styled.Text`
  color: ${({ theme }) => theme.COLORS.GRAY_100};
  font-size: ${({ theme }) => theme.FONT_SIZE.LG}px;
  font-family: ${({ theme }) => theme.FONT_FAMILY.BOLD};
`;

export const Picture = styled(Image)`
  width: 45px;
  height: 45px;
  border-radius: 7px;
`;

export const SignOutButton = styled.TouchableOpacity``;
