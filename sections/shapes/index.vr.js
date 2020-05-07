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

export default class Basics extends React.Component {
  render() {
    return (
      <View>
        <Pano source={asset("light-show.jpg")}></Pano>
        <Box
          dimWidth={0.5}
          dimHeight={0.5}
          dimDepth={0.5}
          wireframe={true}
          style={{
            color: "#fff",
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
        <Cylinder
          dimHeight={0.5}
          radiusBottom={0.5}
          radiusTop={0.5}
          segments={15}
          wireframe={true}
          style={{
            color: "#fff",
            transform: [
              { translate: [0, 1, -3] },
              { rotateY: 45 },
              { rotateZ: 45 },
            ],
          }}
        ></Cylinder>
        <Sphere
          radius={0.5}
          widthSegments={10}
          heightSegments={10}
          // wireframe={true}
          texture={"http://i.imgur.com/bEBqA.jpg"}
          style={{
            color: "#fff",
            transform: [
              { translate: [0, 2, -3] },
              { rotateY: 45 },
              { rotateZ: 45 },
            ],
          }}
        ></Sphere>
        <Plane
          dimHeight={2}
          dimWidth={2}
          texture={"http://i.imgur.com/3FAR9Kf.jpg"}
          style={{
            color: "#fff",
            transform: [{ translate: [-2, 1, -3] }, { rotateX: 45 }],
          }}
        ></Plane>
      </View>
    );
  }
}

AppRegistry.registerComponent("Basics", () => Basics);
