import React, { useMemo, memo } from "react";
import { StyleSheet, Text, View } from "react-native";

const DetailsScreen = ({ navigation, route }) => {
  const { details } = route.params;
  return (
    <View>
      <Text></Text>
    </View>
  );
};

export default memo(DetailsScreen);

const styles = StyleSheet.create({});
