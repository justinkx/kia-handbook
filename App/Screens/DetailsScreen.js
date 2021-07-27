import React, { useMemo, memo, useState, useCallback } from "react";
import { StyleSheet, Animated, View } from "react-native";
import {
  useCollapsibleSubHeader,
  CollapsibleSubHeaderAnimator,
} from "react-navigation-collapsible";
import { useSafeAreaInsets } from "react-native-safe-area-context";
import { StatusBar } from "expo-status-bar";

import HeaderComponent from "../Components/HeaderComponent";
import BackButton from "../Components/BackButton";
import Design from "../Components/Design";
import Explore from "../Components/Explore";

const DetailsScreen = ({ navigation, route }) => {
  const { details } = useMemo(() => route.params, [route]);

  const { onScroll, containerPaddingTop, translateY } =
    useCollapsibleSubHeader();
  const insets = useSafeAreaInsets();

  return (
    <View>
      <StatusBar style="light" animated />
      <Animated.ScrollView
        onScroll={onScroll}
        contentContainerStyle={{
          paddingTop: containerPaddingTop,
          paddingBottom: insets.bottom,
        }}
        scrollIndicatorInsets={{ top: insets.top }}
      >
        <Design details={details} />
        <Explore details={details} />
      </Animated.ScrollView>
      <CollapsibleSubHeaderAnimator translateY={translateY}>
        <HeaderComponent details={details} />
      </CollapsibleSubHeaderAnimator>
      <BackButton navigation={navigation} top={insets.top} />
    </View>
  );
};

export default memo(DetailsScreen);

const styles = StyleSheet.create({
  container: {
    height: 300,
    width: "100%",
  },
});
