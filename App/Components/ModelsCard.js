import React, { memo } from "react";
import { StyleSheet, Text, View, Dimensions } from "react-native";
import Animated, {
  useAnimatedStyle,
  interpolate,
} from "react-native-reanimated";

const ITEM_SPACING = 15;
const { width } = Dimensions.get("window");
const ITEM_WIDTH = width * 0.7;

const ModelsCard = ({ item, index, scrollX }) => {
  const animatedViewStyle = useAnimatedStyle(() => ({
    transform: [
      {
        translateY: interpolate(
          scrollX.value,
          [
            (index - 2) * ITEM_WIDTH,
            (index - 1) * ITEM_WIDTH,
            index * ITEM_WIDTH,
          ],
          [0, -50, 0]
        ),
      },
    ],
  }));

  const animatedScale = useAnimatedStyle(() => ({
    transform: [
      {
        scale: interpolate(
          scrollX.value,
          [
            (index - 2) * ITEM_WIDTH,
            (index - 1) * ITEM_WIDTH,
            index * ITEM_WIDTH,
          ],
          [1, 1.5, 1]
        ),
      },
    ],
  }));

  const maskedScale = useAnimatedStyle(() => ({
    transform: [
      {
        scale: interpolate(
          scrollX.value,
          [
            (index - 2) * ITEM_WIDTH,
            (index - 1) * ITEM_WIDTH,
            index * ITEM_WIDTH,
          ],
          [1, 1.15, 1]
        ),
      },
    ],
  }));

  return (
    <View style={styles.container}>
      <Animated.View style={[styles.animatedView, animatedViewStyle]}>
        <Animated.View style={[styles.maskedView, maskedScale]} />

        <Animated.Image
          source={{ uri: item.images[0] }}
          style={[styles.image, animatedScale]}
          resizeMode="contain"
        />
        <Text style={styles.name}>{item.name}</Text>
        <Animated.Text>{item.description}</Animated.Text>
      </Animated.View>
    </View>
  );
};

export default memo(ModelsCard);

const styles = StyleSheet.create({
  container: {
    width: ITEM_WIDTH,
    position: "relative",
  },
  animatedView: {
    marginHorizontal: ITEM_SPACING,
    padding: ITEM_SPACING,
    backgroundColor: "white",
    borderRadius: 15,
    shadowColor: "#000",
    shadowOffset: {
      width: 0,
      height: 4,
    },
    shadowOpacity: 0.32,
    shadowRadius: 5.46,
    elevation: 9,
  },
  name: {
    fontSize: 16,
    fontWeight: "700",
  },
  image: {
    width: "100%",
    height: 175,
  },
  maskedView: {
    backgroundColor: "white",
    width: ITEM_WIDTH + ITEM_SPACING,
    height: 170,
    position: "absolute",
    top: -5,
    left: -ITEM_SPACING,
    borderBottomLeftRadius: ITEM_WIDTH,
    borderBottomRightRadius: ITEM_WIDTH / 2,
    zIndex: -10,
  },
});
