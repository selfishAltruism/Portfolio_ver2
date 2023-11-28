import { NotionRenderer } from "react-notion";
import styled from "@emotion/styled";
import { useState, useEffect } from "react";
import axios from "axios";

import Layout from "./Layout";

function DetailPage({ notionID }: { notionID: string }) {
  const [response, setResponse] = useState({});

  useEffect(() => {
    axios
      .get(`https://notion-api.splitbee.io/v1/page/${notionID}`)
      .then(({ data }) => {
        setResponse(data);
      });
  }, []);

  return (
    <Layout>
      Object.keys(response).length && (
      <NotionRenderer blockMap={response} fullPage={true} />)
    </Layout>
  );
}

export default DetailPage;
