import React, { memo, useRef, useEffect, useState, useCallback } from "react";
import { StyleSheet, Text, View } from "react-native";
import { Video } from "expo-av";
import SnapSlider from "react-native-snap-slider";

const EXPLORE_HEIGHT = 250;
const POSITION_TIME_MAP = {
  0: [0, 300],
  1: [300, 1500],
  2: [1500, 3200],
  3: [3200, 4100],
  4: [4100, 5000],
  5: [5000, 6016],
};

const sliderOptions = [
  { label: "1", value: 0 },
  { label: "2", value: 1 },
  { label: "3", value: 2 },
  { label: "4", value: 3 },
  { label: "5", value: 4 },
  { label: "6", value: 5 },
];
const Explore = ({ details }) => {
  const videoRef = useRef(null);
  const sliderRef = useRef(null);
  const [defaultTime, setTime] = useState(sliderOptions[0].value);

  useEffect(() => {
    videoRef?.current?.loadAsync(
      {
        uri: "https://www.kia.com/content/dam/kia2/in/en/our-vehicles/showroom/carnival-product/Video/Desktop/explore-section-video-v5.mp4",
      },
      { progressUpdateIntervalMillis: 1 }
    );
  }, []);

  const onSlidingComplete = useCallback(async () => {
    const selectedTime = sliderRef?.current.state.item;
    setTime(selectedTime);
    videoRef?.current?.playFromPositionAsync(
      POSITION_TIME_MAP[selectedTime][0]
    );
  }, []);

  const handlePlaybackStatusUpdate = useCallback(
    async (AVPlaybackStatus) => {
      try {
        if (
          AVPlaybackStatus?.positionMillis >=
          POSITION_TIME_MAP?.[defaultTime][1]
        ) {
          await videoRef.current.pauseAsync();
        }
      } catch (error) {
        console.log("error>>>", error);
      }
    },
    [defaultTime]
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
