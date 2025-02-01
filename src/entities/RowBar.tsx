import styled from "@emotion/styled";

export const RowBar = ({ width }: { width: string }) => {
  const Bar = styled.div`
    width: ${width};
    height: 2px;
    background-color: #434343;

    margin-top: 7px;
    margin-bottom: 15px;
  `;
  return <Bar />;
};
