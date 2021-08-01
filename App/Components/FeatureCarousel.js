import React, { memo, useCallback, useState, useRef } from "react";
import {
  StyleSheet,
  Text,
  View,
  FlatList,
  TouchableOpacity,
} from "react-native";

import COLORS from "../Styles/Colors";
import GlobalStyles, { width, height } from "../Styles/GlobalStyle";
import LoadingImage from "./Loadingmage";

const FeatureCarousel = ({ segments }) => {
  const [activeIndex, setIndex] = useState(0);
  const topRef = useRef(null);
  const bottomRef = useRef(null);

  const keyExtractor = useCallback((_, index) => index.toString(), []);

  const onSegmentClick = useCallback((index) => {
    setIndex(index);
    topRef?.current?.scrollToIndex({ index, animated: true });
    bottomRef?.current?.scrollToIndex({
      animated: true,
      index,
    });
  }, []);

  const renderTop = useCallback(
    ({ item, index }) => (
      <TouchableOpacity
        onPress={() => onSegmentClick(index)}
        style={[
          styles.topSegment,
          {
            backgroundColor:
              index === activeIndex ? COLORS.title : COLORS.steel_silver,
          },
        ]}
      >
        <Text style={styles.name}>{item.name}</Text>
      </TouchableOpacity>
    ),
    [activeIndex, onSegmentClick]
  );

  const renderBottom = useCallback(
    ({ item, index }) => (
      <View style={{ width }}>
        <LoadingImage
          source={item.image}
          imageStyle={{ width, height: height / 2 }}
        />
        {item?.desc && (
          <Text style={[GlobalStyles.caption, styles.desc]}>{item.desc}</Text>
        )}
      </View>
    ),
    []
  );

  return (
    <View>
      <View style={GlobalStyles.detailsView}>
        <FlatList
          ref={topRef}
          keyExtractor={keyExtractor}
          horizontal
          showsHorizontalScrollIndicator={false}
          data={segments}
          renderItem={renderTop}
          bounces
        />
      </View>
      <FlatList
        ref={bottomRef}
        data={segments}
        pagingEnabled
        showsHorizontalScrollIndicator={false}
        horizontal
        keyExtractor={keyExtractor}
        renderItem={renderBottom}
        scrollEnabled={false}
      />
    </View>
  );
};

export default memo(FeatureCarousel);

const styles = StyleSheet.create({
  topSegment: {
    marginRight: 15,
    paddingHorizontal: 15,
    paddingVertical: 4,
    borderRadius: 15,
  },
  name: {
    fontSize: 13,
    fontWeight: "bold",
    color: "white",
  },
  desc: {
    margin: 20,
  },
});
