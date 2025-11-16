import { StatusBar } from "expo-status-bar";
import {
  View,
  StyleSheet,
  Text,
  Switch,
  useColorScheme,
  Appearance,
  Pressable,
  Animated,
} from "react-native";
import { useState } from "react";
import { Colors } from "../constants/styles";
import { usePressAnimation } from "../hooks/usePressAnimation";
import * as Haptics from "expo-haptics";
import { useNavigation } from "@react-navigation/native";
import type { NativeStackNavigationProp } from "@react-navigation/native-stack";
import type { RootStackParamList } from "../App";

export default function HomeScreen() {
  const colorScheme = useColorScheme();
  const [isDarkMode, setIsDarkMode] = useState(colorScheme === "dark");

  const helloMetalAnimation = usePressAnimation();
  const getDogAnimation = usePressAnimation();

  const navigation =
    useNavigation<NativeStackNavigationProp<RootStackParamList>>();

  const toggleTheme = (value: boolean) => {
    setIsDarkMode(value);
    // Set the color scheme manually
    Appearance.setColorScheme(value ? "dark" : "light");
  };

  const themeTextStyle =
    colorScheme === "light" ? styles.lightThemeText : styles.darkThemeText;
  const themeContainerStyle =
    colorScheme === "light" ? styles.lightContainer : styles.darkContainer;

  const handleHelloMetalPress = () => {
    alert("Hello Metal");
    Haptics.impactAsync(Haptics.ImpactFeedbackStyle.Medium);
  };

  const AnimatedPressable = Animated.createAnimatedComponent(Pressable);

  const handleDogScreenNav = () => {
    navigation.navigate("Dog");
  };

  // TODO: Investigate best practices for accessibility using <Pressable> versus <Button>

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
      <AnimatedPressable
        onPress={handleHelloMetalPress}
        onPressIn={helloMetalAnimation.animatePressIn}
        onPressOut={helloMetalAnimation.animatePressOut}
        style={[
          styles.button,
          { transform: [{ scale: helloMetalAnimation.scale }] },
        ]}
      >
        <Text style={styles.buttonText}>Hello Metal</Text>
      </AnimatedPressable>
      <AnimatedPressable
        onPress={handleDogScreenNav}
        onPressIn={getDogAnimation.animatePressIn}
        onPressOut={getDogAnimation.animatePressOut}
        style={[
          styles.button,
          { transform: [{ scale: getDogAnimation.scale }] },
        ]}
      >
        <Text style={styles.buttonText}>Get Dog</Text>
      </AnimatedPressable>
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
  button: {
    backgroundColor: "#007AFF",
    paddingVertical: 12,
    paddingHorizontal: 24,
    borderRadius: 8,
    marginVertical: 6,
  },
  buttonText: {
    color: "#FFFFFF",
    fontSize: 16,
    fontWeight: "600",
    textAlign: "center",
  },
});
