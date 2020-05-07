import React from "react";
import {
  AppRegistry,
  asset,
  Pano,
  Text,
  View,
  StyleSheet,
  Box,
  Cylinder,
  Sphere,
  Plane,
} from "react-vr";
import Shape, { shapes } from "./vr/components/Shape";

export default class Basics extends React.Component {
  constructor(props) {
    super(props);
    this.state = {
      gameShapes: [0, 1, 2],
    };
  }

  newGameSet() {
    console.log("New Game!!");

    let baseShapeId = Math.floor(Math.random() * shapes.length);
    console.log(baseShapeId);

    let specialShapeId = baseShapeId;
    while (specialShapeId === baseShapeId) {
      specialShapeId = Math.floor(Math.random() * shapes.length);
    }
    console.log(specialShapeId);

    let newGameShapes = [];
    for (let i = 0; i < this.state.gameShapes.length; i++) {
      newGameShapes[i] = baseShapeId;
    }
    let specialIndex = Math.floor(Math.random() * newGameShapes.length);
    newGameShapes[specialIndex] = specialShapeId;
    console.log(newGameShapes);

    this.setState({ gameShapes: newGameShapes });
  }

  componentDidMount() {
    this.newGameSet();
  }

  render() {
    return (
      <View style={styles.game}>
        <Pano source={asset("light-show.jpg")}></Pano>
        <Text style={styles.text}>Find the odd Shape !!</Text>
        {this.state.gameShapes.map((index, shape) => {
          return (
            <View key={index}>
              <Shape
                key={index}
                shapeNum={shape}
                colorNum={index}
                transform={[{ translate: [(index - 1.5) * 1.5, 0, -5] }]}
              />
            </View>
          );
        })}
      </View>
    );
  }
}

const styles = StyleSheet.create({
  game: {
    transform: [{ translate: [-3, 0, 0] }],
  },
  text: {
    fontSize: 0.5,
    textAlign: "center",
    color: "#fff",
    transform: [{ translate: [0, 2, -5] }],
  },
});

AppRegistry.registerComponent("Basics", () => Basics);
