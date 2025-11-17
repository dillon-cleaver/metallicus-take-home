import { Pressable, Animated, StyleSheet, Text, ViewStyle } from "react-native";
import { usePressAnimation } from "../hooks/usePressAnimation";

interface AnimatedButtonProps {
  onPress: () => void;
  title: string;
  style?: ViewStyle;
  accessibilityLabel?: string;
  accessibilityHint?: string;
  disabled?: boolean;
}

const AnimatedPressable = Animated.createAnimatedComponent(Pressable);

export const AnimatedButton = ({
  onPress,
  title,
  style,
  accessibilityLabel,
  accessibilityHint,
  disabled = false,
}: AnimatedButtonProps) => {
  const animation = usePressAnimation();

  return (
    <AnimatedPressable
      onPress={onPress}
      onPressIn={animation.animatePressIn}
      onPressOut={animation.animatePressOut}
      accessibilityRole="button"
      accessibilityLabel={accessibilityLabel || title}
      accessibilityHint={accessibilityHint}
      accessibilityState={{ disabled }}
      disabled={disabled}
      hitSlop={8}
      style={[
        styles.button,
        disabled && styles.buttonDisabled,
        style,
        { transform: [{ scale: animation.scale }] },
      ]}
    >
      <Text style={[styles.buttonText, disabled && styles.buttonTextDisabled]}>
        {title}
      </Text>
    </AnimatedPressable>
  );
};

const styles = StyleSheet.create({
  button: {
    backgroundColor: "#007AFF",
    paddingVertical: 12,
    paddingHorizontal: 24,
    borderRadius: 8,
    marginVertical: 6,
  },
  buttonDisabled: {
    backgroundColor: "#B0C4DE",
    opacity: 0.6,
  },
  buttonText: {
    color: "#FFFFFF",
    fontSize: 16,
    fontWeight: "600",
    textAlign: "center",
    fontFamily: "Fraunces_700Bold",
    lineHeight: 22,
  },
  buttonTextDisabled: {
    color: "#E0E0E0",
  },
});
