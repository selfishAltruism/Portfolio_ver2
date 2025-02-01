import Button from "@mui/material/Button";
import styled from "@emotion/styled";
import { useMediaQuery } from "react-responsive";

type Prop = {
  period: string;
  title: string;
  content: JSX.Element | string;
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
    & {
      transition: border-radius 0.2s ease-in-out;
    }
    &:hover {
      border-radius: 15px;
    }

    padding-top: 20px;
    padding-bottom: 20px;
    padding-left: 13px;

    width: calc(100% - 13px);
    height: ${isMobile ? "90px" : "none"};

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

    margin-bottom: ${isMobile ? "7px" : "17px"};

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

    margin-bottom: 0px;

    font-size: ${isMobile ? "12px" : "14px"};
  `;

  const Title = styled.span`
    color: white;
    font-size: ${isMobile ? "17px" : "22px"};

    font-weight: bold;
    margin-bottom: 1px;
  `;

  const SubTitle = styled.span`
    font-size: ${isMobile ? "17px" : "14px"};
    color: white;

    margin-top: 18px;

    border-left: 2px solid white;
    padding-top: 1px;
    padding-bottom: 1px;
    padding-left: 8px;
  `;

  const StyleGitButton = styled(Button)`
    ${isMobile
      ? `&:hover {
        border-color: white;
      }`
      : `&:hover {
        border-color: white;
        border-radius: 12px;
    }`}

    & {
      transition: border-radius 0.2s ease-in-out;
    }

    width: ${isHalfScreen ? "150px" : "200px"};
    height: ${isHalfScreen ? "34px" : "40px"};
    color: white;
    margin-left: ${isMobile ? "8px" : ""};
    border-color: white;
    border-radius: 0px;
  `;

  const StyleDetailButton = styled(Button)`
    ${isMobile
      ? `&:hover {
        background-color: white;
        border-color: white;
      }`
      : `&:hover {
        background-color: white;
        border-color: white;
        border-radius: 12px;
    }`}

    & {
      transition: border-radius 0.2s ease-in-out;
    }

    width: ${isHalfScreen ? "150px" : "200px"};
    height: ${isHalfScreen ? "34px" : "40px"};
    color: #434343;
    margin-left: ${isMobile ? "8px" : ""};
    margin-right: ${isMobile ? "20px" : ""};
    margin-top: ${isMobile || githubURL === "none" ? "" : "17px"};

    background-color: white;
    border-color: white;

    border-radius: 0px;
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
    padding-left: 7px;
    padding-right: 7px;
    padding-top: 2px;
    padding-top: 2px;
    height: 16px;

    // border-radius: 1px;
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
