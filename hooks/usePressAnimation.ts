import { useRef } from "react";
import { Animated } from "react-native";

export const usePressAnimation = () => {
  const scale = useRef(new Animated.Value(1)).current;

  const animatePressIn = () => {
    Animated.spring(scale, {
      toValue: 0.95,
      useNativeDriver: true,
    }).start();
  };

  const animatePressOut = () => {
    Animated.spring(scale, {
      toValue: 1,
      friction: 3,
      tension: 40,
      useNativeDriver: true,
    }).start();
  };

  return {
    scale,
    animatePressIn,
    animatePressOut,
  };
};
