import { useMediaQuery } from "react-responsive";
import styled from "@emotion/styled";

import { RowBar, Title2 } from "src/entities";
import {
  mainFramework,
  mainLanuage,
  mainLibrary,
  subFramework,
  subLanuage,
  subLibrary,
  evenLibrary,
} from "src/shared";

export const StackDetail = ({
  onStackDetail,
}: {
  onStackDetail: (value: boolean) => void;
}) => {
  const isMobile = useMediaQuery({
    query: "(max-width:700px)",
  });

  const StackContainer = styled.div`
    display: flex;
    flex-direction: column;
    justify-content: space-evenly;
    align-items: center;

    gap: 4px;

    transform: translate(-50%, -55%);
    position: fixed;

    top: 55%;
    left: 50%;

    background-color: white;

    z-index: 20;

    padding: 10px;
    padding-top: 30px;
    padding-bottom: 45px;

    width: 50%;
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
    margin-top: 0px;
    margin-bottom: 0px;

    width: 90%;
    display: flex;
    flex-direction: row;
    justify-content: center;

    flex-wrap: wrap;
  `;

  const Stack = styled.a`
    & {
      transition: all ease-in-out 0.3s;
    }

    &:hover {
      border-radius: 7px;
    }

    text-decoration-line: none;

    display: flex;
    justify-content: center;
    align-items: center;

    padding-left: 20px;
    padding-right: 20px;

    padding-top: 5px;
    padding-bottom: 5px;

    margin-right: 5px;
    margin-top: 0px;
    margin-bottom: 5px;

    font-weight: bold;
    color: white;
    font-size: ${isMobile ? "12px" : "15px"};

    background-color: #000000;
  `;

  const SmallStack = styled(Stack)`
    font-size: ${isMobile ? "12px" : "15px"};
  `;

  const SubStack = styled(Stack)`
    &:hover {
      color: white;
      transition: all ease 0.3s;
    }
    color: white;

    background-color: #434343;
  `;

  const SmallSubStack = styled(SubStack)`
    font-size: ${isMobile ? "12px" : "15px"};
  `;

  const EvenStack = styled(Stack)`
    & {
      transition: all ease-in-out 0.3s;
    }

    &:hover {
      border-radius: 10px;
    }

    color: #434343;

    background-color: white;

    border: 1px solid black;
  `;

  const SmallEvenStack = styled(EvenStack)`
    font-size: ${isMobile ? "12px" : "15px"};
  `;

  return (
    <>
      <GrayBackGround
        onClick={() => {
          onStackDetail(false);
        }}
      />
      <StackContainer>
        <Title2>😎 Pretty well-used</Title2>
        <span>💻 Language</span>
        <Stacks>
          {mainLanuage.map((element) =>
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
        <span>🚩 Framework</span>
        <Stacks>
          {mainFramework.map((element) =>
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
        <span>📖 Library</span>
        <Stacks>
          {mainLibrary.map((element) =>
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
        <RowBar width="90%" />
        <Title2>🫡 Well-used</Title2>
        <span>💻 Language</span>
        <Stacks>
          {subLanuage.map((element) =>
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
        <span>🚩 Framework</span>
        <Stacks>
          {subFramework.map((element) =>
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
        <span>📖 Library</span>
        <Stacks>
          {subLibrary.map((element) =>
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
        <RowBar width="90%" />
        <Title2>👌 Ever-used</Title2>
        <span>📖 Library</span>
        <Stacks>
          {evenLibrary.map((element) =>
            element.name.length < 13 ? (
              <EvenStack href={element.href} target="_blank" key={element.name}>
                {element.name}
              </EvenStack>
            ) : (
              <SmallEvenStack
                href={element.href}
                target="_blank"
                key={element.name}
              >
                {element.name}
              </SmallEvenStack>
            )
          )}
        </Stacks>
      </StackContainer>
    </>
  );
};
