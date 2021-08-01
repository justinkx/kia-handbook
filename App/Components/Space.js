import React, { memo } from "react";
import { StyleSheet, Text, View } from "react-native";

import GlobalStyles from "../Styles/GlobalStyle";

const Space = ({ space = {} }) => {
  return (
    <View>
      <View style={GlobalStyles.detailsView}>
        <Text style={GlobalStyles.title}>{space.title}</Text>
        <Text style={GlobalStyles.caption}>{space.desc}</Text>
      </View>
    </View>
  );
};

export default memo(Space);

const styles = StyleSheet.create({});
