import React, { useCallback, useMemo, useRef } from "react";
import Circle from "../assets/circle.png";
import * as THREE from "three";
import { Canvas, useFrame, useLoader } from 'react-three-fiber';
import styled from "styled-components";

const Background = styled.div`
  position: absolute;
  top: 0;
  left: 0;
  z-index: -100;
  width: 100%;
  height: 40vh;
`;

function Points() {
  const imgTex = useLoader(THREE.TextureLoader, Circle);
  const bufferRef = useRef();

  let t = 0;
  let f = 0.002;
  let a = 3;
  const graph = useCallback((x, z) => {
    return Math.sin(f * (x ** 2 + z ** 2 + t)) * a;
  }, [t, f, a])

  const count = 100
  const sep = 3
  let positions = useMemo(() => {
    let positions = []

    for (let xi = 0; xi < count; xi++) {
      for (let zi = 0; zi < count; zi++) {
        let x = sep * (xi - count / 2);
        let z = sep * (zi - count / 2);
        let y = graph(x, z);
        positions.push(x, y, z);
      }
    }

    return new Float32Array(positions);
  }, [count, sep, graph])

  useFrame(() => {
    t += 10

    const positions = bufferRef.current.array;

    let i = 0;
    for (let xi = 0; xi < count; xi++) {
      for (let zi = 0; zi < count; zi++) {
        let x = sep * (xi - count / 2);
        let z = sep * (zi - count / 2);

        positions[i + 1] = graph(x, z);
        i += 3;
      }
    }

    bufferRef.current.needsUpdate = true;
  })

  return (
    <points>
      <bufferGeometry attach="geometry">
        <bufferAttribute
          ref={bufferRef}
          attachObject={['attributes', 'position']}
          array={positions}
          count={positions.length / 3}
          itemSize={3}
        />
      </bufferGeometry>

      <pointsMaterial
        attach="material"
        map={imgTex}
        color={0x00AAFF}
        size={0.6}
        sizeAttenuation
        transparent={false}
        alphaTest={0.5}
        opacity={1}
      />
    </points>
  );
}

const AnimationCanvas = () => {
  return (
    <Background>
      <Canvas
        colorManagement={false}
        camera={{position: [100, 10, 0], fov: 75}}
      >
        <Points />
      </Canvas>
    </Background>
  );
};

export default AnimationCanvas;
