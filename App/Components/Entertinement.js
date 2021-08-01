import React, { memo } from "react";
import { StyleSheet, Text, View } from "react-native";

import GlobalStyle, { width, height } from "../Styles/GlobalStyle";
import LoadingImage from "./Loadingmage";

const Entertinement = ({ entertinement = {} }) => {
  return (
    <View>
      <View style={GlobalStyle.detailsView}>
        <Text style={GlobalStyle.title}>{entertinement?.title}</Text>
        <Text style={GlobalStyle.caption}>{entertinement?.desc}</Text>
      </View>
      <LoadingImage
        source={entertinement?.image}
        imageStyle={{ width, height: height / 3 }}
      />
    </View>
  );
};

export default memo(Entertinement);

const styles = StyleSheet.create({});
