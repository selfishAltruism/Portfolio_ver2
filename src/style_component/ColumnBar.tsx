import styled from "@emotion/styled";

const ColumnBar = ({ height }: { height: string }) => {
  const Bar = styled.div`
    width: 1px;
    height: ${height};
    background-color: #323232;

    margin-right: 8px;
  `;
  return <Bar />;
};

export default ColumnBar;
