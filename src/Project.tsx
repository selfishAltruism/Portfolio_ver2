import Button from "@mui/material/Button";
import styled from "@emotion/styled";
import { useMediaQuery } from "react-responsive";

import ColumnBar from "./style/component/ColumnBar";

type Prop = {
  period: string;
  title: string;
  content: string;
  notionURL: string;
  githubURL: string;
  isSub?: boolean;
  isStudy?: boolean;
  techStack?: string[];
};

function Project(prop: Prop) {
  const {
    period,
    title,
    content,
    notionURL,
    githubURL,
    isSub,
    isStudy,
    techStack,
  } = prop;
  const isHalfScreen = useMediaQuery({ query: "(max-width: 1100px)" });

  const isMobile = useMediaQuery({
    query: "(max-width:700px)",
  });

  const Container = styled.div`
    width: 100%;
    height: ${isMobile ? "90px" : "120px"};

    display: flex;
    flex-direction: row;
    align-items: center;
    justify-content: space-between;

    background-color: ${isStudy ? "#838383" : isSub ? "#5d5d5d" : "#323232"};

    margin-bottom: ${isMobile ? "5px" : "10px"};

    border-radius: 5px;
  `;

  const Content = styled.div`
    position: relative;

    width: ${isMobile ? "95%" : "71%"};
    height: 80%;

    display: flex;
    flex-direction: column;
    justify-content: ${isMobile ? "" : "center"};

    margin-left: 8px;
  `;

  const Period = styled.span`
    color: white;
    opacity: 0.8;

    margin-bottom: -2px;

    font-size: ${isMobile ? "12px" : "16px"};
  `;

  const Title = styled.span`
    color: white;
    font-size: ${isMobile ? "17px" : "22px"};

    font-weight: bold;
  `;

  const SubTitle = styled.span`
    font-size: ${isMobile ? "17px" : "14px"};
    color: white;

    margin-top: 8px;
  `;

  const StyleGitButton = styled(Button)`
    width: ${isHalfScreen ? "50px" : "130px"};
    height: ${isHalfScreen ? "22px" : ""};
    color: white;
    margin-left: 8px;
    border-color: white;
  `;

  const StyleDetailButton = styled(Button)`
    width: ${isHalfScreen ? "50px" : "130px"};
    height: ${isHalfScreen ? "22px" : ""};
    color: #323232;
    margin-left: 8px;
    margin-right: 20px;
    background-color: white;
  `;

  const GitButton = () =>
    githubURL === "none" ? (
      <div style={{ width: isHalfScreen ? "58px" : "138px" }}></div>
    ) : (
      <StyleGitButton
        variant="outlined"
        color="secondary"
        onClick={() => window.open(githubURL)}
      >
        {isHalfScreen ? "Git" : "Git Hub"}
      </StyleGitButton>
    );

  const DetailButton = () => (
    <StyleDetailButton
      variant="contained"
      color="secondary"
      onClick={() => window.open(notionURL)}
    >
      {isHalfScreen ? "Detail" : "Detail Page"}
    </StyleDetailButton>
  );

  const ButtonDiv = styled.div`
    position: absolute;
    right: -10px;
    bottom: 0px;

    display: flex;
    flex-direction: row;
    align-items: center;
    justify-content: right;

    margin-top: 10px;
  `;

  const Stacks = styled.div`
    width: 100%;
    display: flex;
    flex-direction: row;
    margin-top: 6px;
    margin-bottom: -10px;

    flex-wrap: wrap;
  `;

  const Stack = styled.div`
    display: flex;
    justify-content: center;
    align-items: center;

    width: 80px;
    height: 16px;

    border-radius: 1px;
    margin-right: 5px;
    margin-top: 0px;
    margin-bottom: 5px;

    font-weight: bold;
    color: ${isStudy ? "#838383" : isSub ? "#5d5d5d" : "#323232"};
    font-size: 13px;

    background-color: white;
    border: 2px solid white;
  `;

  const SmallStack = styled(Stack)`
    font-size: 10px;
  `;

  return (
    <Container>
      <ColumnBar height="84%" />
      <Content>
        <Period>{period}</Period>
        <Title>{title}</Title>

        {!isHalfScreen && techStack ? (
          <Stacks>
            {techStack.map((tech) => {
              return tech.length >= 12 ? (
                <SmallStack>{tech}</SmallStack>
              ) : (
                <Stack>{tech}</Stack>
              );
            })}
          </Stacks>
        ) : null}

        {isMobile ? (
          <ButtonDiv>
            <GitButton />
            <DetailButton />
          </ButtonDiv>
        ) : (
          <SubTitle>{content}</SubTitle>
        )}
      </Content>

      {!isMobile ? (
        <>
          <GitButton />
          <DetailButton />
        </>
      ) : null}
    </Container>
  );
}

export default Project;
