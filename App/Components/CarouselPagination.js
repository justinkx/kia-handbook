import React, { memo } from "react";
import { StyleSheet, View } from "react-native";
import Animated, {
  useAnimatedStyle,
  interpolate,
} from "react-native-reanimated";

import GlobalStyles from "../Styles/GlobalStyle";

const IMAGE_INDICATOR_SIZE = 10;

const CarouselPagination = ({ images, imageScrollX, IMAGE_VIEW_WIDTH }) => {
  return (
    <View style={GlobalStyles.row}>
      {images.map((_, i) => {
        const indicatorStyle = useAnimatedStyle(() => ({
          transform: [
            {
              scale: interpolate(
                imageScrollX.value,
                [
                  (i - 2) * IMAGE_VIEW_WIDTH,
                  (i - 1) * IMAGE_VIEW_WIDTH,
                  i * IMAGE_VIEW_WIDTH,
                  (i + 1) * IMAGE_VIEW_WIDTH,
                  (i + 2) * IMAGE_VIEW_WIDTH,
                ],
                [1, 1, 1.4, 1, 1]
              ),
            },
          ],
        }));

        return (
          <Animated.View
            key={i}
            style={[styles.imageIndicator, indicatorStyle]}
          ></Animated.View>
        );
      })}
    </View>
  );
};

export default memo(CarouselPagination);

const styles = StyleSheet.create({
  indicatorContainer: {
    height: 50,
  },
  imageIndicator: {
    width: IMAGE_INDICATOR_SIZE,
    height: IMAGE_INDICATOR_SIZE,
    borderRadius: IMAGE_INDICATOR_SIZE / 2,
    backgroundColor: "#333",
    margin: 5,
  },
});
