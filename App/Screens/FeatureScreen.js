import React, { memo } from "react";
import { StyleSheet, Text, View, ScrollView } from "react-native";

import GlobalStyles from "../Styles/GlobalStyle";

const FeatureScreen = ({ route }) => {
  const { title = "", details = {} } = route?.params;

  return (
    <View style={GlobalStyles.flex}>
      <ScrollView
        style={GlobalStyles.flex}
        contentContainerStyle={GlobalStyles.pagePadding}
      ></ScrollView>
    </View>
  );
};

export default memo(FeatureScreen);

const styles = StyleSheet.create({});
