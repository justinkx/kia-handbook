import React, { memo } from "react";
import { StyleSheet, Text, View, Image } from "react-native";

import GlobalStyle from "../Styles/GlobalStyle";
import { height, width } from "../Styles/GlobalStyle";

const Performance = ({
  performance: { title = "", image = "", desc = [] },
}) => {
  return (
    <View>
      <View style={GlobalStyle.detailsView}>
        <Text style={GlobalStyle.title}>PERFORMANCE</Text>
        <Text style={GlobalStyle.caption}>{title}</Text>
      </View>
      <Image source={{ uri: image }} style={styles.image} />
      <View style={GlobalStyle.detailsView}>
        {desc.map((item, index) => (
          <View key={index} style={styles.item}>
            <Text style={GlobalStyle.caption}>{item?.head}</Text>
            <Text style={styles.para}>{item?.para}</Text>
          </View>
        ))}
      </View>
    </View>
  );
};

export default memo(Performance);

const styles = StyleSheet.create({
  image: { width: width, height: height / 3, marginBottom: 20 },
  item: {
    marginBottom: 20,
    borderBottomWidth: StyleSheet.hairlineWidth,
    borderBottomColor: "gray",
    paddingBottom: 15,
  },
  para: {
    fontSize: 13,
    paddingTop: 8,
  },
});
