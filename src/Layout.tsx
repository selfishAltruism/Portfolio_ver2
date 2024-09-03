import styled from "@emotion/styled";
import { useContext } from "react";
import { context } from "./App";
import { useNavigate } from "react-router-dom";
import { useMediaQuery } from "react-responsive";

type Props = {
  children: React.ReactNode;
};

function Layout({ children }: Props) {
  const { setPageChangeState } = useContext(context);
  const navigate = useNavigate();

  const isMobile = useMediaQuery({
    query: "(max-width:700px)",
  });

  const handleScroll = (top: number) => {
    // window.scrollTo로 특정 좌표로 스크롤 (예: 1000px 아래로)
    window.scrollTo({
      top: top,
      behavior: "smooth",
    });
  };

  return (
    <>
      <PortfolioTitle
        onClick={() => {
          navigate("/");
        }}
      >
        <p style={{ marginTop: "10px" }}>Kang Min Kyu's Portfolio</p>
        {isMobile ? null : (
          <div>
            <div
              onClick={() => {
                handleScroll(240);
              }}
            >
              Tech Stack
            </div>
            <div
              onClick={() => {
                handleScroll(240);
              }}
            >
              Resume
            </div>
            <div
              onClick={() => {
                handleScroll(800);
              }}
            >
              Dev Record
            </div>
          </div>
        )}
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

  background-color: #ffffff;
  font-weight: bold;

  color: #434343;
  font-weight: bold;

  box-shadow: 1px 3px 3px 0 rgb(0 0 0 / 60%);

  > div {
    font-size: 12px;

    color: #646464;

    position: absolute;
    right: 50px;

    top: 14px;

    display: flex;
    justify-content: space-between;

    width: 200px;

    text-decoration: underline;
  }
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
