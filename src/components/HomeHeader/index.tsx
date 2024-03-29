import {
  Picture,
  Container,
  Message,
  Name,
  SignOutButton,
  VStack,
} from "./styles";

import { useSafeAreaInsets } from "react-native-safe-area-context";

import { Power } from "phosphor-react-native";

import { useTheme } from "styled-components/native";

import { useUser, useApp } from "@realm/react";

export function HomeHeader() {
  const user = useUser();
  const app = useApp();
  const insets = useSafeAreaInsets();

  const paddingTop = insets.top + 32;

  const { COLORS } = useTheme();

  function handleLogOut() {
    app.currentUser?.logOut();
  }

  return (
    <Container style={{ paddingTop }}>
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

      <SignOutButton activeOpacity={0.7} onPress={handleLogOut}>
        <Power size={32} color={COLORS.GRAY_400} />
      </SignOutButton>
    </Container>
  );
}
