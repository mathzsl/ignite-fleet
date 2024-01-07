import { forwardRef } from "react";
import { TextInput, TextInputProps } from "react-native";

import { Container, Input, Label } from "./styles";

type TextAreaInputProps = TextInputProps & {
  label: string;
};

const TextAreaInput = forwardRef<TextInput, TextAreaInputProps>(
  ({ label, ...rest }, ref) => {
    return (
      <Container>
        <Label>{label}</Label>

        <Input ref={ref} multiline autoCapitalize="sentences" {...rest} />
      </Container>
    );
  }
);

export { TextAreaInput };
