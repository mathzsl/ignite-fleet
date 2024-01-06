import { TouchableOpacityProps } from "react-native";
import { Container, Spinner, Title } from "./styles";

type ButtonProps = TouchableOpacityProps & {
  title: string;
  isLoading?: boolean;
};

export function Button({ title, isLoading = false, ...rest }: ButtonProps) {
  return (
    <Container
      activeOpacity={0.7}
      disabled={isLoading}
      style={{ opacity: isLoading ? 0.7 : 1 }}
      {...rest}
    >
      {isLoading ? <Spinner /> : <Title>{title}</Title>}
    </Container>
  );
}
