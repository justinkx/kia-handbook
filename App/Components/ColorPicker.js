import React, { memo } from "react";
import { StyleSheet, Text, View, TouchableOpacity } from "react-native";

const PALLETTE_SIZE = 10;

const ColorPicker = ({ colors, selectedColor }) => {
  return (
    <View>
      <View style={styles.wrapper}>
        {colors.map((color, index) => (
          <ColorPellette pallette={color} key={index} />
        ))}
      </View>
    </View>
  );
};

export default memo(ColorPicker);

const ColorPellette = memo(({ pallette }) => {
  return (
    <TouchableOpacity
      style={[styles.pallette, { backgroundColor: pallette.color }]}
    ></TouchableOpacity>
  );
});

const styles = StyleSheet.create({
  wrapper: {
    flexDirection: "row",
    justifyContent: "flex-start",
    alignItems: "center",
  },
  pallette: {
    width: PALLETTE_SIZE,
    height: PALLETTE_SIZE,
    borderRadius: PALLETTE_SIZE / 2,
    marginRight: 8,
  },
});
