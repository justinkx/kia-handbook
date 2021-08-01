import React, { memo } from "react";
import { StyleSheet, Text, View } from "react-native";

import GlobalStyles from "../Styles/GlobalStyle";
import COLORS from "../Styles/Colors";
import FeatureCarousel from "./FeatureCarousel";

const Space = ({ space = {} }) => {
  return (
    <View>
      <View style={[GlobalStyles.detailsView, styles.container]}>
        <Text style={[GlobalStyles.caption, styles.title]}>{space.title}</Text>
        {space?.desc && (
          <Text style={[GlobalStyles.title, styles.desc]}>{space?.desc}</Text>
        )}
      </View>
      <FeatureCarousel segments={space.segments} />
    </View>
  );
};

export default memo(Space);

const styles = StyleSheet.create({
  title: {
    color: COLORS.intense_red,
  },
  desc: {
    paddingTop: 10,
    paddingBottom: 15,
  },
  container: {
    padding: 20,
  },
});
