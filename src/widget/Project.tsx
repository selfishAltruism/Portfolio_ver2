import Button from "@mui/material/Button";
import styled from "@emotion/styled";
import { useMediaQuery } from "react-responsive";

import { ColumnBar } from "src/entities";

type Prop = {
  period: string;
  title: string;
  content: string;
  notionURL: string;
  githubURL: string;
  isSub?: boolean;
  isStudy?: boolean;
  techStack?: string[];
  company?: boolean;
};

export const Project = ({
  period,
  title,
  content,
  notionURL,
  githubURL,
  isSub,
  isStudy,
  techStack,
  company,
}: Prop) => {
  const isHalfScreen = useMediaQuery({ query: "(max-width: 1300px)" });

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

    background-color: ${company
      ? "#000000"
      : isStudy
      ? "#9b9b9b"
      : isSub
      ? "#6d6d6d"
      : "#434343"};

    margin-bottom: ${isMobile ? "7px" : "10px"};

    border-radius: 5px;
    box-shadow: 1px 7px 7px 0 rgb(0 0 0 / 60%);
  `;

  const Content = styled.div`
    position: relative;

    width: 95%;
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
    ${isMobile
      ? `&:hover {
        border-color: white;
      }`
      : `&:hover {
      box-shadow: 1px 3px 6px 0 rgb(0 0 0 / 60%);
      margin-top: -4px;
      margin-bottom: 4px;e;
      border-color: white;
    }`}

    width: ${isHalfScreen ? "100px" : "200px"};
    height: ${isHalfScreen ? "28px" : ""};
    color: white;
    margin-left: ${isMobile ? "8px" : ""};
    border-color: white;
    box-shadow: 1px 3px 3px 0 rgb(0 0 0 / 60%);
  `;

  const StyleDetailButton = styled(Button)`
    ${isMobile
      ? `&:hover {
        background-color: white;
        border-color: white;
      }`
      : `&:hover {
      box-shadow: 1px 3px 6px 0 rgb(0 0 0 / 60%);
      margin-top: ${isMobile ? "-4px" : "3px"};
      margin-bottom: 4px;
      background-color: white;
      border-color: white;
    }`}

    width: ${isHalfScreen ? "100px" : "200px"};
    height: ${isHalfScreen ? "28px" : ""};
    color: #434343;
    margin-left: ${isMobile ? "8px" : ""};
    margin-right: ${isMobile ? "20px" : ""};
    margin-top: ${isMobile ? "" : "7px"};

    background-color: white;
    border-color: white;
    box-shadow: 1px 3px 3px 0 rgb(0 0 0 / 60%);
  `;

  const GitButton = ({ company }: { company?: boolean }) =>
    githubURL === "none" ? (
      <div style={{ width: isHalfScreen ? "58px" : "138px" }}></div>
    ) : (
      <StyleGitButton
        variant="outlined"
        color="secondary"
        onClick={() => window.open(githubURL)}
      >
        {company && isHalfScreen
          ? "Company"
          : company
          ? "Company Info"
          : isHalfScreen
          ? "Git"
          : "Git Hub"}
      </StyleGitButton>
    );

  const DetailButton = () =>
    notionURL === "none" ? (
      <div style={{ width: isHalfScreen ? "20px" : "138px" }}></div>
    ) : (
      <StyleDetailButton
        variant="outlined"
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
    padding-left: 5px;
    padding-right: 5px;
    height: 16px;

    border-radius: 1px;
    margin-right: 5px;
    margin-top: 0px;
    margin-bottom: 5px;

    font-weight: bold;
    color: ${isStudy ? "#9b9b9b" : isSub ? "#6d6d6d" : "#434343"};
    font-size: 13px;

    background-color: white;
    border: 2px solid white;
  `;

  return (
    <Container>
      <ColumnBar height="84%" />
      <Content>
        <Period>{period}</Period>
        <Title>{title}</Title>

        {!isHalfScreen && techStack ? (
          <Stacks>
            {techStack.map((tech) => (
              <Stack>{tech}</Stack>
            ))}
          </Stacks>
        ) : null}

        {isMobile ? (
          <ButtonDiv>
            <GitButton company={company} />
            <DetailButton />
          </ButtonDiv>
        ) : (
          <SubTitle>{content}</SubTitle>
        )}
      </Content>

      {!isMobile ? (
        <ButtonContainer>
          <GitButton company={company} />
          <DetailButton />
        </ButtonContainer>
      ) : null}
    </Container>
  );
};

const ButtonContainer = styled.div`
  margin-right: 30px;

  display: flex;
  align-items: center;
  flex-direction: column;
  justify-content: center;
`;
