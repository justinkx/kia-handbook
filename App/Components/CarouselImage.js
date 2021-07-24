import React, { memo, useMemo } from "react";
import { StyleSheet, View, Animated, Dimensions } from "react-native";

import GlobalStyles from "../Styles/GlobalStyle";

const { width, height } = Dimensions.get("window");
const IMAGE_VIEW_WIDTH = width;

const CarouselImage = ({ item, scrollX, index }) => {
  const inputRange = useMemo(
    () => [
      (index - 1) * IMAGE_VIEW_WIDTH,
      index * IMAGE_VIEW_WIDTH,
      (index + 1) * IMAGE_VIEW_WIDTH,
    ],
    [index]
  );

  const scale = scrollX.interpolate({
    inputRange,
    outputRange: [0.9, 1.25, 0.9],
  });

  return (
    <View style={[{ width: IMAGE_VIEW_WIDTH }]}>
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
          style={{
            width: IMAGE_VIEW_WIDTH - 40,
            height: height / 3.5,
            transform: [
              {
                scale,
              },
            ],
          }}
        />
      </View>
    </View>
  );
};

export default memo(CarouselImage);

const styles = StyleSheet.create({});
