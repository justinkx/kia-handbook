import React, { memo } from "react";
import { StyleSheet, Text, View, Animated, Dimensions } from "react-native";

const ITEM_SPACING = 15;
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
    <View style={styles.container}>
      <Animated.View
        style={[
          styles.animatedView,
          {
            transform: [
              {
                translateY,
              },
            ],
          },
        ]}
      >
        <Animated.View
          style={[styles.maskedView, { transform: [{ scale }] }]}
        />

        <Animated.Image
          source={{ uri: item.images[0] }}
          style={[styles.image, { transform: [{ scale }] }]}
          resizeMode="contain"
        />
        <Text style={styles.name}>{item.name}</Text>
        <Text>{item.description}</Text>
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
    zIndex: 100,
  },
  maskedView: {
    backgroundColor: "white",
    width: ITEM_WIDTH + ITEM_SPACING * 2,
    height: 150,
    zIndex: 1,
    position: "absolute",
    top: -ITEM_SPACING / 2,
    left: -ITEM_SPACING,
    borderBottomLeftRadius: ITEM_WIDTH,
    borderBottomRightRadius: ITEM_WIDTH / 2,
  },
});
