import React, { memo } from "react";
import { StyleSheet, Text, View } from "react-native";

import GlobalStyle from "../Styles/GlobalStyle";

const Performance = ({
  performance: { title = "", image = "", desc = [] },
}) => {
  return (
    <View>
      <View style={GlobalStyle.detailsView}>
        <Text style={GlobalStyle.title}>PERFORMANCE</Text>
      </View>
    </View>
  );
};

export default memo(Performance);

const styles = StyleSheet.create({});
