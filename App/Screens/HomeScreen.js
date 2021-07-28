import React, { memo, useMemo, useCallback, useState } from "react";
import { StyleSheet, Text, Image, View, FlatList } from "react-native";
import _isObject from "lodash/isObject";
import _throttle from "lodash/throttle";
import _size from "lodash/size";
import Animated, {
  useSharedValue,
  useAnimatedScrollHandler,
  runOnJS,
} from "react-native-reanimated";
import { SafeAreaView } from "react-native-safe-area-context";

import GlobalStyles, { width, height } from "../Styles/GlobalStyle";
import { HomeScreenData } from "../Utils/HomeScreen.data";
import CarouselImage from "../Components/CarouselImage";
import ModelsCard from "../Components/ModelsCard";
import CarouselPagination from "../Components/CarouselPagination";
import DiscoverPagination from "../Components/DiscoverPagination";

const KIA = require("../../assets/kia.png");
const MODAL_ITEM_WIDTH = width * 0.7;
const IMAGE_VIEW_WIDTH = width - 30;
const SPACER_ITEM_SIZE = (width - MODAL_ITEM_WIDTH) / 2;
const DATA_SIZE = _size(HomeScreenData);
const SLIDER_SIZE = DATA_SIZE + 2;

const AnimatedFlatList = Animated.createAnimatedComponent(FlatList);

const HomeScreen = ({ navigation }) => {
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
      <CarouselPagination
        images={HomeScreenData[selectedIndex].images}
        imageScrollX={imageScrollX}
        IMAGE_VIEW_WIDTH={IMAGE_VIEW_WIDTH}
      />
    );
  }, [selectedIndex, imageScrollX]);

  const renderModalCard = useCallback(
    ({ item, index }) => {
      if (item.key) {
        return <View style={styles.spacerStyle} />;
      }
      return (
        <ModelsCard
          item={item}
          scrollX={modalScrollX}
          index={index}
          navigation={navigation}
        />
      );
    },
    [modalScrollX, navigation]
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
    <SafeAreaView style={[GlobalStyles.flex, GlobalStyles.whiteBackground]}>
      <View style={[GlobalStyles.row, GlobalStyles.pagePadding]}>
        <Image resizeMode="contain" source={KIA} style={styles.kia} />
        <Text style={styles.name}>{HomeScreenData[selectedIndex].name}</Text>
      </View>
      <AnimatedFlatList
        data={HomeScreenData[selectedIndex].images}
        renderItem={renderImages}
        horizontal
        scrollEventThrottle={16}
        showsHorizontalScrollIndicator={false}
        keyExtractor={keyExtractor}
        style={styles.carouselFlatlist}
        onScroll={scrollHandler}
        decelerationRate={0}
        bounce={false}
        extraData={[selectedIndex]}
        snapToInterval={width}
      />
      <View style={[GlobalStyles.center, styles.indicatorContainer]}>
        {imageIndicator()}
      </View>
      <View style={styles.discoverView}>
        <Text style={[styles.name, GlobalStyles.pagePadding]}>Discover</Text>
        <DiscoverPagination
          totalSize={DATA_SIZE}
          currentIndex={selectedIndex + 1}
        />
      </View>
      <AnimatedFlatList
        horizontal
        data={kiaModalData}
        renderItem={renderModalCard}
        keyExtractor={keyExtractor}
        snapToInterval={MODAL_ITEM_WIDTH}
        showsHorizontalScrollIndicator={false}
        contentContainerStyle={styles.modelCardList}
        decelerationRate={0}
        bounce={false}
        onScroll={onScroll}
        scrollEventThrottle={16}
        style={GlobalStyles.flex}
      />
    </SafeAreaView>
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
  indicatorContainer: {
    height: 50,
  },
  modelCardList: {
    alignItems: "center",
  },
  carouselFlatlist: {
    height: height / 3.5,
    flexGrow: 0,
  },
  spacerStyle: {
    width: SPACER_ITEM_SIZE,
  },
  discoverView: {
    flexDirection: "row",
    justifyContent: "space-between",
    alignItems: "center",
  },
});
