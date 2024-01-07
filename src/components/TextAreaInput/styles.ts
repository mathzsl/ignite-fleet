import styled from "styled-components/native";

export const Container = styled.View`
  width: 100%;
  padding: 16px 16px 32px;
  border-radius: 6px;
  background-color: ${({ theme }) => theme.COLORS.GRAY_700};

  gap: 16px;
`;

export const Label = styled.Text`
  color: ${({ theme }) => theme.COLORS.GRAY_300};
  font-size: ${({ theme }) => theme.FONT_SIZE.SM}px;
  font-family: ${({ theme }) => theme.FONT_FAMILY.REGULAR};
`;

export const Input = styled.TextInput.attrs(({ theme }) => ({
  placeholderTextColor: theme.COLORS.GRAY_400,
}))`
  vertical-align: top;
  color: ${({ theme }) => theme.COLORS.GRAY_100};
  font-size: ${({ theme }) => theme.FONT_SIZE.MD}px;
  font-family: ${({ theme }) => theme.FONT_FAMILY.REGULAR};
`;
