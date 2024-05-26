import { useFonts } from "expo-font";
import { SplashScreen, Stack } from "expo-router";
import { useEffect } from "react";
import { TamaguiProvider } from "tamagui";
import tamaguiConfig from "../tamagui.config";
import { ContextProvider } from "../lib/context/context";

export default function AppLayout() {
  const [loaded] = useFonts({
    abel: require("../assets/fonts/Abel/Abel-Regular.ttf"),
    arvo: require("../assets/fonts/Arvo/Arvo-Regular.ttf"),
    bitter: require("../assets/fonts/Bitter/Bitter-Regular.ttf"),
    glegoo: require("../assets/fonts/Glegoo/Glegoo-Regular.ttf"),
    lora: require("../assets/fonts/Lora/Lora-Regular.ttf"),
    oswald: require("../assets/fonts/Oswald/Oswald-Regular.ttf"),
    "playfair-display": require("../assets/fonts/PlayfairDisplay/PlayfairDisplay-Regular.ttf"),
    "proza-libre": require("../assets/fonts/ProzaLibre/ProzaLibre-Regular.ttf"),
    "pt-serif": require("../assets/fonts/PTSerif/PTSerif-Regular.ttf"),
    quicksand: require("../assets/fonts/Quicksand/Quicksand-Regular.ttf"),
    "roboto-condensed": require("../assets/fonts/RobotoCondensed/RobotoCondensed-Regular.ttf"),
    "roboto-flex": require("../assets/fonts/RobotoFlex/RobotoFlex-Regular.ttf"),
    "roboto-slab": require("../assets/fonts/RobotoSlab/RobotoSlab-Regular.ttf"),
    rokkitt: require("../assets/fonts/Rokkitt/Rokkitt-Regular.ttf"),
    "slabo-27px": require("../assets/fonts/Slabo27px/Slabo27px-Regular.ttf"),
    "work-sans": require("../assets/fonts/WorkSans/WorkSans-Regular.ttf"),

    // APPLICATION
    "poppins-light": require("../assets/fonts/Poppins/Poppins-Light.ttf"),
    "poppins-regular": require("../assets/fonts/Poppins/Poppins-Regular.ttf"),
    "poppins-medium": require("../assets/fonts/Poppins/Poppins-Medium.ttf"),
    "poppins-semibold": require("../assets/fonts/Poppins/Poppins-SemiBold.ttf"),
    "poppins-bold": require("../assets/fonts/Poppins/Poppins-Bold.ttf"),
    "poppins-extrabold": require("../assets/fonts/Poppins/Poppins-ExtraBold.ttf"),
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
