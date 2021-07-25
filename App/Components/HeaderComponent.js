import React, { memo, useRef, useEffect } from "react";
import { StyleSheet, Image, View, Text } from "react-native";
import { Video } from "expo-av";

const HEADER_HEIGHT = 250;

const HeaderComponent = ({ details }) => {
  const videoRef = useRef(null);

  useEffect(() => {
    if (videoRef?.current) {
      videoRef.current.playAsync();
    }
  }, []);
  return (
    <View>
      <View style={styles.backgroundContainer}>
        {details?.header?.bannerVideo ? (
          <>
            <Video
              ref={videoRef}
              source={{ uri: details?.header?.bannerVideo }}
              style={styles.backgroundVideo}
              muted={true}
              repeat={true}
              resizeMode={"cover"}
              rate={1.0}
              ignoreSilentSwitch={"obey"}
              useNativeControls={false}
              isLooping
              posterSource={{ uri: details?.header?.videoPoster }}
              usePoster
              posterStyle={{ resizeMode: "cover" }}
            />
            {details?.header?.headerLogo && (
              <Image
                resizeMode="stretch"
                style={styles.headerLogo}
                source={{ uri: details?.header?.headerLogo }}
              />
            )}
          </>
        ) : (
          <Image
            style={styles.poster}
            resizeMode="stretch"
            source={{ uri: details?.header?.videoPoster }}
          />
        )}
      </View>
    </View>
  );
};

export default memo(HeaderComponent);

const styles = StyleSheet.create({
  backgroundContainer: {
    position: "relative",
    height: HEADER_HEIGHT,
  },
  backgroundVideo: {
    height: HEADER_HEIGHT,
    position: "absolute",
    top: 0,
    left: 0,
    alignItems: "stretch",
    width: "100%",
  },
  headerLogo: {
    width: (HEADER_HEIGHT * 3) / 5,
    height: HEADER_HEIGHT / 5,
    position: "absolute",
    left: 20,
    bottom: 20,
  },
  poster: {
    height: HEADER_HEIGHT,
    width: "100%",
  },
});
