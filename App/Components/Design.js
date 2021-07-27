import React, { memo, useState, useCallback } from "react";
import { StyleSheet, Text, View, Switch } from "react-native";

import Image360Viewer from "./Image360Viewer";
import ColorPicker from "./ColorPicker";

const DESIGNS = [];
const Design = ({ details }) => {
  const [selectedDesign, setDesign] = useState("GT");
  const [selectedColor, setColor] = useState(details?.design?.GT?.colors[0]);

  const onSelectColor = useCallback((selected) => {
    setColor(selected);
  }, []);

  return (
    <View>
      <View>
        <Text></Text>
      </View>
      {selectedColor && <Image360Viewer srcSet={selectedColor?.images} />}
      <ColorPicker
        selectedColor={selectedColor}
        colors={details?.design[selectedDesign]?.colors}
        onSelectColor={onSelectColor}
      />
    </View>
  );
};

export default memo(Design);

const styles = StyleSheet.create({});
