import Button from "@mui/material/Button";
import { useMediaQuery } from "react-responsive";
import styled from "@emotion/styled";

import { Title2 } from "src/style/title";

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
        <Title2>Well Used</Title2>
        <Stacks>
          <Stack href="https://ecma-international.org/" target="_blank">
            Java Script
          </Stack>
          <Stack href="https://www.typescriptlang.org/docs/" target="_blank">
            Type Script
          </Stack>
          <Stack
            href="https://ko.legacy.reactjs.org/docs/getting-started.html"
            target="_blank"
          >
            React
          </Stack>
          <Stack href="https://nextjs.org/docs" target="_blank">
            Next.js
          </Stack>
          <Stack
            href="https://learn.microsoft.com/ko-kr/cpp/c-language/?view=msvc-170"
            target="_blank"
          >
            C & C++
          </Stack>
          <Stack
            href="https://ko.redux.js.org/introduction/getting-started/"
            target="_blank"
          >
            Redux
          </Stack>
          <Stack href="https://axios-http.com/kr/docs/intro" target="_blank">
            Axios
          </Stack>
          <Stack href="https://reactrouter.com/en/main" target="_blank">
            React Router
          </Stack>
          <SmallStack
            href="https://emotion.sh/docs/introduction"
            target="_blank"
          >
            Emotion
          </SmallStack>
          <SmallStack
            href="https://react-hook-form.com/get-started"
            target="_blank"
          >
            React Hook Form
          </SmallStack>
          <Stack href="https://zustand-demo.pmnd.rs/" target="_blank">
            Zustand
          </Stack>
          <Stack href="https://mswjs.io/" target="_blank">
            MSW
          </Stack>
        </Stacks>
        <Title2>Ever Used</Title2>
        <Stacks>
          <SubStack href="https://ko.mobx.js.org/README.html" target="_blank">
            MobX
          </SubStack>
          <SubStack href="https://tanstack.com" target="_blank">
            React Query
          </SubStack>
          <SubStack href="https://tailwindcss.com" target="_blank">
            Tailwind
          </SubStack>
          <SubStack
            href="https://web.stanford.edu/class/cs140/projects/pintos/pintos.html"
            target="_blank"
          >
            PintOS
          </SubStack>
          <SubStack
            href="https://next-auth.js.org/getting-started/example"
            target="_blank"
          >
            NextAuth.js
          </SubStack>
          <SmallSubStack
            href="https://www.npmjs.com/package/react-responsive"
            target="_blank"
          >
            react-responsive
          </SmallSubStack>
          <SubStack href="https://playwright.dev/docs/intro" target="_blank">
            Playwright
          </SubStack>
          <SubStack
            href="https://docs.cypress.io/guides/overview/why-cypress"
            target="_blank"
          >
            Cypress
          </SubStack>
          <SubStack href="https://recharts.org/en-US/" target="_blank">
            Recharts
          </SubStack>
        </Stacks>
      </StackContainer>
    </>
  );
};
