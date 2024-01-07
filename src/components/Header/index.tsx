import { useTheme } from "styled-components/native";
import { BackButton, Container, Title } from "./styles";

import { ArrowLeft } from "phosphor-react-native";
import { useNavigation } from "@react-navigation/native";

import { useSafeAreaInsets } from "react-native-safe-area-context";

type HeaderProps = {
  title: string;
};

export function Header({ title }: HeaderProps) {
  const { COLORS } = useTheme();

  const navigation = useNavigation();
  const insets = useSafeAreaInsets();

  const paddingTop = insets.top + 24;

  return (
    <Container style={{ paddingTop }}>
      <BackButton activeOpacity={0.7} onPress={() => navigation.goBack()}>
        <ArrowLeft size={24} color={COLORS.BRAND_LIGHT} />
      </BackButton>

      <Title>{title}</Title>
    </Container>
  );
}
