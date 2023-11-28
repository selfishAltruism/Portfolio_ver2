import styled from "@emotion/styled";

const RowBar = ({ width }: { width: string }) => {
  const Bar = styled.div`
    width: ${width};
    height: 1px;
    background-color: #323232;

    margin-top: 8px;
    margin-bottom: 8px;
  `;
  return <Bar />;
};

export default RowBar;
