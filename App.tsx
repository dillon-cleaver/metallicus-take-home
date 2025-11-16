import { createStaticNavigation } from "@react-navigation/native";
import { createNativeStackNavigator } from "@react-navigation/native-stack";
import HomeScreen from "./screens/HomeScreen";
import DogScreen from "./screens/DogScreen";

const RootStack = createNativeStackNavigator({
  screens: {
    Home: HomeScreen,
    // TODO - Double check this implementation
    Dog: DogScreen,
  },
});

const Navigation = createStaticNavigation(RootStack);

export default function App() {
  return <Navigation />;
}
