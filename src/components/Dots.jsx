import React from "react";
import Circle from "../assets/circle.png";
import * as THREE from "three";
import { Canvas } from "react-three-fiber";
import styled from "styled-components";

const Background = styled.img`
  // width: 100vh;
  // background-repeat: no-repeat;
  // background-size: contain;
  // position: absolute;
`;

const Dots = () => {
  return <div></div>;
};

const AnimationCanvas = () => {
  return (
    <Canvas
      colorManagement={false}
      camera={{position: [100, 10, 0], fov: 75}}
    >
      <Dots />
    </Canvas>
  );
};

export default AnimationCanvas;
