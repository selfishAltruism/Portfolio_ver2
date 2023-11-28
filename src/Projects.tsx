import styled from "@emotion/styled";

import Project from "./Project";

const Projects = () => {
  const Container = styled.div`
    position: absolute;

    width: 80%;

    top: 310px;
    left: 50%;
    transform: translate(-50%, 0%);

    display: flex;
    flex-direction: column;
    justify-content: center;
  `;
  return (
    <Container>
      <Project period="" title="" content="" githubURL="" notionURL="" />
      <Project period="" title="" content="" githubURL="" notionURL="" />
    </Container>
  );
};

export default Projects;
