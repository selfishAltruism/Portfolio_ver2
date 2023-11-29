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

    background-color: #323232;

    color: white;
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
      {children}
    </>
  );
}

export default Layout;
