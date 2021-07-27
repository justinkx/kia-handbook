import React, { memo, useRef, useEffect } from "react";
import { StyleSheet, Text, View } from "react-native";
import { Video } from "expo-av";
import Slider from "react-native-snap-slider";

const EXPLORE_HEIGHT = 250;

const Explore = ({ details }) => {
  const videoRef = useRef(null);

  useEffect(() => {
    setTimeout(() => {
      videoRef.current.playFromPositionAsync(200);
      //   videoRef.current.playAsync();
      setTimeout(() => {
        videoRef.current.stopAsync(400);
      }, 400);
      //   videoRef.current.playAsync();
    }, 1000);
  }, []);
  return (
    <View style={styles.backgroundContainer}>
      <Video
        ref={videoRef}
        source={{
          uri: "https://www.kia.com/content/dam/kia2/in/en/our-vehicles/showroom/carnival-product/Video/Desktop/explore-section-video-v5.mp4",
        }}
        style={styles.backgroundVideo}
        muted={true}
        resizeMode={"cover"}
        rate={1.0}
        ignoreSilentSwitch={"obey"}
        useNativeControls={false}
      />
    </View>
  );
};

export default memo(Explore);

const styles = StyleSheet.create({
  backgroundContainer: {
    position: "relative",
    height: EXPLORE_HEIGHT,
  },
  backgroundVideo: {
    height: EXPLORE_HEIGHT,
    position: "absolute",
    top: 0,
    left: 0,
    alignItems: "stretch",
    width: "100%",
  },
});
