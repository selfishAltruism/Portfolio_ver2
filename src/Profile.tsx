import Avatar from "@mui/material/Avatar";
import styled from "@emotion/styled";
import { useMediaQuery } from "react-responsive";

import RowBar from "./style/component/RowBar";
import { Title1 } from "./style/title";

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
    font-size: ${isMobile ? "10px" : "15px"};
    color: gray;
  `;

  const MainContent = styled.span`
    color: #323232;
    font-size: ${isMobile ? "17px" : "23px"};
  `;

  const SubContent = styled.span`
    color: #323232;
    font-size: ${isMobile ? "8px" : "17px"};
  `;

  const Stacks = styled.div`
    width: 100%;
    display: flex;
    flex-direction: row;

    flex-wrap: wrap;
  `;

  const Stack = styled.div`
    display: flex;
    justify-content: center;
    align-items: center;

    margin-bottom: 6px;

    width: ${isMobile ? "60px" : "120px"};
    height: ${isMobile ? "22px" : "27px"};

    border-radius: 2px;
    margin-right: 7px;
    margin-top: 0px;

    font-weight: bold;
    color: white;
    font-size: ${isMobile ? "9px" : "16px"};

    background-color: #323232;
    border: 2px solid #323232;
  `;

  const SubStack = styled(Stack)`
    color: #323232;

    background-color: white;
    border: 2px solid #323232;
  `;

  const SmallSubStack = styled(SubStack)`
    font-size: ${isMobile ? "7px" : "13px"};
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
        <Stacks>
          <Stack>Java Script</Stack>
          <Stack>Type Script</Stack>
          <Stack>React</Stack>
          <Stack>Redux</Stack>
        </Stacks>
        <Stacks>
          <SubStack>Next.js</SubStack>
          <SmallSubStack>React Context</SmallSubStack>
          <SmallSubStack>React Hook Form</SmallSubStack>
          <SmallSubStack>styled-component</SmallSubStack>
          <SubStack>NextAuth.js</SubStack>
          <SubStack>Cypress</SubStack>
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
