import * as React from "react";
import { useState, useEffect, useRef, useContext } from "react";
import { ditailContext } from "../Portfolio";

import "./PortfolioDetail.css";

type Props = {
  barColor: string;
  barTop: number;
};

function PortfolioDetail(props: Props) {
  const { portfolioDetailState, TimePointDetailLength } =
    useContext(ditailContext);

  const portfolioBlockStyle = {
    background: "black",
    top: "101px",
    height: "100px",
  };

  portfolioBlockStyle.top = `${props.barTop + 101}px`;
  portfolioBlockStyle.height = `${TimePointDetailLength!.portfolio}px`; // 수정
  portfolioBlockStyle.background = `${props.barColor}`;

  if (!portfolioDetailState) {
    return <></>;
  } else {
    return (
      <div id="portfolioBlock" style={portfolioBlockStyle}>
        <span id="bold">보고 계신 웹 페이지입니다.</span>
        <span>
          이틀 정도를 투자해서 스스로 디자인하고 React를 사용해서 개발하였는데,
          이론이 어느 정도 갖춰져 있어서 훨씬 수월하게 결과물을 만들 수
          있었습니다.
        </span>
        <span>
          Component와 Hook을 이용하여 재사용성 높은 싱글 페이지 애플리케이션을
          개발하는 과정은 개발 과정과 결과물 모두에 이점이 있었습니다.
        </span>
        <div id="block12"></div>
        <a
          href="https://github.com/selfishAltruism/Portfolio"
          rel="Ship List Wed Page"
          type="text/html"
          target="_blank"
        >
          <div id="gitlink">
            <div id="bold">Curious about the development process?</div>
            <div>git hub link</div>
          </div>
        </a>
      </div>
    );
  }
}

export default PortfolioDetail;
