import React, { useMemo, memo, useCallback, useState } from "react";
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
import Performance from "../Components/Performance";
import Uvo from "../Components/Uvo";

const HEADER_HEIGHT = 250;

const DetailsScreen = ({ navigation, route }) => {
  const [headerStyle, setStyle] = useState({ style: "light", color: "white" });

  const { details } = useMemo(() => route.params, [route]);

  const { containerPaddingTop, translateY, onScrollWithListener } =
    useCollapsibleSubHeader();
  const insets = useSafeAreaInsets();

  const listener = useCallback(
    ({ nativeEvent }) => {
      if (nativeEvent?.contentOffset?.y > HEADER_HEIGHT + insets.top) {
        setStyle({ style: "dark", color: "black" });
      } else {
        setStyle({ style: "light", color: "white" });
      }
    },
    [insets]
  );

  const onScroll = onScrollWithListener(listener);
  return (
    <View>
      <StatusBar style={headerStyle.style} animated />
      <Animated.ScrollView
        onScroll={onScroll}
        contentContainerStyle={{
          paddingTop: containerPaddingTop,
          paddingBottom: insets.bottom,
        }}
        scrollIndicatorInsets={{ top: insets.top }}
        removeClippedSubviews
      >
        <Design details={details} />
        <Explore explore={details?.explore} />
        <Performance performance={details?.performance} />
        <Uvo uvo={details?.uvo} />
      </Animated.ScrollView>
      <CollapsibleSubHeaderAnimator translateY={translateY}>
        <HeaderComponent details={details} />
      </CollapsibleSubHeaderAnimator>
      <BackButton
        color={headerStyle.color}
        navigation={navigation}
        top={insets.top}
      />
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
