import React, { memo, useMemo } from "react";
import {
  StyleSheet,
  Dimensions,
  View,
  TouchableOpacity,
  Text,
} from "react-native";
import _size from "lodash/size";
import { Entypo } from "@expo/vector-icons";

import GlobalStyle from "../Styles/GlobalStyle";

const { width } = Dimensions.get("window");

const PICKER_SIZE = width - 30;
const MARGIN_RIGHT = 8;

const ColorPicker = ({ colors, selectedColor, onSelectColor }) => {
  return (
    <View style={[GlobalStyle.center]}>
      <Text style={styles.paint}>{selectedColor.paint}</Text>
      <View style={styles.wrapper}>
        {colors.map((color, index) => (
          <ColorPellette
            onSelectColor={onSelectColor}
            pallette={color}
            key={index}
            size={_size(colors)}
            selectedColor={selectedColor}
          />
        ))}
      </View>
    </View>
  );
};

export default memo(ColorPicker);

const ColorPellette = memo(
  ({ pallette, onSelectColor, size, selectedColor }) => {
    const PALLETTE_SIZE = useMemo(
      () => Math.min((PICKER_SIZE - MARGIN_RIGHT * size) / size, 20),
      [size]
    );
    return (
      <TouchableOpacity onPress={() => onSelectColor(pallette)}>
        <View
          style={[
            styles.pallette,
            {
              backgroundColor: pallette.dualTone
                ? pallette.colors[0]
                : pallette.color,
              width: PALLETTE_SIZE,
              height: PALLETTE_SIZE,
              borderRadius: PALLETTE_SIZE / 2,
            },
          ]}
        >
          {pallette.dualTone && (
            <View
              style={{
                backgroundColor: pallette.colors[1],
                width: PALLETTE_SIZE / 2,
                height: PALLETTE_SIZE,
                position: "absolute",
              }}
            />
          )}
          {selectedColor.paint === pallette.paint && (
            <View style={styles.check}>
              <Entypo name="check" size={15} color="#80ff80" />
            </View>
          )}
        </View>
      </TouchableOpacity>
    );
  }
);

const styles = StyleSheet.create({
  paint: {
    width: "100%",
    fontSize: 15,
    fontWeight: "bold",
    textAlign: "left",
    paddingBottom: 10,
  },
  wrapper: {
    flexDirection: "row",
    justifyContent: "flex-start",
    alignItems: "center",
  },
  pallette: {
    marginRight: 8,
    borderWidth: StyleSheet.hairlineWidth,
    borderColor: "#00000033",
    position: "relative",
    overflow: "hidden",
  },
  check: {
    position: "absolute",
    top: 0,
    left: 0,
    right: 0,
    bottom: 0,
    justifyContent: "center",
    alignItems: "center",
  },
});
