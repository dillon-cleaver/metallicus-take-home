import { createStaticNavigation } from "@react-navigation/native";
import { createNativeStackNavigator } from "@react-navigation/native-stack";
import HomeScreen from "./screens/HomeScreen";
import DogScreen from "./screens/DogScreen";
import {
  useFonts,
  Fraunces_400Regular,
  Fraunces_700Bold,
  Fraunces_400Regular_Italic,
} from "@expo-google-fonts/fraunces";
import * as SplashScreen from "expo-splash-screen";
import { useEffect } from "react";

SplashScreen.preventAutoHideAsync();

const RootStack = createNativeStackNavigator({
  screens: {
    Home: HomeScreen,
    Dog: DogScreen,
  },
});

const Navigation = createStaticNavigation(RootStack);

export type RootStackParamList = {
  Home: undefined;
  Dog: undefined;
};

export default function App() {
  const [loaded, error] = useFonts({
    Fraunces_400Regular,
    Fraunces_700Bold,
    Fraunces_400Regular_Italic,
  });

  useEffect(() => {
    if (loaded || error) {
      SplashScreen.hideAsync();
    }
  }, [loaded, error]);

  if (!loaded && !error) {
    return null;
  }

  return <Navigation />;
}
