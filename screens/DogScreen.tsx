import { StatusBar } from "expo-status-bar";
import { View, StyleSheet, Text, useColorScheme } from "react-native";
import { Colors } from "../constants/styles";
import { DogImage } from "../components/DogImage";

export default function DogScreen() {
  const colorScheme = useColorScheme();

  const themeTextStyle =
    colorScheme === "light" ? styles.lightThemeText : styles.darkThemeText;
  const themeContainerStyle =
    colorScheme === "light" ? styles.lightContainer : styles.darkContainer;

  return (
    <View style={[styles.container, themeContainerStyle]}>
      <Text style={[styles.text, themeTextStyle]}>
        Welcome to the Dog Screen!
      </Text>
      <DogImage />
      <StatusBar style={colorScheme === "dark" ? "light" : "dark"} />
    </View>
  );
}

const styles = StyleSheet.create({
  container: {
    flex: 1,
    alignItems: "center",
    gap: 8,
    justifyContent: "center",
    paddingHorizontal: 16,
  },
  text: {
    fontSize: 20,
    fontFamily: 'Fraunces_400Regular',
    lineHeight: 28,
  },
  lightContainer: {
    backgroundColor: Colors.light.background,
  },
  darkContainer: {
    backgroundColor: Colors.dark.background,
  },
  lightThemeText: {
    color: Colors.light.text,
  },
  darkThemeText: {
    color: Colors.dark.text,
  },
});
