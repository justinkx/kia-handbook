import React, { memo, useMemo, useCallback, useState, useRef } from "react";
import {
  StyleSheet,
  Text,
  Image,
  View,
  Dimensions,
  FlatList,
} from "react-native";
import _isObject from "lodash/isObject";
import _throttle from "lodash/throttle";
import _size from "lodash/size";
import Animated, {
  useSharedValue,
  useAnimatedScrollHandler,
  useAnimatedStyle,
  interpolate,
  runOnJS,
} from "react-native-reanimated";

import GlobalStyles from "../Styles/GlobalStyle";
import { HomeScreenData } from "../Utils/HomeScreen.data";
import CarouselImage from "../Components/CarouselImage";
import ModelsCard from "../Components/ModelsCard";

const KIA = require("../../assets/kia.png");
const IMAGE_INDICATOR_SIZE = 10;
const { width, height } = Dimensions.get("window");
const MODAL_ITEM_WIDTH = width * 0.7;
const IMAGE_VIEW_WIDTH = width - 30;
const SPACER_ITEM_SIZE = (width - MODAL_ITEM_WIDTH) / 2;
const DATA_SIZE = _size(HomeScreenData);
const SLIDER_SIZE = DATA_SIZE + 2;

const AnimatedFlatList = Animated.createAnimatedComponent(FlatList);

const HomeScreen = () => {
  const kiaModalData = useMemo(
    () => [
      {
        key: "left",
      },
      ...HomeScreenData,
      {
        key: "right",
      },
    ],
    []
  );

  const [selectedIndex, setIndex] = useState(0);
  const imageScrollX = useSharedValue(0);
  const modalScrollX = useSharedValue(0);

  const renderImages = useCallback(
    ({ item, index }) => (
      <CarouselImage scrollX={imageScrollX} item={item} index={index} />
    ),
    [imageScrollX]
  );

  const keyExtractor = useCallback((_, index) => index.toString(), []);

  const imageIndicator = useCallback(() => {
    return (
      <View style={GlobalStyles.row}>
        {HomeScreenData[selectedIndex].images.map((item, i) => {
          const indicatorStyle = useAnimatedStyle(() => ({
            transform: [
              {
                scale: interpolate(
                  imageScrollX.value,
                  [
                    (i - 1) * IMAGE_VIEW_WIDTH,
                    i * IMAGE_VIEW_WIDTH,
                    (i + 1) * IMAGE_VIEW_WIDTH,
                  ],
                  [0.9, 1.1, 0.9]
                ),
              },
            ],
          }));

          return (
            <Animated.View
              key={i}
              style={[styles.imageIndicator, indicatorStyle]}
            ></Animated.View>
          );
        })}
      </View>
    );
  }, [selectedIndex, imageScrollX]);

  const renderModalCard = useCallback(
    ({ item, index }) => {
      if (item.key) {
        return <View style={styles.spacerStyle} />;
      }
      return <ModelsCard item={item} scrollX={modalScrollX} index={index} />;
    },
    [modalScrollX]
  );

  const setAnimatedIndex = useCallback((event) => {
    if (!event?.contentOffset?.x) return;
    const {
      contentOffset: { x },
      contentSize: { width },
    } = event;
    const newIndex = Math.floor((x / width) * SLIDER_SIZE);
    if (newIndex < 0 || newIndex >= DATA_SIZE) return;
    setIndex(Math.floor((x / width) * SLIDER_SIZE));
  }, []);

  const onScroll = useAnimatedScrollHandler((event) => {
    "worklet";
    modalScrollX.value = event.contentOffset.x;
    runOnJS(setAnimatedIndex)(event);
  });

  const scrollHandler = useAnimatedScrollHandler((event) => {
    imageScrollX.value = event.contentOffset.x;
  });

  return (
    <View style={[GlobalStyles.flex, GlobalStyles.whiteBackground]}>
      <View style={[GlobalStyles.row, GlobalStyles.pagePadding]}>
        <Image resizeMode="contain" source={KIA} style={styles.kia} />
        <Text style={styles.name}>{HomeScreenData[selectedIndex].name}</Text>
      </View>
      <AnimatedFlatList
        data={HomeScreenData[selectedIndex].images}
        renderItem={renderImages}
        horizontal
        scrollEventThrottle={32}
        pagingEnabled
        showsHorizontalScrollIndicator={false}
        keyExtractor={keyExtractor}
        style={styles.carouselFlatlist}
        onScroll={scrollHandler}
        decelerationRate={0}
        bounce={false}
      />
      <View style={[GlobalStyles.center, styles.indicatorContainer]}>
        {imageIndicator()}
      </View>
      <Text style={[styles.name, GlobalStyles.pagePadding]}>Discover</Text>
      <AnimatedFlatList
        horizontal
        data={kiaModalData}
        renderItem={renderModalCard}
        keyExtractor={keyExtractor}
        snapToInterval={MODAL_ITEM_WIDTH}
        pagingEnabled
        showsHorizontalScrollIndicator={false}
        contentContainerStyle={styles.modelCardList}
        pagingEnabled
        decelerationRate={0}
        bounce={false}
        onScroll={onScroll}
        scrollEventThrottle={16}
        style={GlobalStyles.flex}
      />
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
  modelCardList: {
    alignItems: "center",
  },
  carouselFlatlist: {
    height: height / 3.4,
    flexGrow: 0,
  },
  spacerStyle: {
    width: SPACER_ITEM_SIZE,
  },
});
