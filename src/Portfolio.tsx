import * as React from "react";
import { useState, createContext, useContext, useReducer } from "react";
import "./style/Portfoilo.css";
import { useMediaQuery } from "react-responsive";

import Profile from "./Profile";
import Projects from "./Projects";
import Layout from "./Layout";
import PcProjectsContainer from "./style/PcProjectsContainer";
import PcProfileContainer from "./style/PcProfileContainer";

import { useRef } from "react";
import { Canvas, useFrame } from "@react-three/fiber";
import { Mesh } from "three";
import { Edges } from "@react-three/drei";

const RotatingDodecahedron = () => {
  const meshRef = useRef<Mesh>(null);

  // 회전 애니메이션
  useFrame(() => {
    if (meshRef.current) {
      meshRef.current.rotation.x += 0.003;
      meshRef.current.rotation.y += 0.003;
    }
  });

  return (
    <mesh ref={meshRef}>
      {/* 크기를 5로 설정한 12각형 Geometry */}
      <dodecahedronGeometry args={[5, 0]} />
      {/* 검은색 Material */}
      <meshStandardMaterial
        color="black"
        transparent={true} // 투명도 설정
        opacity={0} // 면의 투명도 (0은 완전히 투명, 1은 불투명)
        depthWrite={false} // 깊이 버퍼를 사용하지 않음
      />
      <Edges visible scale={1} color="#555555" lineWidth={2} />
    </mesh>
  );
};

export const MAXLENGTH_TIMEBAR = 750;

export const ditailContext = createContext<{
  TimePointDetailLength?: {
    university: number;
    studentCouncil: number;
    it_da: number;
    militaryEnlistment: number;
    shipList: number;
    portfolio: number;
  };
  universityDetailState?: number;
  studentCouncilDetailState?: number;
  it_daDetailState?: number;
  militaryEnlistmentDetailState?: number;
  shipListDetailState?: number;
  portfolioDetailState?: number;
}>({});

function Portfolio() {
  const isFullScreen = useMediaQuery({
    query: "(min-width:1500px)",
  });

  const TimePointDetailLength = {
    university: 200,
    studentCouncil: 460,
    it_da: 590,
    militaryEnlistment: 400,
    shipList: 200,
    portfolio: 200,
  };

  return (
    <Layout>
      <Canvas
        camera={{ position: [0, 0, 15], fov: 50 }} // 카메라 위치와 fov 조정
        style={{ width: "500px", height: "500px" }}
      >
        <ambientLight />
        <pointLight position={[10, 10, 10]} />
        <RotatingDodecahedron />
      </Canvas>
      {isFullScreen ? (
        <>
          <PcProfileContainer>
            <Profile />
          </PcProfileContainer>
          <PcProjectsContainer>
            <Projects />
          </PcProjectsContainer>
        </>
      ) : (
        <>
          <Profile />
          <Projects />
        </>
      )}
    </Layout>
  );
}

export default Portfolio;
