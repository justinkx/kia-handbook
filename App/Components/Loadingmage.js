import React, { memo, useState, useEffect, useCallback } from "react";
import { StyleSheet, ActivityIndicator, Image, View } from "react-native";

const defaultSource = require("../../assets/placeholder.png");

const LoadingImage = ({
  source,
  placeholder = defaultSource,
  imageStyle = {},
  resizeMode = "stretch",
  resizeMethod = "auto",
  indicatorSize = "large",
  showContainerStyle = true,
}) => {
  const [loaded, setLoaded] = useState(false);
  const [loadError, setLoadError] = useState(false);

  const handleOnLoad = useCallback(() => setLoaded(true), []);
  const handleOnError = useCallback(() => setLoadError(true), []);

  useEffect(() => {
    setLoadError(false);
  }, [source]);

  return (
    <View>
      {!loadError ? (
        <View style={[styles.imageContainer, showContainerStyle && imageStyle]}>
          <Image
            source={{ uri: source }}
            style={imageStyle}
            resizeMode={resizeMode}
            resizeMethod={resizeMethod}
            onLoad={handleOnLoad}
            onError={handleOnError}
            progressiveRenderingEnabled
          />
          {!loaded && (
            <>
              <Image
                source={placeholder}
                style={[{ width: "100%" }, imageStyle]}
                resizeMode={resizeMode}
                resizeMethod={resizeMethod}
                progressiveRenderingEnabled
              />
              <ActivityIndicator
                style={styles.indicator}
                size={indicatorSize}
                color={"green"}
              />
            </>
          )}
        </View>
      ) : (
        <Image
          source={placeholder}
          style={imageStyle}
          resizeMode={resizeMode}
          progressiveRenderingEnabled
        />
      )}
    </View>
  );
};

export default memo(LoadingImage);

const styles = StyleSheet.create({
  imageContainer: {
    position: "relative",
    overflow: "hidden",
  },
  indicator: {
    position: "absolute",
    top: 0,
    left: 0,
    right: 0,
    bottom: 0,
    justifyContent: "center",
    alignItems: "center",
  },
});
