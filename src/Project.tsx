import Button from "@mui/material/Button";
import styled from "@emotion/styled";

import ColumnBar from "./style_component/ColumnBar";

type Prop = {
  period: string;
  title: string;
  content: string;
  notionURL: string;
  githubURL: string;
};

function Project(prop: Prop) {
  const { period, title, content, notionURL, githubURL } = prop;

  const Container = styled.div`
    width: 100%;
    height: 100px;

    display: flex;
    flex-direction: row;
    justify-content: center;

    background-color: #323232;

    margin-top: 10px;
  `;

  return <Container />;
}

export default Project;
