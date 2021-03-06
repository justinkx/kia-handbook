import React, { memo, useMemo } from "react";
import { StyleSheet, Text, View, ScrollView } from "react-native";

import GlobalStyles from "../Styles/GlobalStyle";
import Space from "../Components/Space";
import Entertinement from "../Components/Entertinement";

const FeatureScreen = ({ route }) => {
  const { title = "", details = {} } = route?.params;

  const renderComponent = useMemo(() => {
    let renderItem = null;
    if (["SPACE", "TECHNOLOGY", "SAFETY", "EXTRAVAGANCE"].includes(title)) {
      renderItem = <Space space={details?.[title]} />;
    } else if (title === "ENTERTAINMENT") {
      renderItem = <Entertinement entertinement={details?.[title]} />;
    }
    return renderItem;
  }, [details, title]);

  return (
    <View style={[GlobalStyles.flex, GlobalStyles.whiteBackground]}>
      <ScrollView style={GlobalStyles.flex}>{renderComponent}</ScrollView>
    </View>
  );
};

export default memo(FeatureScreen);

const styles = StyleSheet.create({});
