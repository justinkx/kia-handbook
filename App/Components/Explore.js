import React, { memo, useRef, useEffect, useState, useCallback } from "react";
import { StyleSheet, Text, View } from "react-native";
import { Video } from "expo-av";
import SnapSlider from "react-native-snap-slider";

import { width, height } from "../Styles/GlobalStyle";

const EXPLORE_HEIGHT = height / 3.6;

const sliderOptions = [
  { label: "1", value: 0 },
  { label: "2", value: 1 },
  { label: "3", value: 2 },
  { label: "4", value: 3 },
  { label: "5", value: 4 },
  { label: "6", value: 5 },
];
const Explore = ({ explore }) => {
  const videoRef = useRef(null);
  const sliderRef = useRef(null);
  const [defaultTime, setTime] = useState(sliderOptions[0].value);

  useEffect(() => {
    async function init() {
      if (explore?.video) {
        await videoRef?.current?.loadAsync(
          {
            uri: explore?.video,
          },
          { progressUpdateIntervalMillis: 1 },
          false
        );
        await videoRef?.current.playAsync();
      }
    }
    init();
  }, [explore]);

  const onSlidingComplete = useCallback(async () => {
    const selectedTime = sliderRef?.current.state.item;
    setTime(selectedTime);
    await videoRef?.current?.playFromPositionAsync(
      explore?.POSITION_TIME_MAP[selectedTime][0],
      {
        toleranceMillisBefore: 10,
        toleranceMillisAfter: 10,
      }
    );
  }, [explore]);

  const handlePlaybackStatusUpdate = useCallback(
    async (AVPlaybackStatus) => {
      try {
        if (
          AVPlaybackStatus?.positionMillis >=
          explore?.POSITION_TIME_MAP?.[defaultTime][1]
        ) {
          await videoRef.current.pauseAsync();
        }
      } catch {}
    },
    [defaultTime, explore]
  );

  return (
    <View style={styles.backgroundContainer}>
      <Video
        ref={videoRef}
        style={styles.backgroundVideo}
        muted={true}
        resizeMode={"cover"}
        rate={1.0}
        ignoreSilentSwitch={"obey"}
        useNativeControls={false}
        onPlaybackStatusUpdate={handlePlaybackStatusUpdate}
        height={EXPLORE_HEIGHT}
      />
      <View style={{ height: 50, paddingHorizontal: 15 }}>
        <SnapSlider
          ref={sliderRef}
          items={sliderOptions}
          labelPosition="bottom"
          defaultItem={defaultTime}
          onSlidingComplete={onSlidingComplete}
        />
      </View>
    </View>
  );
};

export default memo(Explore);

const styles = StyleSheet.create({
  backgroundContainer: {
    position: "relative",
    height: EXPLORE_HEIGHT + 50,
  },
  backgroundVideo: {
    height: EXPLORE_HEIGHT,
  },
});
