import * as React from "react";
import { useState, useEffect, useRef, useContext } from "react";
import { ditailContext } from "../PortfolioM";

import "./ShipListDetail.css";

type Props = {
  barColor: string;
  barTop: number;
};

function ShipListDetail(props: Props) {
  const { shipListDetailState, TimePointDetailLength } =
    useContext(ditailContext);

  const shipListBlockStyle = {
    background: "black",
    top: "101px",
    height: "100px",
  };

  shipListBlockStyle.top = `${props.barTop + 101}px`;
  shipListBlockStyle.height = `${TimePointDetailLength!.shipList}px`; // 수정
  shipListBlockStyle.background = `${props.barColor}`;

  if (!shipListDetailState) {
    return <></>;
  } else {
    return (
      <div id="shipListBlock" style={shipListBlockStyle}>
        <a
          href="https://shiplist.netlify.app/"
          rel="Ship List Wed Page"
          type="text/html"
          target="_blank"
        >
          <img
            id="shipListImg"
            src="img/shipListImg.jpg"
            alt="병장 강민규 사진"
          ></img>
        </a>

        <div id="block10"></div>
        <div>
          <span>
            주요 업무 중 하나가 특이사항이 있는 선박을 감시 장비 간에
            인수인계하고 컴퓨터에 기록을 남기는 것이었습니다.
            <br />
            하지만 감시 장비를 다루는 컴퓨터는 보안으로 인해서 기본 설치된
            메모장, 익스플로러8 말고는 없었습니다.
            <br />
            익스플로러8이 설치되어있다는 점을 활용해서 html 코딩을 통한 선박
            일지 프로그램을 개발하였습니다.
            <br />
            동료들이 크게 만족하였고, 제 부대를 나온 지금도 제가 개발한
            프로그램을 후임들이 사용하고 있습니다.
            <br />
            그 짧은 시간에 개발한 프로그램이 이렇게 불편함을 해소해 준다는
            것에서 소프트웨어의 영향력이 느껴졌습니다.
            <br />
            개발에 앞서 문제를 정확하게 파악하는 것이 정말 중요한 것임을
            깨달았습니다.
            <br />
            (이미지 클릭 시 당시 개발한 Program에 방문하실 수 있습니다.)
          </span>
        </div>
      </div>
    );
  }
}

export default ShipListDetail;
