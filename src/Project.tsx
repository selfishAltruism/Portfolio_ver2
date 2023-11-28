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

  const Container = styled.div``;
}

export default Project;
