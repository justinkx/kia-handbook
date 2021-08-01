import React, { memo } from "react";
import { StyleSheet, Text, View } from "react-native";

import COLORS from "../Styles/Colors";
import GlobalStyle, { width, height } from "../Styles/GlobalStyle";
import LoadingImage from "./Loadingmage";

const Entertinement = ({ entertinement = {} }) => {
  return (
    <View>
      <View style={styles.detailsView}>
        <Text style={[GlobalStyle.caption, styles.title]}>
          {entertinement?.title}
        </Text>
        <Text style={[GlobalStyle.title, styles.desc]}>
          {entertinement?.desc}
        </Text>
      </View>
      <LoadingImage
        source={entertinement?.image}
        imageStyle={{ width, height: height / 3 }}
      />
    </View>
  );
};

export default memo(Entertinement);

const styles = StyleSheet.create({
  detailsView: {
    padding: 20,
  },
  title: {
    color: COLORS.title,
  },
  desc: {
    color: COLORS.auroa_black_pearl,
    paddingVertical: 15,
  },
});
