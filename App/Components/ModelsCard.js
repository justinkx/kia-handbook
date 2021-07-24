import React, { memo } from "react";
import {
  StyleSheet,
  Text,
  View,
  Image,
  Animated,
  Dimensions,
} from "react-native";

const ITEM_SPACING = 10;
const { width } = Dimensions.get("window");
const ITEM_WIDTH = width * 0.7;

const ModelsCard = ({ item, index, scrollX }) => {
  const translateY = scrollX.interpolate({
    inputRange: [
      (index - 2) * ITEM_WIDTH,
      (index - 1) * ITEM_WIDTH,
      index * ITEM_WIDTH,
    ],
    outputRange: [0, -50, 0],
  });

  const scale = scrollX.interpolate({
    inputRange: [
      (index - 2) * ITEM_WIDTH,
      (index - 1) * ITEM_WIDTH,
      index * ITEM_WIDTH,
    ],
    outputRange: [1, 1.5, 1],
  });

  return (
    <View
      style={{
        width: ITEM_WIDTH,
      }}
    >
      <Animated.View
        style={{
          marginHorizontal: ITEM_SPACING,
          padding: ITEM_SPACING * 2,
          transform: [
            {
              translateY,
            },
          ],
        }}
      >
        <Animated.Image
          source={{ uri: item.images[0] }}
          style={{ width: "100%", height: 150, transform: [{ scale }] }}
          resizeMode="center"
        />
        <Text>{item.name}</Text>
        <Text>{item.description}</Text>
      </Animated.View>
    </View>
  );
};

export default memo(ModelsCard);

const styles = StyleSheet.create({});
