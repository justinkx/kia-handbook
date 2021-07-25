import React, { PureComponent } from "react";
import {
  View,
  Image,
  PanResponder,
  Dimensions,
  StyleSheet,
} from "react-native";

const { width } = Dimensions.get("window");

export default class Image360Viewer extends PureComponent {
  static defaultProps = {
    width: width - 30, // width of image
    height: 250, // height of image
    srcSet: [],
    rotationRatio: 0.5, // the drag distance compares to 180 degree: width / rotationRatio = 180 degree,
  };

  constructor(props) {
    super(props);
    this.createPanResponder();

    this.state = {
      rotation: 0,
      rotatePeriod: 360 / props.srcSet.length,
    };
  }

  createPanResponder = () => {
    this.panResponder = PanResponder.create({
      onMoveShouldSetPanResponder: (evt, gestureState) => true,
      onPanResponderGrant: (evt, gestureState) => {
        // console.log('onPanResponderGrant', gestureState)
        this.startMoving(gestureState);
      },
      onPanResponderMove: (evt, gestureState) => {
        // console.log('onPanResponderMove', gestureState)
        this.moving(gestureState);
      },
      onPanResponderRelease: (evt, gestureState) => {
        // console.log('onPanResponderRelease', gestureState)
        this.endMoving(gestureState);
      },
    });
  };

  startMoving = (gestureState) => {
    this.startX = gestureState.moveX;
    this.startRotation = this.state.rotation;
  };

  moving = (gestureState) => {
    this.currentX = gestureState.moveX;
    this.updateRotation();
  };

  endMoving = (gestureState) => {
    this.currentX = gestureState.moveX;
    this.updateRotation();
  };

  updateRotation = () => {
    const { rotationRatio } = this.props;
    const deltaRotation =
      ((this.currentX - this.startX) * 180) /
      (rotationRatio * this.props.width);
    this.setState({ rotation: this.startRotation + deltaRotation });
  };

  getImage = () => {
    const { rotation, rotatePeriod } = this.state;
    const { srcSet } = this.props;

    const mRotation = rotation - Math.floor(rotation / 360) * 360;
    const index = Math.floor(mRotation / rotatePeriod);

    return srcSet[index];
  };

  render() {
    const { width, height } = this.props;
    return (
      <View style={styles.container} {...this.panResponder.panHandlers}>
        <Image
          source={this.getImage()}
          style={[{ width, height }]}
          resizeMode="cover"
        />
      </View>
    );
  }
}

const styles = StyleSheet.create({
  container: {
    justifyContent: "center",
    alignItems: "center",
  },
});
