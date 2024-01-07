import { Container, IconBox, Message, TextHighlight } from "./styles";

import { TouchableOpacityProps } from "react-native";

import { useTheme } from "styled-components/native";

import { Key, Car } from "phosphor-react-native";

type CarStatusProps = TouchableOpacityProps & {
  licensePlate?: string | null;
};

export function CarStatus({ licensePlate = null, ...rest }: CarStatusProps) {
  const Icon = !licensePlate ? Key : Car;

  const message = !licensePlate
    ? "Nenhum veículo em uso. "
    : `Veículo ${licensePlate} em uso. `;

  const status = !licensePlate ? "saida" : "chegada";

  const { COLORS } = useTheme();

  return (
    <Container activeOpacity={0.7} {...rest}>
      <IconBox>
        <Icon size={52} color={COLORS.BRAND_LIGHT} />
      </IconBox>

      <Message>
        {message}

        <TextHighlight>Clique aqui para registrar a {status}.</TextHighlight>
      </Message>
    </Container>
  );
}
