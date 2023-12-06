import Avatar from "@mui/material/Avatar";
import styled from "@emotion/styled";
import { useMediaQuery } from "react-responsive";

import RowBar from "./styled_component/RowBar";

function Profile() {
  const Container = styled.div`
    position: absolute;

    left: 10%;
    top: 80px;

    width: 80%;

    display: flex;
    flex-direction: column;
    justify-content: center;
  `;

  const Img = styled(Avatar)`
    position: absolute;
    top: 85px;

    left: 80%;
  `;

  const Name = styled.span`
    font-size: 28px;
    font-weight: bold;
  `;

  const Info = styled.span`
    font-size: 15px;
    color: gray;
  `;

  const MainContent = styled.span`
    color: #323232;
    font-size: 23px;
  `;

  const SubContent = styled.span`
    color: #323232;
    font-size: 17px;
  `;

  const Stacks = styled.div`
    width: 100%;
    display: flex;
    flex-direction: row;

    margin-top: 8px;

    flex-wrap: wrap;
  `;

  const Stack = styled.div`
    display: flex;
    justify-content: center;
    align-items: center;

    width: 90px;
    height: 27px;

    border-radius: 3px;
    margin-right: 7px;
    margin-top: 7px;

    font-weight: bold;
    color: white;
    font-size: 14px;

    background-color: #323232;
    border: 2px solid #323232;
  `;

  const SubStack = styled(Stack)`
    color: #323232;
    font-size: 14px;

    background-color: white;
    border: 2px solid #323232;
  `;

  const SmallSubStack = styled(SubStack)`
    font-size: 10px;
  `;

  return (
    <>
      <Container>
        <Name>강민규</Name>
        <Info>Front-End Developer / officialkyus@gmail.com</Info>
        <RowBar width="85%" />
        <MainContent>안전지대를 넘어서는 개발자</MainContent>
        <SubContent>
          변화와 문제를 두려워 하지 않고 계속해서 성장하는 개발자, 강민규입니다.
        </SubContent>
        <SubContent>
          즐겁게 코딩하는 자세와, 의사소통할 수 있는 능력이 개발의 본질이라고
          생각합니다.
        </SubContent>
        <Stacks>
          <Stack>Java Script</Stack>
          <Stack>Type Script</Stack>
          <Stack>React</Stack>
          <Stack>Redux</Stack>
          <Stack>Next.js</Stack>
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
        sx={{ width: 100, height: 100 }}
      />
    </>
  );
}

export default Profile;
