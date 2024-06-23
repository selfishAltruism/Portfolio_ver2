import styled from "@emotion/styled";
import React, { ReactNode } from "react";

const PcProfileContainer = ({ children }: { children: ReactNode }) => {
  return (
    <Colum>
      <ColumContainer>{children}</ColumContainer>
    </Colum>
  );
};

const Colum = styled.div`
  position: fixed;

  left: -20px;
  top: 44px;

  width: 36vw;
  height: 100vh;

  overflow-y: auto;
  overflow-x: hidden;

  ::-webkit-scrollbar {
    width: 6px;
  }
  ::-webkit-scrollbar-thumb {
    background-color: #2f3542;
  }
  ::-webkit-scrollbar-track {
    background-color: #dcdcdc;
  }
`;

const ColumContainer = styled.div`
  position: absolute;
  left: 0px;

  width: 100%;

  display: flex;
  align-items: center;
  flex-direction: column;
`;

export default PcProfileContainer;
