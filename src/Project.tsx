import Button from "@mui/material/Button";
import styled from "@emotion/styled";

import ColumnBar from "./style_component/ColumnBar";

type Prop = {
  period: string;
  title: string;
  content: string;
  notionURL: string;
  githubURL: string;
};

function Project(prop: Prop) {
  const { period, title, content, notionURL, githubURL } = prop;

  const Container = styled.div`
    width: 100%;
    height: 100px;

    display: flex;
    flex-direction: row;
    align-items: center;

    background-color: #323232;

    margin-top: 20px;

    border-radius: 5px;
  `;

  const Content = styled.div`
    width: 71%;
    height: 80%;

    display: flex;
    flex-direction: column;
    justify-content: center;

    margin-left: 8px;
  `;

  const Period = styled.span`
    color: white;
    opacity: 0.8;
  `;

  const Title = styled.span`
    color: white;
    font-size: 22px;

    font-weight: bold;
  `;

  const SubTitle = styled.span`
    font-size: 15px;
    color: white;
  `;

  const StyleGitButton = styled(Button)`
    width: 100px;
    color: white;
    margin-left: 8px;
    border-color: white;
  `;

  const StyleDetailButton = styled(Button)`
    color: #323232;
    margin-left: 8px;
    background-color: white;
  `;

  return (
    <Container>
      <ColumnBar height="84%" />
      <Content>
        <Period>{period}</Period>
        <Title>{title}</Title>
        <SubTitle>{content}</SubTitle>
      </Content>
      {githubURL === "none" ? (
        <div style={{ width: "108px" }}></div>
      ) : (
        <StyleGitButton variant="outlined" color="error">
          Git Hub
        </StyleGitButton>
      )}

      <StyleDetailButton variant="contained" color="error">
        Detail Page
      </StyleDetailButton>
    </Container>
  );
}

export default Project;
