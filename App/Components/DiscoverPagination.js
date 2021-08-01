import React, { memo, useEffect } from "react";
import { StyleSheet, Text, View } from "react-native";
import Animated, {
  useSharedValue,
  useAnimatedStyle,
  withTiming,
} from "react-native-reanimated";

import { width } from "../Styles/GlobalStyle";
import colors from "../Styles/Colors";

const PROGRESS_WIDTH = width / 3.2;

const DiscoverPagination = ({ totalSize, currentIndex }) => {
  const animatedWidth = useSharedValue(
    (PROGRESS_WIDTH * currentIndex) / totalSize
  );

  useEffect(() => {
    animatedWidth.value = withTiming(
      (PROGRESS_WIDTH * currentIndex) / totalSize,
      {
        duration: 500,
      }
    );
  }, [totalSize, currentIndex, animatedWidth]);

  const progressStyle = useAnimatedStyle(() => ({
    width: animatedWidth.value,
  }));

  return (
    <View style={styles.container}>
      <View style={styles.progressView}>
        <Animated.View style={[styles.progress, progressStyle]} />
      </View>
      <Text style={styles.pagination}>
        {currentIndex}/{totalSize}
      </Text>
    </View>
  );
};

export default memo(DiscoverPagination);

const styles = StyleSheet.create({
  container: {
    flexDirection: "row",
    justifyContent: "flex-start",
    alignItems: "center",
    paddingRight: 15,
  },
  progressView: {
    width: PROGRESS_WIDTH,
    height: 8,
    borderRadius: 4,
    position: "relative",
    borderWidth: StyleSheet.hairlineWidth,
    borderColor: "gray",
  },
  progress: {
    height: 8,
    borderRadius: 4,
    position: "absolute",
    left: 0,
    backgroundColor: colors.intense_red,
  },
  pagination: {
    fontSize: 13,
    fontWeight: "bold",
    paddingLeft: 5,
  },
});
