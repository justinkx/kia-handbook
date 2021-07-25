import React, { useMemo, memo, useState } from "react";
import { StyleSheet, Animated, View, Text } from "react-native";
import {
  useCollapsibleSubHeader,
  CollapsibleSubHeaderAnimator,
} from "react-navigation-collapsible";
import { useSafeAreaInsets } from "react-native-safe-area-context";

import HeaderComponent from "../Components/HeaderComponent";
import BackButton from "../Components/BackButton";
import Image360Viewer from "../Components/Image360Viewer";

const DetailsScreen = ({ navigation, route }) => {
  const [selectedDesign, setDesign] = useState("gt");
  const [selectedColor, setColor] = useState(
    route.params?.details?.design?.gt?.colors[0]
  );

  const { details } = useMemo(() => route.params, [route]);

  const { onScroll, containerPaddingTop, translateY } =
    useCollapsibleSubHeader();
  const insets = useSafeAreaInsets();

  console.log("selectedColor?.images", selectedColor?.images);

  return (
    <View>
      <Animated.ScrollView
        onScroll={onScroll}
        contentContainerStyle={{ paddingTop: containerPaddingTop }}
        scrollIndicatorInsets={{ top: insets.top }}
      >
        {selectedColor && <Image360Viewer srcSet={selectedColor?.images} />}
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
