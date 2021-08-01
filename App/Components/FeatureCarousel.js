import React, { memo, useCallback, useState } from "react";
import {
  StyleSheet,
  Text,
  View,
  FlatList,
  TouchableOpacity,
} from "react-native";

import COLORS from "../Styles/Colors";

const FeatureCarousel = ({ segments }) => {
  const [activeIndex, setIndex] = useState(0);

  const keyExtractor = useCallback(({ _, index }) => index.toString(), []);

  const renderTop = useCallback(
    (item, index) => (
      <TouchableOpacity
        onPress={() => setIndex(index)}
        style={[
          styles.topSegment,
          {
            backgroundColor: COLORS.gravity_gray,
          },
        ]}
      >
        <Text style={styles.name}>{item.name}</Text>
      </TouchableOpacity>
    ),
    []
  );

  return (
    <View>
      <FlatList
        keyExtractor={keyExtractor}
        horizontal
        showsHorizontalScrollIndicator={false}
        data={segments}
        renderItem={renderTop}
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
  },
});
