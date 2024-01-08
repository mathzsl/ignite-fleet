import { TouchableOpacity } from "react-native";
import styled from "styled-components/native";

export const Container = styled(TouchableOpacity)`
  width: 56px;
  height: 56px;
  border-radius: 6px;
  padding: 16px 24px;
  background-color: ${({ theme }) => theme.COLORS.GRAY_600};

  align-items: center;
  justify-content: center;
`;
