import { useTheme } from "styled-components/native";
import { Container, SizeProps } from "./styles";

import { IconProps } from "phosphor-react-native";

export type IconBoxProps = (props: IconProps) => JSX.Element;

type Props = {
  variant?: SizeProps;
  icon: IconBoxProps;
};

export function IconBox({ variant = "LG", icon: Icon }: Props) {
  const { COLORS } = useTheme();

  return (
    <Container size={variant}>
      <Icon size={variant === "LG" ? 24 : 16} color={COLORS.BRAND_LIGHT} />
    </Container>
  );
}
