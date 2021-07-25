import React, { useMemo, memo } from "react";
import { StyleSheet, Animated, View, Text } from "react-native";
import {
  useCollapsibleSubHeader,
  CollapsibleSubHeaderAnimator,
} from "react-navigation-collapsible";
import { useSafeAreaInsets } from "react-native-safe-area-context";

import HeaderComponent from "../Components/HeaderComponent";

const DetailsScreen = ({ navigation, route }) => {
  const { onScroll, containerPaddingTop, translateY } =
    useCollapsibleSubHeader();
  const insets = useSafeAreaInsets();
  const { details } = useMemo(() => route.params, [route]);
  return (
    <>
      <Animated.ScrollView
        onScroll={onScroll}
        contentContainerStyle={{ paddingTop: containerPaddingTop }}
        scrollIndicatorInsets={{ top: insets.top }}
      ></Animated.ScrollView>
      <CollapsibleSubHeaderAnimator translateY={translateY}>
        <HeaderComponent details={details} />
      </CollapsibleSubHeaderAnimator>
    </>
  );
};

export default memo(DetailsScreen);

const styles = StyleSheet.create({});
