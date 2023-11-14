import * as React from "react";
import { useState, useEffect, useRef, useContext } from "react";
import { ditailContext } from "../Portfolio";

import "./UniversityDetail.css";

type Props = {
  barColor: string;
  barTop: number;
};

function UniversityDetail(props: Props) {
  const { universityDetailState, TimePointDetailLength } =
    useContext(ditailContext);

  const universityDetailBlockStyle = {
    background: "black",
    top: "101px",
    height: "100px",
  };

  universityDetailBlockStyle.top = `${props.barTop + 101}px`;
  universityDetailBlockStyle.height = `${TimePointDetailLength!.university}px`;
  universityDetailBlockStyle.background = `${props.barColor}`;

  if (!universityDetailState) {
    return <></>;
  } else {
    return (
      <div id="universityDetailBlock" style={universityDetailBlockStyle}>
        <img
          id="cauImg"
          src="img/cauImg.png"
          alt="중앙대학교 공식 마스코트 푸앙"
        ></img>
        <div id="block1"></div>
        <div>
          <span>
            고등학교 때부터 로봇과 프로그래밍에 관심이 많아 관련 공부 및 연구
            활동에 적극적으로 참여했습니다.
            <br />
            이를 바탕으로 서울 중앙대학교 소프트웨어학과에 입학하였습니다.
            <br />
            중앙대학교의 컴퓨터공학 강의는 보다 실용적인 면에 맞춰져 있었고
            공부와 과제를 통해 프로그래밍 경험을 할 수 있었습니다.
            <br />
            경험 속에서 프로그래밍 문제를 해결하면서도 성취감을 느꼈지만,
            <br />
            <span id="bold">
              문제를 직면했을 때 스트레스 받기보다 즐거워한다는 사실
            </span>
            을 알았고 프로그래밍에 적성이 맞음을 알았습니다.
          </span>
        </div>
      </div>
    );
  }
}

export default UniversityDetail;
