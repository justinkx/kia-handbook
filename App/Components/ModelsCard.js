import React, { memo, useCallback } from "react";
import { StyleSheet, TouchableOpacity, View, Dimensions } from "react-native";
import Animated, {
  useAnimatedStyle,
  interpolate,
  interpolateColor,
} from "react-native-reanimated";

import NAV_CONSTANTS from "../Navigation/NavigationConstants";

const ITEM_SPACING = 15;
const { width } = Dimensions.get("window");
const ITEM_WIDTH = width * 0.7;

const ModelsCard = ({ item, index, scrollX, navigation }) => {
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

  const goToDetails = useCallback(() => {
    navigation.push(NAV_CONSTANTS.DETAILS_SCREEN, { details: item });
  }, [navigation, item]);

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
          [1, 1.7, 1]
        ),
      },
      {
        translateX: interpolate(
          scrollX.value,
          [
            (index - 2) * ITEM_WIDTH,
            (index - 1) * ITEM_WIDTH,
            index * ITEM_WIDTH,
          ],
          [-20, -10, 0]
        ),
      },
    ],
  }));

  const animatedTitleStyle = useAnimatedStyle(() => ({
    color: interpolateColor(
      scrollX.value,
      [(index - 2) * ITEM_WIDTH, (index - 1) * ITEM_WIDTH, index * ITEM_WIDTH],
      ["#6b0f1a", "#923cb5", "#861657"]
    ),
  }));

  return (
    <View style={styles.container}>
      <TouchableOpacity activeOpacity={0.95} onPress={goToDetails}>
        <Animated.View style={[styles.animatedView, animatedViewStyle]}>
          <View style={[styles.maskedLeftView]} />
          <View style={[styles.maskedRightView]} />
          <Animated.Image
            source={{ uri: item.images[0] }}
            style={[styles.image, animatedScale]}
            resizeMode="contain"
          />
          <Animated.Text style={[styles.name, animatedTitleStyle]}>
            {item.name}
          </Animated.Text>
          <Animated.Text>{item.description}</Animated.Text>
        </Animated.View>
      </TouchableOpacity>
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
    zIndex: 10,
  },
  name: {
    fontSize: 16,
    fontWeight: "700",
    paddingBottom: 4,
  },
  image: {
    width: "100%",
    height: 175,
    zIndex: 10,
  },
  maskedLeftView: {
    backgroundColor: "white",
    width: ITEM_WIDTH / 2 + ITEM_SPACING,
    height: 190,
    position: "absolute",
    top: -5,
    left: -ITEM_SPACING,
    zIndex: 1,
  },
  maskedRightView: {
    backgroundColor: "white",
    width: ITEM_WIDTH / 2 + ITEM_SPACING,
    height: 160,
    position: "absolute",
    top: -5,
    right: -ITEM_SPACING,
    zIndex: 1,
  },
});
