import styled from "@emotion/styled";
import React, { ReactNode } from "react";

const PcContainer = ({ children }: { children: ReactNode }) => {
  const updateChildren = React.Children.map(children, (child) => (
    <Colum>
      <ColumContainer> {child}</ColumContainer>
    </Colum>
  ));
  return <Container>{updateChildren}</Container>;
};

const Container = styled.div`
  position: fixed;
  left: 0px;
  top: 0px;

  width: 100vw;
  height: 100vh;

  display: flex;
  flex-direction: row;
  justify-content: center;
  align-items: center;
`;

const Colum = styled.div`
  width: 50vw;
  height: 100vh;

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
  width: 100%;

  flex-direction: column;
`;

export default PcContainer;
