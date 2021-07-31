import React, { memo, useCallback } from "react";
import {
  StyleSheet,
  Text,
  View,
  TouchableOpacity,
  Linking,
} from "react-native";

import LoadingImage from "./Loadingmage";
import GlobalStyle from "../Styles/GlobalStyle";
import { height, width } from "../Styles/GlobalStyle";

const Uvo = ({
  uvo: { title = "", desc = "", learnMore = "", image = "" },
}) => {
  const onClick = useCallback(() => {
    learnMore && Linking.openURL(learnMore);
  }, [learnMore]);

  return (
    <View>
      <View style={GlobalStyle.detailsView}>
        <Text style={GlobalStyle.title}>UVO</Text>
        <Text style={GlobalStyle.caption}>{title}</Text>
      </View>
      <LoadingImage source={image} imageStyle={styles.image} />
      <View style={GlobalStyle.detailsView}>
        <Text style={styles.para}>{desc}</Text>
        <TouchableOpacity onPress={onClick}>
          <Text style={GlobalStyle.link}>Learn More</Text>
        </TouchableOpacity>
      </View>
    </View>
  );
};

export default memo(Uvo);

const styles = StyleSheet.create({
  image: { width, height: height / 3 },
  para: {
    fontSize: 13,
    paddingTop: 8,
  },
});
