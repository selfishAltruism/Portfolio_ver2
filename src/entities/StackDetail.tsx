import { useMediaQuery } from "react-responsive";
import styled from "@emotion/styled";

import { Title1, Title2 } from "src/entities";
import { mainstack, substack } from "src/shared";

export const StackDetail = ({
  onStackDetail,
}: {
  onStackDetail: (value: boolean) => void;
}) => {
  const isMobile = useMediaQuery({
    query: "(max-width:700px)",
  });

  const StackContainer = styled.div`
    transform: translate(-50%, -50%);
    position: fixed;

    top: 55%;
    left: 50%;

    background-color: white;

    border-radius: 10px;

    z-index: 20;

    padding: 20px;

    width: 83%;
  `;

  const GrayBackGround = styled.div`
    position: fixed;
    top: 45px;
    left: 0px;

    width: 100vw;
    height: calc(100vh - 45px);
    z-index: 19;

    background-color: #000000b5;
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
      <GrayBackGround
        onClick={() => {
          onStackDetail(false);
        }}
      />
      <StackContainer>
        <Title1>Well Used</Title1>
        <Stacks>
          {mainstack.map((element) =>
            element.name.length < 13 ? (
              <Stack href={element.href} target="_blank" key={element.name}>
                {element.name}
              </Stack>
            ) : (
              <SmallStack
                href={element.href}
                target="_blank"
                key={element.name}
              >
                {element.name}
              </SmallStack>
            )
          )}
        </Stacks>
        <Title1>Ever Used</Title1>
        <Stacks>
          {substack.map((element) =>
            element.name.length < 13 ? (
              <SubStack href={element.href} target="_blank" key={element.name}>
                {element.name}
              </SubStack>
            ) : (
              <SmallSubStack
                href={element.href}
                target="_blank"
                key={element.name}
              >
                {element.name}
              </SmallSubStack>
            )
          )}
        </Stacks>
      </StackContainer>
    </>
  );
};
