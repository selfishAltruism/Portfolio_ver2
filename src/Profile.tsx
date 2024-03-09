import Avatar from "@mui/material/Avatar";
import styled from "@emotion/styled";
import { useMediaQuery } from "react-responsive";

import RowBar from "./style/component/RowBar";
import { Title1, Title2 } from "./style/title";

import Button from "@mui/material/Button";

function Profile() {
  const isMobile = useMediaQuery({
    query: "(max-width:700px)",
  });

  const Container = styled.div`
    margin-top: -10px;
    width: 80%;

    display: flex;
    flex-direction: column;
    justify-content: center;
  `;

  const Img = styled(Avatar)`
    position: absolute;
    top: ${isMobile ? "20px" : "35px"};

    right: ${isMobile ? "10%" : "10%"};
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
      <Container>
        <Title1>강민규</Title1>
        <Info>Front-End Developer / officialkyus@gmail.com</Info>
        <RowBar width={isMobile ? "100%" : "85%"} />
        <MainContent>안전지대를 넘어서는 개발자</MainContent>
        <SubContent>
          변화와 문제를 두려워 하지 않고 계속해서 성장하는 개발자, 강민규입니다.
        </SubContent>
        <SubContent>
          즐겁게 코딩하는 자세와, 의사소통할 수 있는 능력이 개발의 본질이라고
          생각합니다.
        </SubContent>
        <Title1>Tech Stack</Title1>
        <Title2>Well Used</Title2>
        <Stacks>
          <Stack href="https://ecma-international.org/">Java Script</Stack>
          <Stack href="https://www.typescriptlang.org/docs/">Type Script</Stack>
          <Stack href="https://ko.legacy.reactjs.org/docs/getting-started.html">
            React
          </Stack>
          <Stack href="https://ko.redux.js.org/introduction/getting-started/">
            Redux
          </Stack>
          <Stack href="https://axios-http.com/kr/docs/intro">Axios</Stack>
          <Stack href="https://reactrouter.com/en/main">React Router</Stack>
          <SmallStack href="https://styled-components.com/docs">
            styled-component
          </SmallStack>
          <SmallStack href="https://react-hook-form.com/get-started">
            React Hook Form
          </SmallStack>
        </Stacks>
        <Title2>Ever Used</Title2>
        <Stacks>
          <SubStack href="https://nextjs.org/docs">Next.js</SubStack>
          <SubStack href="https://ko.mobx.js.org/README.html">MobX</SubStack>
          <SubStack href="https://next-auth.js.org/getting-started/example">
            NextAuth.js
          </SubStack>
          <SmallSubStack href="https://www.npmjs.com/package/react-responsive">
            react-responsive
          </SmallSubStack>
          <SubStack href="https://playwright.dev/docs/intro">
            Playwright
          </SubStack>
          <SubStack href="https://docs.cypress.io/guides/overview/why-cypress">
            Cypress
          </SubStack>
        </Stacks>
      </Container>
      <Img
        className="profile-img"
        alt="Kang Min Kyu"
        src="img/profile.jpg"
        sx={{ width: isMobile ? 70 : 120, height: isMobile ? 70 : 120 }}
      />
    </>
  );
}

export default Profile;
