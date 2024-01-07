import { TextInput, TextInputProps } from "react-native";
import { Container, Input, Label } from "./styles";
import { forwardRef } from "react";

type LicensePlateInputProps = TextInputProps & {
  label: string;
};

const LicensePlateInput = forwardRef<TextInput, LicensePlateInputProps>(
  ({ label, ...rest }, ref) => {
    return (
      <Container>
        <Label>{label}</Label>
        <Input ref={ref} maxLength={7} autoCapitalize="characters" {...rest} />
      </Container>
    );
  }
);

export { LicensePlateInput };
