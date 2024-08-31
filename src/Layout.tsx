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

  return (
    <>
      <PortfolioTitle
        onClick={() => {
          navigate("/");
        }}
      >
        <p style={{ marginTop: "10px" }}>Kang Min Kyu's Portfolio</p>
      </PortfolioTitle>
      <MainContent>{children}</MainContent>
    </>
  );
}

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
  height: 45px;

  background-color: #434343;
  font-weight: bold;

  color: white;

  box-shadow: 1px 3px 3px 0 rgb(0 0 0 / 60%);
`;

const MainContent = styled.div`
  position: absolute;
  top: 50px;
  left: 0px;

  width: 100vw;

  display: flex;
  flex-direction: column;
  justify-content: center;
  align-items: center;
`;

export default Layout;
