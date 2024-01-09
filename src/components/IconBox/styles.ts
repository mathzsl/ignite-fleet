import styled, { css } from "styled-components/native";

export type SizeProps = "SM" | "LG";

type StyledProps = {
  size: SizeProps;
};

const variantSizeStyles = (size: SizeProps) => {
  return {
    SM: css`
      width: 32px;
      height: 32px;
      border-radius: 7px;
    `,
    LG: css`
      width: 46px;
      height: 46px;
      border-radius: 6px;
    `,
  }[size];
};

export const Container = styled.View<StyledProps>`
  background-color: ${({ theme }) => theme.COLORS.GRAY_600};

  ${({ size }) => variantSizeStyles(size)}

  align-items: center;
  justify-content: center;
`;
