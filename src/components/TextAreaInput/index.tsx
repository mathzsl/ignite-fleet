import { TextInputProps } from "react-native";
import { Container, Input, Label } from "./styles";

type TextAreaInputProps = TextInputProps & {
  label: string;
};

export function TextAreaInput({ label, ...rest }: TextAreaInputProps) {
  return (
    <Container>
      <Label>{label}</Label>

      <Input multiline autoCapitalize="sentences" {...rest} />
    </Container>
  );
}
