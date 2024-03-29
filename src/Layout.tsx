import styled from "@emotion/styled";
import { useContext } from "react";
import { context } from "./App";
import { useNavigate } from "react-router-dom";

type Props = {
  children: React.ReactNode;
};

function Layout({ children }: Props) {
  const { setPageChangeState } = useContext(context);
  const navigate = useNavigate();

  const PortfolioTitle = styled.div`
    -webkit-touch-callout: none;
    user-select: none;
    -moz-user-select: none;
    -ms-user-select: none;
    -webkit-user-select: none;

    position: fixed;
    z-index: 99;

    top: 0px;
    left: 0px;

    width: 100vw;
    height: 50px;

    background-color: #434343;
    font-weight: bold;

    color: white;
  `;

  const MainContent = styled.div`
    width: 100%;
    position: absolute;
    top: 50px;

    display: flex;
    flex-direction: column;
    justify-content: center;
    align-items: center;
  `;

  return (
    <>
      <PortfolioTitle
        onClick={() => {
          navigate("/");
        }}
      >
        <p>Kang Min Kyu's Portfolio Ver II</p>
      </PortfolioTitle>
      <MainContent>{children}</MainContent>
    </>
  );
}

export default Layout;
