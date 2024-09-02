import Avatar from "@mui/material/Avatar";
import styled from "@emotion/styled";
import { useMediaQuery } from "react-responsive";

import RowBar from "./style/component/RowBar";
import { Title1, Title2 } from "./style/title";

import Button from "@mui/material/Button";

import { TechStack } from "./entities";

import { Canvas } from "@react-three/fiber";
import { red } from "@mui/material/colors";
import { useState } from "react";

function Profile() {
  const [isStackDetail, onStackDetail] = useState(false);

  const isMobile = useMediaQuery({
    query: "(max-width:700px)",
  });

  const Container = styled.div`
    margin-top: ${isMobile ? "auto" : "-60px"};
    width: 90vw;
    height: ${isMobile ? "auto" : "93vh"};

    display: flex;
    flex-direction: column;

    justify-content: center;
  `;

  const SubContainer = styled.div`
    width: 100%;

    display: flex;
    flex-direction: ${isMobile ? "column" : "row"};

    margin-top: 30px;

    gap: 30px;
  `;

  const SubElement = styled.div`
    position: relative;
    width: ${isMobile ? "100%" : "50%"};

    display: flex;
    flex-direction: column;
  `;

  const SeeMoreButton = styled.div`
    color: #494949;
    font-size: 20px;
    font-weight: bold;

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
    font-size: ${isMobile ? "17px" : "23px"};
  `;

  const SubContent = styled.span`
    color: #434343;
    font-size: ${isMobile ? "11px" : "17px"};
  `;

  const StackContainer = styled.div`
    transform: translate(-50%, -50%);
    position: fixed;

    top: 55%;
    left: 50%;

    background-color: white;

    border-radius: 10px;

    z-index: 20;

    padding: 20px;

    width: 83%;
  `;

  const GrayBackGround = styled.div`
    position: fixed;
    top: 45px;
    left: 0px;

    width: 100vw;
    height: calc(100vh - 45px);
    z-index: 19;

    background-color: #000000b5;
  `;

  const Stacks = styled.div`
    width: 100%;
    display: flex;
    flex-direction: row;

    flex-wrap: wrap;
  `;

  const Stack = styled.a`
    &:hover {
      background-color: #626262;
      border-color: #626262;
      transition: all ease 0.3s;
    }

    text-decoration-line: none;

    display: flex;
    justify-content: center;
    align-items: center;

    width: ${isMobile ? "85px" : "120px"};
    height: ${isMobile ? "22px" : "28px"};

    border-radius: 2px;
    margin-right: 5px;
    margin-top: 0px;
    margin-bottom: 5px;

    font-weight: bold;
    color: white;
    font-size: ${isMobile ? "12px" : "16px"};

    background-color: #434343;
    border: 2px solid #434343;

    box-shadow: 1px 3px 3px 0 rgb(0 0 0 / 60%);
  `;

  const SmallStack = styled(Stack)`
    font-size: ${isMobile ? "8px" : "13px"};
  `;

  const SubStack = styled(Stack)`
    &:hover {
      color: white;
      transition: all ease 0.3s;
    }
    color: #434343;

    background-color: white;
    border: 2px solid #434343;
  `;

  const SmallSubStack = styled(SubStack)`
    font-size: ${isMobile ? "8px" : "13px"};
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
        <>
          <GrayBackGround
            onClick={() => {
              onStackDetail(false);
            }}
          />
          <StackContainer>
            <Title2>Well Used</Title2>
            <Stacks>
              <Stack href="https://ecma-international.org/" target="_blank">
                Java Script
              </Stack>
              <Stack
                href="https://www.typescriptlang.org/docs/"
                target="_blank"
              >
                Type Script
              </Stack>
              <Stack
                href="https://ko.legacy.reactjs.org/docs/getting-started.html"
                target="_blank"
              >
                React
              </Stack>
              <Stack href="https://nextjs.org/docs" target="_blank">
                Next.js
              </Stack>
              <Stack
                href="https://learn.microsoft.com/ko-kr/cpp/c-language/?view=msvc-170"
                target="_blank"
              >
                C & C++
              </Stack>
              <Stack
                href="https://ko.redux.js.org/introduction/getting-started/"
                target="_blank"
              >
                Redux
              </Stack>
              <Stack
                href="https://axios-http.com/kr/docs/intro"
                target="_blank"
              >
                Axios
              </Stack>
              <Stack href="https://reactrouter.com/en/main" target="_blank">
                React Router
              </Stack>
              <SmallStack
                href="https://emotion.sh/docs/introduction"
                target="_blank"
              >
                Emotion
              </SmallStack>
              <SmallStack
                href="https://react-hook-form.com/get-started"
                target="_blank"
              >
                React Hook Form
              </SmallStack>
              <Stack href="https://zustand-demo.pmnd.rs/" target="_blank">
                Zustand
              </Stack>
              <Stack href="https://mswjs.io/" target="_blank">
                MSW
              </Stack>
            </Stacks>
            <Title2>Ever Used</Title2>
            <Stacks>
              <SubStack
                href="https://ko.mobx.js.org/README.html"
                target="_blank"
              >
                MobX
              </SubStack>
              <SubStack href="https://tanstack.com" target="_blank">
                React Query
              </SubStack>
              <SubStack href="https://tailwindcss.com" target="_blank">
                Tailwind
              </SubStack>
              <SubStack
                href="https://web.stanford.edu/class/cs140/projects/pintos/pintos.html"
                target="_blank"
              >
                PintOS
              </SubStack>
              <SubStack
                href="https://next-auth.js.org/getting-started/example"
                target="_blank"
              >
                NextAuth.js
              </SubStack>
              <SmallSubStack
                href="https://www.npmjs.com/package/react-responsive"
                target="_blank"
              >
                react-responsive
              </SmallSubStack>
              <SubStack
                href="https://playwright.dev/docs/intro"
                target="_blank"
              >
                Playwright
              </SubStack>
              <SubStack
                href="https://docs.cypress.io/guides/overview/why-cypress"
                target="_blank"
              >
                Cypress
              </SubStack>
              <SubStack href="https://recharts.org/en-US/" target="_blank">
                Recharts
              </SubStack>
            </Stacks>
          </StackContainer>
        </>
      ) : null}
      <Container>
        <Title1>강민규</Title1>
        <Info>Front-End Developer / officialkyus@gmail.com</Info>
        <RowBar width={"90%"} />
        <MainContent>안전지대를 넘어서는 개발자</MainContent>
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
              See Detail..
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
              <SeeMoreButton>PDF Download..</SeeMoreButton>
            </a>

            <RowBar width={"100%"} />
            <SubContent>2021년 하반기</SubContent>
            <Title2>
              중앙대학교 2021년 다빈치 SW AI TECH FAIR-SW AI 창업 아이디어
              경진대회 최우수상
            </Title2>
            <Title2>
              교육부 2021년도 학생 창업 유망팀 300 경진대회 예비 창업 유망팀
              최종선정
            </Title2>
            <Title2>2021년 Uni-DTOHON 중앙대학교 대표 주최진</Title2>
            <SubContent>2023년 하반기</SubContent>
            <Title2>비즈피어(주) 프론트엔드 개발 인턴</Title2>
            <SubContent>2024년 상반기</SubContent>
            <Title2>중앙대학교 ICT 위원회 프론트엔드 개발 팀장</Title2>
            <SubContent>2024년 하반기</SubContent>
            <Title2>제6회 Future Finance A.I. Challenge 본선 진출</Title2>
          </SubElement>
        </SubContainer>
      </Container>
    </>
  );
}

export default Profile;
