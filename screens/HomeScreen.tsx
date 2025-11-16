import { StatusBar } from "expo-status-bar";
import {
  View,
  StyleSheet,
  Text,
  Switch,
  useColorScheme,
  Appearance,
} from "react-native";
import { useState } from "react";
import { Colors } from "../constants/styles";

export default function HomeScreen() {
  const colorScheme = useColorScheme();
  const [isDarkMode, setIsDarkMode] = useState(colorScheme === "dark");

  const toggleTheme = (value: boolean) => {
    setIsDarkMode(value);
    // Set the color scheme manually
    Appearance.setColorScheme(value ? "dark" : "light");
  };

  const themeTextStyle =
    colorScheme === "light" ? styles.lightThemeText : styles.darkThemeText;
  const themeContainerStyle =
    colorScheme === "light" ? styles.lightContainer : styles.darkContainer;

  return (
    <View style={[styles.container, themeContainerStyle]}>
      <Text style={[styles.text, themeTextStyle]}>
        Welcome to the Home Screen!
      </Text>
      <View style={styles.themeToggleContainer}>
        <Text style={[styles.themeToggleText, themeTextStyle]}>Light</Text>
        <Switch
          value={isDarkMode}
          onValueChange={toggleTheme}
          trackColor={{ false: "#767577", true: "#81b0ff" }}
          thumbColor={isDarkMode ? "#f4f3f4" : "#f4f3f4"}
        />
        <Text style={[styles.themeToggleText, themeTextStyle]}>Dark</Text>
      </View>
      <StatusBar style={colorScheme === "dark" ? "light" : "dark"} />
    </View>
  );
}

const styles = StyleSheet.create({
  container: {
    flex: 1,
    alignItems: "center",
    justifyContent: "center",
  },
  text: {
    fontSize: 20,
    marginBottom: 20,
  },
  themeToggleContainer: {
    flexDirection: "row",
    alignItems: "center",
    marginTop: 20,
  },
  themeToggleText: {
    fontSize: 16,
    marginHorizontal: 10,
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
