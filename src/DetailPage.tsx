import "prismjs/themes/prism-tomorrow.css";
import styled from "@emotion/styled";
import { useState, useEffect } from "react";
import axios from "axios";
import { NotionRenderer } from "react-notion-x";
import { NotionAPI } from "notion-client";

import "react-notion-x/src/styles.css";
import "prismjs/themes/prism-tomorrow.css";

import Layout from "./Layout";

function DetailPage({ notionID }: { notionID: string }) {
  const [response, setResponse] = useState<any>();

  useEffect(() => {
    const notion = async () => {
      const notion = new NotionAPI();
      const recordMap = await notion.getPage(notionID);
      setResponse(recordMap);
    };
    notion();
  }, []);

  return (
    <Layout>
      Object.keys(response).length && (
      <NotionRenderer recordMap={response} />)
    </Layout>
  );
}

export default DetailPage;
