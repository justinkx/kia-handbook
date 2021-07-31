import React, { memo, useCallback, memo } from "react";
import { StyleSheet, Text, View } from "react-native";
import { LinearGradient } from "expo-linear-gradient";

import GlobalStyles from "../Styles/GlobalStyle";

const DetailsSegments = ({ segments = [] }) => {
  return (
    <View style={GlobalStyles.detailsView}>
      <View style={styles.container}>
        {segments.map((item) => (
          <TouchableOpacity key={item}>
            <LinearGradient
              colors={["rgba(0,0,0,0.8)", "transparent"]}
              style={styles.segment}
            >
              <Text>{item}</Text>
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
    justifyContent: "flex-start",
    alignItems: "center",
    flexWrap: "wrap",
  },
  segment: {
    padding: 10,
    marginRight: 20,
    marginBottom: 15,
    borderRadius: 10,
  },
});
