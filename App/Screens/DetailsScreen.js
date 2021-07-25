import React, { useMemo, memo } from "react";
import { StyleSheet, Animated, View, Text } from "react-native";
import {
  useCollapsibleSubHeader,
  CollapsibleSubHeaderAnimator,
} from "react-navigation-collapsible";
import { useSafeAreaInsets } from "react-native-safe-area-context";

import HeaderComponent from "../Components/HeaderComponent";
import BackButton from "../Components/BackButton";

const DetailsScreen = ({ navigation, route }) => {
  const { onScroll, containerPaddingTop, translateY } =
    useCollapsibleSubHeader();
  const insets = useSafeAreaInsets();
  const { details } = useMemo(() => route.params, [route]);
  return (
    <View>
      <Animated.ScrollView
        onScroll={onScroll}
        contentContainerStyle={{ paddingTop: containerPaddingTop }}
        scrollIndicatorInsets={{ top: insets.top }}
      ></Animated.ScrollView>
      <CollapsibleSubHeaderAnimator translateY={translateY}>
        <HeaderComponent details={details} />
      </CollapsibleSubHeaderAnimator>
      <BackButton navigation={navigation} top={insets.top} />
    </View>
  );
};

export default memo(DetailsScreen);

const styles = StyleSheet.create({});
