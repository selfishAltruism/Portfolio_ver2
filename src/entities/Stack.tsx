import React, { useRef, useMemo, useState } from "react";
import { useFrame } from "@react-three/fiber";
import * as THREE from "three";
import { Edges, Text } from "@react-three/drei";

import { stack } from "src/shared";

// 정20면체의 꼭지점 좌표를 가져오는 함수
const getUniqueIcosahedronVertexPositions = (): THREE.Vector3[] => {
  const geometry = new THREE.IcosahedronGeometry(5, 0); // 정20면체 지오메트리 생성
  const positions = geometry.attributes.position.array;

  // 중복을 피하기 위한 Map 객체 생성
  const uniqueVertices = new Map<string, THREE.Vector3>();

  // positions 배열을 순회하면서 꼭지점 좌표를 추출
  for (let i = 0; i < positions.length; i += 3) {
    const x = positions[i];
    const y = positions[i + 1];
    const z = positions[i + 2];

    // 좌표를 문자열로 변환하여 Map의 키로 사용
    const key = `${x},${y},${z}`;
    if (!uniqueVertices.has(key)) {
      uniqueVertices.set(key, new THREE.Vector3(x, y, z));
    }
  }

  return Array.from(uniqueVertices.values());
};

export const TechStack: React.FC = () => {
  const groupRef = useRef<THREE.Group>(null);
  const [isHovered, setIsHovered] = useState(false);

  // 회전 애니메이션
  useFrame(({ camera }) => {
    if (!isHovered && groupRef.current) {
      groupRef.current.rotation.x += 0.007;
      groupRef.current.rotation.y += 0.007;
    }

    if (isHovered && groupRef.current) {
      groupRef.current.rotation.x += 0.001;
      groupRef.current.rotation.y += 0.001;
    }

    // 각 텍스트가 항상 카메라를 향하도록 회전
    groupRef.current?.children.forEach((child) => {
      if (child instanceof THREE.Mesh && child.userData.text) {
        child.lookAt(camera.position);
      }
    });
  });

  // 정20면체의 꼭지점 좌표를 가져옵니다
  const vertexPositions = useMemo(
    () => getUniqueIcosahedronVertexPositions(),
    []
  );

  return (
    <group
      ref={groupRef}
      onPointerOver={() => setIsHovered(true)} // 마우스 오버 시
      onPointerOut={() => setIsHovered(false)} // 마우스 아웃 시
    >
      <mesh>
        {/* 정20면체 Geometry */}
        <icosahedronGeometry args={[5, 0]} />
        {/* 면을 투명하게 설정 */}
        <meshStandardMaterial
          color="white"
          transparent={true}
          opacity={0}
          depthWrite={false}
        />

        {/* 테두리 (Wireframe) 추가 */}
        <Edges visible lineWidth={1} scale={0.85} color="#8a8a8a" />
      </mesh>

      {/* 꼭지점에 텍스트 추가 */}
      {vertexPositions.map((position, index) =>
        index < 12 ? (
          <Text
            key={index}
            position={[position.x, position.y, position.z]}
            fontSize={0.7}
            color="#222222"
            anchorX="center"
            anchorY="middle"
            // 각 Text에 userData를 추가하여 나중에 참조할 수 있도록 설정
            userData={{ text: true }}
          >
            {stack[index]?.name || `Item ${index + 1}`}
          </Text>
        ) : null
      )}
    </group>
  );
};
