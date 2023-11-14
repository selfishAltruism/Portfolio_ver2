import * as React from "react";
import { useState, useEffect, useRef, useContext } from "react";
import { ditailContext } from "../Portfolio";

import "./MilitaryEnlistmentDetail.css";

type Props = {
  barColor: string;
  barTop: number;
};

function MilitaryEnlistmentDetail(props: Props) {
  const { militaryEnlistmentDetailState, TimePointDetailLength } =
    useContext(ditailContext);

  const militaryEnlistmentBlockStyle = {
    background: "black",
    top: "101px",
    height: "100px",
  };

  militaryEnlistmentBlockStyle.top = `${props.barTop + 101}px`;
  militaryEnlistmentBlockStyle.height = `${
    TimePointDetailLength!.militaryEnlistment
  }px`;
  militaryEnlistmentBlockStyle.background = `${props.barColor}`;

  if (!militaryEnlistmentDetailState) {
    return <></>;
  } else {
    return (
      <div id="militaryEnlistmentBlock" style={militaryEnlistmentBlockStyle}>
        <span>
          2021년도에 대한민국 육군으로 입대하였습니다.
          <br />
          군인생활 속에서도 공부를 하려는 목표가 있었지만, 열악한 부대에 배치
          받아 PC를 사용한 프로그래밍 공부는 무리가 있었습니다.
          <br />
          이에 좌절하지 않고 프론트엔드 관련 도서으로 구입하여, 도서를 통해서
          공부했습니다.
          <br />
          심도있게 JavaScript를 공부하였고, React, React Native, TypeScript을
          익혔습니다.
          <br />
          군인생활 동안 프론트엔드 관련 지식이 이전에 비해서 비약적으로 성장할
          수 있었습니다.
        </span>
        <div id="block4"></div>
        <div id="container3">
          <img id="study0" src="img/study0.png" alt="군인공부기록1"></img>
          <div id="block5"></div>
          <img id="study1" src="img/study1.png" alt="군인공부기록2"></img>
          <div id="block6"></div>
          <img id="study2" src="img/study2.png" alt="군인공부기록3"></img>
        </div>
      </div>
    );
  }
}

export default MilitaryEnlistmentDetail;
