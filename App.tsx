import { StatusBar } from "react-native";

import { ThemeProvider } from "styled-components/native";
import theme from "./src/theme";

import { RealmProvider } from "./src/libs/realm";
import { AppProvider, UserProvider } from "@realm/react";

import {
  useFonts,
  Roboto_400Regular,
  Roboto_700Bold,
} from "@expo-google-fonts/roboto";

import { Routes } from "./src/routes";

import { SignIn } from "./src/screens/SignIn";
import { Loading } from "./src/components/Loading";

import { SafeAreaProvider } from "react-native-safe-area-context";

import { REALM_APP_ID } from "@env";

export default function App() {
  let [fontsLoaded] = useFonts({
    Roboto_400Regular,
    Roboto_700Bold,
  });

  if (!fontsLoaded) {
    return <Loading />;
  }

  return (
    <AppProvider id={REALM_APP_ID}>
      <ThemeProvider theme={theme}>
        <SafeAreaProvider style={{flex: 1, backgroundColor: theme.COLORS.GRAY_800}}>
          <StatusBar
            barStyle="light-content"
            backgroundColor="transparent"
            translucent
          />

          <UserProvider fallback={SignIn}>
            <RealmProvider>
              <Routes />
            </RealmProvider>
          </UserProvider>
        </SafeAreaProvider>
      </ThemeProvider>
    </AppProvider>
  );
}
