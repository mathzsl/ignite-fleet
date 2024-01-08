import { useTheme } from "styled-components/native";
import { Container, Message } from "./styles";

import { IconProps } from "phosphor-react-native";
import { useSafeAreaInsets } from "react-native-safe-area-context";

 type WifiIconProps = (props: IconProps) => JSX.Element;

type TopMessageProps = {
  icon?: WifiIconProps;
  title: string;
};

export function TopMessage({ title, icon: Icon }: TopMessageProps) {
  const { COLORS } = useTheme();

  const insets = useSafeAreaInsets()
  const paddingTop = insets.top + 4

  return (
    <Container style={{paddingTop}}>
      {Icon && <Icon size={18} color={COLORS.WHITE} />}

      <Message>{title}</Message>
    </Container>
  );
}
