import React, { memo } from "react";
import { StyleSheet, Text, View } from "react-native";

import GlobalStyles from "../Styles/GlobalStyle";

const HomeScreen = () => {
  return (
    <View
      style={[
        GlobalStyles.flex,
        GlobalStyles.whiteBackground,
        GlobalStyles.pagePadding,
      ]}
    >
      <Text>HomeScreen hjgdfjf</Text>
    </View>
  );
};

export default memo(HomeScreen);

const styles = StyleSheet.create({});
