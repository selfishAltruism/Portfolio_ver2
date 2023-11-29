import styled from "@emotion/styled";

import Project from "./Project";

const Projects = () => {
  const Title = styled.span`
    font-size: 28px;
    font-weight: bold;
  `;
  const Container = styled.div`
    position: absolute;

    width: 80%;

    top: 320px;
    left: 50%;
    transform: translate(-50%, 0%);

    display: flex;
    flex-direction: column;
    justify-content: center;
  `;
  return (
    <Container>
      <Title>Development Record</Title>
      <Project
        period="During internship, 2023.11.21~2023.11.31"
        title="Severless social login Development"
        content="NextAuth.js를 활용하여 kakao, google, naver 계정으로 로그인 가능한 serverless social login system 구현"
        githubURL="none"
        notionURL="/sociallogin"
      />
      <Project period="" title="" content="" githubURL="" notionURL="" />
    </Container>
  );
};

export default Projects;
