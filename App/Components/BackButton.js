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
          top,
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
    left: 10,
    flexDirection: "row",
    justifyContent: "flex-start",
    alignItems: "center",
  },

  back: {
    fontSize: 15,
    fontWeight: "700",
  },
});
