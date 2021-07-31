import React, { memo, useCallback } from "react";
import { StyleSheet, Text, View, TouchableOpacity } from "react-native";
import { LinearGradient } from "expo-linear-gradient";

import GlobalStyles from "../Styles/GlobalStyle";
const GRADIENT_COLORS = [
  ["#861657", "#5f0a87"],
  ["#647dee", "#7f53ac"],
  ["#fbd72b", "#f9484a"],
  ["#5f72be", "#9921e8"],
  ["#923cb5", "#000000"],
];
const DetailsSegments = ({ segments = [] }) => {
  return (
    <View style={GlobalStyles.detailsView}>
      <View style={styles.container}>
        {segments.map((item, index) => (
          <TouchableOpacity key={item}>
            <LinearGradient
              start={{ x: 0.0, y: 0.25 }}
              end={{ x: 0.5, y: 1.0 }}
              locations={[0, 1]}
              colors={GRADIENT_COLORS[index]}
              style={styles.segment}
            >
              <Text style={styles.text}>{item}</Text>
            </LinearGradient>
          </TouchableOpacity>
        ))}
      </View>
    </View>
  );
};

export default memo(DetailsSegments);

const styles = StyleSheet.create({
  container: {
    flexDirection: "row",
    justifyContent: "space-evenly",
    alignItems: "center",
    flexWrap: "wrap",
  },
  segment: {
    paddingHorizontal: 15,
    paddingVertical: 6,
    marginRight: 15,
    marginBottom: 15,
    borderRadius: 15,
  },
  text: {
    fontSize: 12,
    fontWeight: "bold",
    color: "white",
  },
});
