import {
  Picture,
  Container,
  Message,
  Name,
  SignOutButton,
  VStack,
} from "./styles";

import { Power } from "phosphor-react-native";

import { useTheme } from "styled-components/native";

import { useUser } from "@realm/react";

export function HomeHeader() {
  const user = useUser();

  const { COLORS } = useTheme();

  return (
    <Container>
      <Picture
        source={{
          uri: user.profile.pictureUrl,
        }}
        placeholder="L184i9offQof00ayfQay~qj[fQj["
      />

      <VStack>
        <Message>Olá,</Message>
        <Name numberOfLines={1}>{user.profile.name}</Name>
      </VStack>

      <SignOutButton activeOpacity={0.7}>
        <Power size={32} color={COLORS.GRAY_400} />
      </SignOutButton>
    </Container>
  );
}
