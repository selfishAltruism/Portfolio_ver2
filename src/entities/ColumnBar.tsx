import styled from "@emotion/styled";

export const ColumnBar = ({ height }: { height: string }) => {
  const Bar = styled.div`
    width: 3px;
    height: ${height};
    background-color: white;

    margin-left: 7px;

    border-radius: 1px;
  `;
  return <Bar />;
};
