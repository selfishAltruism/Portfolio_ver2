import { useState } from "react";
import { useMediaQuery } from "react-responsive";
import { Canvas } from "@react-three/fiber";

import Avatar from "@mui/material/Avatar";
import styled from "@emotion/styled";

import { TechStack, StackDetail, RowBar, Title1, Title2 } from "src/entities";

export const Profile = () => {
  const handleScroll = (top: number) => {
    // window.scrollTo로 특정 좌표로 스크롤 (예: 1000px 아래로)
    window.scrollTo({
      top: top,
      behavior: "smooth",
    });
  };

  const [isStackDetail, onStackDetail] = useState(false);

  const isMobile = useMediaQuery({
    query: "(max-width:700px)",
  });

  const isHalfScreen = useMediaQuery({ query: "(max-width: 1300px)" });

  const Container = styled.div`
    margin-top: ${isHalfScreen ? "auto" : "-40px"};
    width: 90vw;
    height: ${isHalfScreen ? "auto" : "93vh"};

    display: flex;
    flex-direction: column;

    justify-content: center;
  `;

  const SubContainer = styled.div`
    width: 100%;

    display: flex;
    flex-direction: ${isHalfScreen ? "column" : "row"};

    margin-top: 30px;

    gap: 30px;
  `;

  const SubElement = styled.div`
    position: relative;
    width: ${isHalfScreen ? "100%" : "50%"};

    display: flex;
    flex-direction: column;
  `;

  const SeeMoreButton = styled.div`
    &:hover {
      font-weight: bold;
      color: #000000;
    }

    color: #494949;
    font-size: 20px;

    position: absolute;
    top: 42px;
    right: 0;
  `;

  const Img = styled(Avatar)`
    position: absolute;
    top: ${isMobile ? "17px" : "30px"};

    right: 5%;

    border: 2px solid #434343;
  `;

  const Info = styled.span`
    font-size: ${isMobile ? "11px" : "15px"};
    color: gray;
  `;

  const MainContent = styled.span`
    color: #434343;
    font-size: ${isMobile ? "20px" : "23px"};
    font-weight: bold;
  `;

  const SubContent = styled.span`
    color: #434343;
    font-size: ${isMobile ? "15px" : "17px"};
    font-weight: bold;

    > span {
      font-weight: normal;
    }
    margin-top: 8px;
  `;

  return (
    <>
      <Img
        className="profile-img"
        alt="Kang Min Kyu"
        src="img/profile.jpg"
        sx={{ width: isMobile ? 100 : 200, height: isMobile ? 100 : 200 }}
      />

      {isStackDetail ? (
        <StackDetail
          onStackDetail={(value: boolean) => {
            onStackDetail(value);
          }}
        />
      ) : null}
      <Container>
        <Title1>강민규</Title1>
        <Info>
          Front-End Developer / officialkyus@gmail.com /{" "}
          <a href="https://github.com/selfishAltruism/selfishAltruism">
            Github Profile
          </a>
        </Info>

        <RowBar width={"90%"} />
        <MainContent>안전지대를 넘어서는 개발자 😎</MainContent>
        <SubContent>
          변화와 문제를 두려워 하지 않고 계속해서 성장하는 개발자, 강민규입니다.
        </SubContent>
        <SubContent>
          즐겁게 코딩하는 자세와 의사소통할 수 있는 능력이 개발의 본질이라고
          생각합니다.
        </SubContent>
        <SubContainer>
          <SubElement>
            <Title1>Tech Stack</Title1>
            <RowBar width={"100%"} />
            <SeeMoreButton
              onClick={() => {
                onStackDetail(true);
              }}
            >
              🌟See detail🌟
            </SeeMoreButton>
            <Canvas
              camera={{ position: [0, 0, 15], fov: 43 }} // 카메라 위치와 fov 조정
              style={{
                width: "100%",
                height: isMobile ? "260px" : "370px",
                zIndex: 10,
                marginTop: "30px",
              }}
            >
              <ambientLight />
              <pointLight position={[10, 10, 10]} />
              <TechStack />
            </Canvas>
          </SubElement>
          <SubElement>
            <Title1>Resume</Title1>
            <a href="/경력기술서_강민규.pdf" download="경력기술서_강민규.pdf">
              <SeeMoreButton>PDF download</SeeMoreButton>
            </a>

            <RowBar width={"100%"} />

            <SubContent>
              <span>클릭 시 관련 서비스 및 프로젝트로 이동할 수 있습니다.</span>
            </SubContent>

            <SubContent>2021년</SubContent>

            <Title2
              onClick={() => {
                handleScroll(isHalfScreen ? 2900 : 2500);
              }}
            >
              💻 중앙대학교 다빈치 SW AI TECH FAIR-SW 창업 경진대회 최우수상{" "}
              <span> IT-DA Project</span>
            </Title2>
            <Title2>💻 2021년 Uni-DTOHON 중앙대학교 대표 주최진</Title2>
            <SubContent>2023년</SubContent>
            <Title2
              onClick={() => {
                handleScroll(isHalfScreen ? 1200 : 800);
              }}
            >
              💻 비즈피어(주) : 프론트엔드 개발 인턴
              <span> Grid Library</span>
            </Title2>
            <SubContent>2024 & 2025년</SubContent>
            <Title2
              onClick={() => {
                handleScroll(isHalfScreen ? 1200 : 800);
              }}
            >
              💻 중앙대학교 ICT 위원회 : 프론트엔드 개발 팀장
              <span> CAUSW Web Service</span>
            </Title2>
            <Title2
              onClick={() => {
                handleScroll(isHalfScreen ? 1200 : 800);
              }}
            >
              💻 스타트업 Fity : 앱 개발 직무
              <span> Fitrace App Service</span>
            </Title2>
            <Title2
              onClick={() => {
                handleScroll(isHalfScreen ? 1200 : 800);
              }}
            >
              💻 주식회사 악어에듀 : 웹 개발 직무
              <span> AKEO Web Service</span>
            </Title2>
          </SubElement>
        </SubContainer>
      </Container>
    </>
  );
};
