import styled from "@emotion/styled";
import { ReactNode } from "react";

export const PcProjectsContainer = ({ children }: { children: ReactNode }) => {
  return (
    <Colum>
      <ColumContainer>{children}</ColumContainer>
    </Colum>
  );
};

const Colum = styled.div`
  position: fixed;

  right: 0px;
  top: 30px;

  width: 80vw;
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
  right: -85px;

  width: 100%;

  display: flex;
  align-items: center;
  flex-direction: column;
`;

export default PcProjectsContainer;
