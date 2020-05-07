import React from "react";
import {
  AppRegistry,
  asset,
  Pano,
  Text,
  View,
  StyleSheet,
  Box,
} from "react-vr";

class Row extends React.Component {
  render() {
    return (
      <View style={[{ backgroundColor: this.props.color }, styles.row]}>
        <Text style={styles.text}>{this.props.color}</Text>
      </View>
    );
  }
}

export default class Basics extends React.Component {
  constructor(props) {
    super(props);
    this.state = {
      color: "red",
    };
  }

  render() {
    return (
      <View style={styles.container}>
        <Pano source={asset("starry-sky.jpg")} />
        <Row color="red" />
        <Row color="blue" />
        <Row color="green" />

        <Box
          dimWidth={0.5}
          dimHeight={0.5}
          dimDepth={0.5}
          wireframe={true}
          onEnter={() => this.setState({ color: "green" })}
          onExit={() => this.setState({ color: "blue" })}
          style={{
            color: this.state.color,
            transform: [
              { translate: [0, 0, -3] },
              { translateY: 2 },
              { translateX: -0.9 },
              { rotateY: 45 },
              { rotateZ: 50 },
              { rotateX: 32 },
            ],
          }}
        ></Box>
      </View>
    );
  }
}

const styles = StyleSheet.create({
  text: {
    fontSize: 0.2,
    textAlign: "center",
  },
  row: {
    width: 0.5,
    height: 0.3,
    margin: 0.1,
  },
  container: {
    flex: 1,
    width: 2,
    alignItems: "center",
    flexDirection: "row",
    transform: [{ translate: [-1, 0, -3] }],
  },
});

AppRegistry.registerComponent("Basics", () => Basics);
