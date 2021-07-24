import React, { memo, useMemo, useCallback, useState, useRef } from "react";
import {
  StyleSheet,
  Text,
  Image,
  View,
  FlatList,
  useWindowDimensions,
  Animated,
} from "react-native";

import GlobalStyles from "../Styles/GlobalStyle";
import { HomeScreenData } from "../Utils/HomeScreen.data";
import CarouselImage from "../Components/CarouselImage";

const KIA = require("../../assets/kia.png");
const IMAGE_INDICATOR_SIZE = 10;

const HomeScreen = () => {
  const [selectedIndex, setIndex] = useState(0);
  const { width, height } = useWindowDimensions();
  const imageScrollX = useRef(new Animated.Value(0)).current;

  const renderImages = useCallback(
    ({ item }) => <CarouselImage item={item} width={width} height={height} />,
    [width, height]
  );

  const imageKeyExtractor = useCallback((_, index) => index.toString(), []);

  const imageIndicator = useCallback(() => {
    return (
      <View style={GlobalStyles.row}>
        {HomeScreenData[selectedIndex].images.map((item, i) => {
          const IMAGE_VIEW_WIDTH = width - 30;
          const scale = imageScrollX.interpolate({
            inputRange: [
              (i - 2) * IMAGE_VIEW_WIDTH,
              (i - 1) * IMAGE_VIEW_WIDTH,
              i * IMAGE_VIEW_WIDTH,
              (i + 1) * IMAGE_VIEW_WIDTH,
              (i + 2) * IMAGE_VIEW_WIDTH,
            ],
            outputRange: [0.8, 1, 1.2, 1, 0.8],
          });
          return (
            <Animated.View
              key={i}
              style={[
                styles.imageIndicator,
                {
                  transform: [
                    {
                      scale,
                    },
                  ],
                },
              ]}
            ></Animated.View>
          );
        })}
      </View>
    );
  }, [selectedIndex, imageScrollX, width]);

  return (
    <View
      style={[
        GlobalStyles.flex,
        GlobalStyles.whiteBackground,
        GlobalStyles.pagePadding,
      ]}
    >
      <View style={GlobalStyles.row}>
        <Image resizeMode="contain" source={KIA} style={styles.kia} />
        <Text style={styles.name}>{HomeScreenData[selectedIndex].name}</Text>
      </View>
      <Animated.FlatList
        data={HomeScreenData[selectedIndex].images}
        renderItem={renderImages}
        horizontal
        scrollEventThrottle={32}
        pagingEnabled
        showsHorizontalScrollIndicator={false}
        keyExtractor={imageKeyExtractor}
        style={{ height: height / 3.4, flexGrow: 0 }}
        onScroll={Animated.event(
          [
            {
              nativeEvent: {
                contentOffset: { x: imageScrollX },
              },
            },
          ],
          {
            useNativeDriver: true,
          }
        )}
      />
      <View style={[GlobalStyles.center, styles.indicatorContainer]}>
        {imageIndicator()}
      </View>
      <Text style={styles.name}>Discover</Text>
      <Animated.FlatList style={GlobalStyles.flex} data={HomeScreenData} />
    </View>
  );
};

export default memo(HomeScreen);

const styles = StyleSheet.create({
  name: {
    fontSize: 17,
    fontWeight: "700",
  },
  kia: {
    height: 18,
    marginRight: 5,
    width: 40,
  },
  imageIndicator: {
    width: IMAGE_INDICATOR_SIZE,
    height: IMAGE_INDICATOR_SIZE,
    borderRadius: IMAGE_INDICATOR_SIZE / 2,
    backgroundColor: "#333",
    margin: 5,
  },
  indicatorContainer: {
    height: 50,
  },
});
