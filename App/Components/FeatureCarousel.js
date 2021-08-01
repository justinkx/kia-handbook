import React, { memo, useCallback, useState } from "react";
import {
  StyleSheet,
  Text,
  View,
  FlatList,
  TouchableOpacity,
} from "react-native";

import COLORS from "../Styles/Colors";
import GlobalStyles from "../Styles/GlobalStyle";

const FeatureCarousel = ({ segments }) => {
  const [activeIndex, setIndex] = useState(0);

  const keyExtractor = useCallback((_, index) => index.toString(), []);

  const renderTop = useCallback(
    ({ item, index }) => (
      <TouchableOpacity
        onPress={() => setIndex(index)}
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
    [activeIndex]
  );

  return (
    <View>
      <View style={GlobalStyles.detailsView}>
        <FlatList
          keyExtractor={keyExtractor}
          horizontal
          showsHorizontalScrollIndicator={false}
          data={segments}
          renderItem={renderTop}
          bounces
        />
      </View>
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
});
