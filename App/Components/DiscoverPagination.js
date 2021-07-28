import React, { memo } from "react";
import { StyleSheet, Text, View } from "react-native";

const PROGRESS_WIDTH = 200;

const DiscoverPagination = ({ totalSize, currentIndex }) => {
  return (
    <View>
      <View style={styles.progressView}>
        <View style={styles.progress} />
      </View>
      <Text></Text>
    </View>
  );
};

export default memo(DiscoverPagination);

const styles = StyleSheet.create({
  container: {
    flexDirection: "row",
    justifyContent: "flex-start",
    alignItems: "center",
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
    width: PROGRESS_WIDTH / 2,
    height: 8,
    borderRadius: 4,
    position: "absolute",
    left: 0,
    backgroundColor: "red",
  },
});
