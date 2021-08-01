import React, { memo } from "react";
import { StyleSheet, Text, TouchableOpacity } from "react-native";
import { Ionicons } from "@expo/vector-icons";

const BackButton = ({ navigation, top = 50, color = "white" }) => {
  return (
    <TouchableOpacity
      onPress={() => navigation.pop()}
      style={[
        styles.container,
        {
          top: color === "white" ? top : 0,
          backgroundColor: color === "white" ? "transparent" : "white",
          height: color === "white" ? 40 : top + 40,
          paddingTop: color === "white" ? 0 : top,
        },
      ]}
    >
      <Ionicons name="chevron-back" size={24} style={{ color }} />
      <Text style={[styles.back, { color }]}>Back</Text>
    </TouchableOpacity>
  );
};

export default memo(BackButton);

const styles = StyleSheet.create({
  container: {
    position: "absolute",
    zIndex: 1000,
    paddingLeft: 10,
    flexDirection: "row",
    justifyContent: "flex-start",
    alignItems: "center",
    width: "100%",
  },

  back: {
    fontSize: 15,
    fontWeight: "700",
  },
});
