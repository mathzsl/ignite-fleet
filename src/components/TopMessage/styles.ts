import { Dimensions } from "react-native";
import styled from "styled-components/native";

const dimensions = Dimensions.get("window");

export const Container = styled.View`
  width: ${dimensions.width}px;
  padding-bottom: 4px;
  z-index: 1;
  position: absolute;
  background-color: ${({ theme }) => theme.COLORS.GRAY_500};

  flex-direction: row;
  align-items: center;
  justify-content: center;
  gap: 4px;
`;

export const Message = styled.Text`
  font-family: ${({ theme }) => theme.FONT_FAMILY.REGULAR};
  font-size: ${({ theme }) => theme.FONT_SIZE.SM}px;
  color: ${({ theme }) => theme.COLORS.GRAY_100};
`;
