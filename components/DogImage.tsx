import {
  ActivityIndicator,
  Image,
  StyleSheet,
  View,
  Text,
  useColorScheme,
} from "react-native";
import { useJson } from "../hooks/useJson";
import { Colors } from "../constants/styles";

const RANDOM_DOG_API = "https://dog.ceo/api/breeds/image/random";

export const DogImage = () => {
  const colorScheme = useColorScheme();
  const { data, error, loading } = useJson<{ message: string }>(RANDOM_DOG_API);

  const themeTextStyle =
    colorScheme === "light" ? styles.lightThemeText : styles.darkThemeText;

  if (loading) return <ActivityIndicator size={"large"} />;

  if (error) return <Text style={themeTextStyle}>An error occurred</Text>;

  return <Image style={styles.image} source={{ uri: data?.message }} />;
};

const styles = StyleSheet.create({
  image: {
    height: 300,
    width: "100%",
    borderRadius: 20,
  },
  lightThemeText: {
    color: Colors.light.text,
  },
  darkThemeText: {
    color: Colors.dark.text,
  },
});
