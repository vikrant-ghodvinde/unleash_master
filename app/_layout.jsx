import { useFonts } from "expo-font";
import { SplashScreen, Stack } from "expo-router";
import { useEffect } from "react";
import { TamaguiProvider } from "tamagui";
import tamaguiConfig from "../tamagui.config";
import { ContextProvider } from "../lib/context/context";

export default function AppLayout() {
  const [loaded] = useFonts({
    SpaceMono: require("../assets/fonts/SpaceMono-Regular.ttf"),
  });

  useEffect(() => {
    if (loaded) {
      SplashScreen.hideAsync();
    }
  }, [loaded]);

  if (!loaded) {
    return null;
  }

  return (
    <ContextProvider>
      <TamaguiProvider config={tamaguiConfig}>
        <Stack
          initialRouteName="(tabs)"
          screenOptions={{ headerShown: false, animation: "fade" }}
        >
          <Stack.Screen name="(tabs)" />
        </Stack>
      </TamaguiProvider>
    </ContextProvider>
  );
}
