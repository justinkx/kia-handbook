import React, { memo } from "react";
import { StyleSheet, Image, View } from "react-native";

import GlobalStyles from "../Styles/GlobalStyle";

const CarouselImage = ({ item, width, height }) => {
  return (
    <View
      style={[GlobalStyles.center, { width: width - 30, height: height / 3.5 }]}
    >
      <Image
        source={{ uri: item }}
        resizeMode="contain"
        style={{ width: width - 30, height: height / 3.5 }}
      />
    </View>
  );
};

export default memo(CarouselImage);

const styles = StyleSheet.create({});
