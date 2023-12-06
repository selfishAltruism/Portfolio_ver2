import Button from "@mui/material/Button";
import styled from "@emotion/styled";
import { useMediaQuery } from "react-responsive";

import ColumnBar from "./styled_component/ColumnBar";

type Prop = {
  period: string;
  title: string;
  content: string;
  notionURL: string;
  githubURL: string;
  isSub?: boolean;
  isStudy?: boolean;
};

function Project(prop: Prop) {
  const { period, title, content, notionURL, githubURL, isSub, isStudy } = prop;
  const isHalfScreen = useMediaQuery({ query: "(max-width: 1100px)" });

  const isMobile = useMediaQuery({
    query: "(max-width:700px)",
  });

  const Container = styled.div`
    width: 100%;
    height: ${isMobile ? "250px" : "120px"};

    display: flex;
    flex-direction: row;
    align-items: center;
    justify-content: space-between;

    background-color: ${isStudy ? "#838383" : isSub ? "#5d5d5d" : "#323232"};

    margin-top: 20px;

    border-radius: 5px;
  `;

  const Content = styled.div`
    width: ${isMobile ? "90%" : "71%"};
    height: 80%;

    display: flex;
    flex-direction: column;
    justify-content: center;

    margin-left: 8px;
  `;

  const Period = styled.span`
    color: white;
    opacity: 0.8;

    margin-bottom: -2px;
  `;

  const Title = styled.span`
    color: white;
    font-size: 22px;

    font-weight: bold;
  `;

  const SubTitle = styled.span`
    font-size: 14px;
    color: white;

    margin-top: 8px;
  `;

  const StyleGitButton = styled(Button)`
    width: ${isHalfScreen ? "50px" : "130px"};
    color: white;
    margin-left: 8px;
    border-color: white;
  `;

  const StyleDetailButton = styled(Button)`
    width: ${isHalfScreen ? "50px" : "130px"};
    color: #323232;
    margin-left: 8px;
    margin-right: 20px;
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
        <div style={{ width: isHalfScreen ? "58px" : "138px" }}></div>
      ) : (
        <StyleGitButton
          variant="outlined"
          color="secondary"
          onClick={() => window.open(githubURL)}
        >
          {isHalfScreen ? "Git" : "Git Hub"}
        </StyleGitButton>
      )}

      <StyleDetailButton
        variant="contained"
        color="secondary"
        onClick={() => window.open(notionURL)}
      >
        {isHalfScreen ? "Detail" : "Detail Page"}
      </StyleDetailButton>
    </Container>
  );
}

export default Project;
