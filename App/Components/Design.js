import React, { memo, useState, useCallback } from "react";
import { StyleSheet, Text, View, Switch } from "react-native";

import Image360Viewer from "./Image360Viewer";
import ColorPicker from "./ColorPicker";
import Colors from "../Styles/Colors";

const DESIGNS = ["GT", "Tech"];

const Design = ({ details }) => {
  const [selectedDesign, setDesign] = useState(DESIGNS[0]);
  const [selectedColor, setColor] = useState(details?.design?.GT?.colors[0]);

  const onSelectColor = useCallback((selected) => {
    setColor(selected);
  }, []);

  const toggleSwitch = useCallback(
    (value) => {
      const design = value ? DESIGNS[0] : DESIGNS[1];
      setDesign(design);
      setColor(details?.design?.[design]?.colors[0]);
    },
    [details?.design]
  );

  return (
    <View style={styles.container}>
      {details?.design?.gtLine && (
        <View style={styles.designWrapper}>
          <View>
            <Text style={styles.design}>{selectedDesign}</Text>
            <Switch
              style={styles.switch}
              trackColor={{ false: "#767577", true: "#767577" }}
              thumbColor={
                selectedDesign === DESIGNS[0] ? Colors.intense_red : "#f4f3f4"
              }
              onValueChange={toggleSwitch}
              value={selectedDesign === DESIGNS[0]}
            />
          </View>
          <Text style={styles.name}>
            {details?.design[selectedDesign]?.name}
          </Text>
        </View>
      )}
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

const styles = StyleSheet.create({
  container: {
    padding: 15,
  },
  switch: {
    transform: [{ scaleX: 0.7 }, { scaleY: 0.7 }],
  },
  design: {
    fontSize: 13,
    fontWeight: "500",
    paddingLeft: 6,
  },
  designWrapper: {
    flexDirection: "row",
    justifyContent: "space-between",
    alignItems: "flex-start",
  },
  name: {
    fontSize: 14,
    fontWeight: "bold",
  },
});
