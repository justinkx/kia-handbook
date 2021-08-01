import React, {
  memo,
  useRef,
  useEffect,
  useState,
  useCallback,
  useMemo,
} from "react";
import { StyleSheet, Text, View } from "react-native";
import { Video } from "expo-av";
import SnapSlider from "@elselabs/react-native-snap-slider";
import { BlurView } from "expo-blur";
import Animated, {
  useSharedValue,
  withTiming,
  useAnimatedStyle,
  withDelay,
} from "react-native-reanimated";

import { height, width } from "../Styles/GlobalStyle";
import GlobalStyle from "../Styles/GlobalStyle";

const AnimatedBlurView = Animated.createAnimatedComponent(BlurView);
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
  const animatedHeight = useSharedValue(0);

  const [defaultTime, setTime] = useState(sliderOptions[0].value);

  const exploreDetails = useMemo(
    () => explore?.details[defaultTime],
    [defaultTime, explore]
  );

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

  useEffect(() => {
    animatedHeight.value = withDelay(
      1000,
      withTiming(EXPLORE_HEIGHT, {
        duration: 500,
      })
    );

    setTimeout(() => {
      animatedHeight.value = withTiming(0, {
        duration: 500,
      });
    }, 2500);
  }, [defaultTime, animatedHeight]);

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

  const blurStyle = useAnimatedStyle(() => ({
    height: animatedHeight.value,
  }));

  return (
    <View style={styles.backgroundContainer}>
      <View style={GlobalStyle.detailsView}>
        <Text style={GlobalStyle.title}>EXPLORE</Text>
        <Text style={GlobalStyle.caption}>{exploreDetails?.title}</Text>
      </View>
      <View style={styles.videoView}>
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
        <AnimatedBlurView
          tint={"dark"}
          blurTint={"default"}
          intensity={30}
          style={[StyleSheet.absoluteFill, styles.blurContent, blurStyle]}
        >
          <Text style={styles.description}>{exploreDetails?.description}</Text>
        </AnimatedBlurView>
      </View>
      <View style={styles.slider}>
        <SnapSlider
          ref={sliderRef}
          items={sliderOptions}
          labelPosition="bottom"
          defaultItem={defaultTime}
          onSlidingComplete={onSlidingComplete}
          itemStyle={styles.itemStyle}
        />
      </View>
    </View>
  );
};

export default memo(Explore);

const styles = StyleSheet.create({
  backgroundContainer: {
    height: EXPLORE_HEIGHT + 100,
    marginVertical: 30,
  },
  backgroundVideo: {
    height: EXPLORE_HEIGHT,
  },
  detailsView: {
    paddingHorizontal: 15,
    paddingBottom: 15,
  },
  explore: {
    fontSize: 15,
    fontWeight: "700",
    color: "#bb162b",
  },
  itemStyle: {
    fontSize: 12,
    fontWeight: "700",
  },
  videoView: {
    position: "relative",
  },
  blurContent: {
    width: width,
    height: EXPLORE_HEIGHT,
    top: 0,
    left: 0,
    bottom: 0,
    right: 0,
    justifyContent: "center",
    alignItems: "center",
    paddingHorizontal: 20,
    overflow: "hidden",
  },
  description: {
    textAlign: "center",
    color: "white",
    textAlign: "center",
  },
  slider: {
    minHeight: 50,
    paddingHorizontal: 15,
    justifyContent: "flex-end",
  },
});
