import React, { memo, useMemo } from "react";
import { StyleSheet, View, Dimensions } from "react-native";
import Animated, {
  useAnimatedStyle,
  interpolate,
} from "react-native-reanimated";

import GlobalStyles from "../Styles/GlobalStyle";

const { width, height } = Dimensions.get("window");
const IMAGE_VIEW_WIDTH = width;
const outputRange = [0.9, 1.25, 0.9];

const CarouselImage = ({ item, scrollX, index }) => {
  const inputRange = useMemo(
    () => [
      (index - 1) * IMAGE_VIEW_WIDTH,
      index * IMAGE_VIEW_WIDTH,
      (index + 1) * IMAGE_VIEW_WIDTH,
    ],
    [index]
  );

  const imageStyle = useAnimatedStyle(() => ({
    transform: [{ scale: interpolate(scrollX.value, inputRange, outputRange) }],
  }));

  return (
    <View style={[{ width: IMAGE_VIEW_WIDTH, height: height / 3.5 }]}>
      <View
        style={[
          GlobalStyles.center,
          {
            height: height / 3.5,
          },
        ]}
      >
        <Animated.Image
          source={{ uri: item }}
          resizeMode="contain"
          style={[
            imageStyle,
            {
              width: IMAGE_VIEW_WIDTH - 40,
              height: height / 3.5,
            },
          ]}
        />
      </View>
    </View>
  );
};

export default memo(CarouselImage);

const styles = StyleSheet.create({});
