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

const KIA = require("../../assets/kia.png");
const IMAGE_INDICATOR_SIZE = 10;

const HomeScreen = () => {
  const [selectedIndex, setIndex] = useState(0);
  const { width, height } = useWindowDimensions();
  const imageScrollX = useRef(new Animated.Value(0)).current;

  const renderImages = useCallback(
    ({ item }) => (
      <View
        style={[
          GlobalStyles.center,
          { width: width - 30, height: height / 2.5 },
        ]}
      >
        <Image
          source={{ uri: item }}
          resizeMode="contain"
          style={{ width: width - 30, height: height / 2.5 }}
        />
      </View>
    ),
    []
  );

  const imageKeyExtractor = useCallback((item) => item, []);

  const imageIndicator = useMemo(
    () => (
      <View style={GlobalStyles.row}>
        {HomeScreenData[selectedIndex].images.map((item, index) => (
          <View key={index} style={styles.imageIndicator}></View>
        ))}
      </View>
    ),
    [selectedIndex]
  );
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
        style={{ height: height / 3, flexGrow: 0 }}
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
        {imageIndicator}
      </View>
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
