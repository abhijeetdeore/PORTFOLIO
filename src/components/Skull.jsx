import React, { useEffect, useRef } from "react";
import { useGLTF, useAnimations } from "@react-three/drei";
import { useFrame } from "@react-three/fiber";
import { easing } from "maath";

const pointer = { x: 0, y: 0 };

if (typeof window !== "undefined") {
  window.addEventListener("mousemove", (e) => {
    pointer.x = (e.clientX / window.innerWidth - 0.5) * 2;
    pointer.y = -(e.clientY / window.innerHeight - 0.5) * 2;
  });
}

export function Skull({ scale, position, ...props }) {
  const group = useRef();
  const { nodes, materials, animations } = useGLTF(
    "/models/tenhun_falling_spaceman_fanart.glb"
  );
  const { actions } = useAnimations(animations, group);

  useEffect(() => {
    if (animations.length > 0) {
      actions[animations[0].name]?.play();
    }
  }, [actions, animations]);

  // Base Y position (dropped down a bit)
  const baseY = position?.[1] ?? -1.5;

  useFrame((state, delta) => {
    if (!group.current) return;

    // Floating bob
    group.current.position.y = baseY + Math.sin(state.clock.elapsedTime * 1.2) * 0.08;

    // Smooth hover rotation following mouse
    easing.dampE(
      group.current.rotation,
      [
        -Math.PI / 2 + pointer.y * 0.25,
        -0.2 + pointer.x * 0.4,
        2.2,
      ],
      0.15,
      delta
    );
  });

  return (
    <group
      ref={group}
      {...props}
      dispose={null}
      scale={scale || 0.3}
      position={[
        position?.[0] ?? 1.3,
        baseY,
        position?.[2] ?? 0,
      ]}
    >
      <group name="Sketchfab_Scene">
        <group name="Sketchfab_model">
          <group name="Root">
            <group name="metarig">
              <primitive object={nodes.metarig_rootJoint} />
              <skinnedMesh name="Cube001_0" geometry={nodes.Cube001_0.geometry} material={materials["AstronautFallingTexture.png"]} skeleton={nodes.Cube001_0.skeleton} />
              <skinnedMesh name="Cube005_0" geometry={nodes.Cube005_0.geometry} material={materials["AstronautFallingTexture.png"]} skeleton={nodes.Cube005_0.skeleton} />
              <skinnedMesh name="Cube002_0" geometry={nodes.Cube002_0.geometry} material={materials["AstronautFallingTexture.png"]} skeleton={nodes.Cube002_0.skeleton} />
              <skinnedMesh name="Plane_0" geometry={nodes.Plane_0.geometry} material={materials["AstronautFallingTexture.png"]} skeleton={nodes.Plane_0.skeleton} />
              <skinnedMesh name="Cube008_0" geometry={nodes.Cube008_0.geometry} material={materials["AstronautFallingTexture.png"]} skeleton={nodes.Cube008_0.skeleton} />
              <skinnedMesh name="Cube004_0" geometry={nodes.Cube004_0.geometry} material={materials["AstronautFallingTexture.png"]} skeleton={nodes.Cube004_0.skeleton} />
              <skinnedMesh name="Cube003_0" geometry={nodes.Cube003_0.geometry} material={materials["AstronautFallingTexture.png"]} skeleton={nodes.Cube003_0.skeleton} />
              <skinnedMesh name="Cube_0" geometry={nodes.Cube_0.geometry} material={materials["AstronautFallingTexture.png"]} skeleton={nodes.Cube_0.skeleton} />
              <skinnedMesh name="Cube009_0" geometry={nodes.Cube009_0.geometry} material={materials["AstronautFallingTexture.png"]} skeleton={nodes.Cube009_0.skeleton} />
              <skinnedMesh name="Cube011_0" geometry={nodes.Cube011_0.geometry} material={materials["AstronautFallingTexture.png"]} skeleton={nodes.Cube011_0.skeleton} />
              <group name="Cube001" />
              <group name="Cube005" />
              <group name="Cube002" />
              <group name="Plane" />
              <group name="Cube008" />
              <group name="Cube004" />
              <group name="Cube003" />
              <group name="Cube" />
              <group name="Cube009" rotation={[-2.708, 0.013, -1.447]} scale={1.307} />
              <group name="Cube011" />
            </group>
          </group>
        </group>
      </group>
    </group>
  );
}

useGLTF.preload("/models/tenhun_falling_spaceman_fanart.glb");
