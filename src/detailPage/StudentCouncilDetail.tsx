import * as React from "react";
import { useState, useEffect, useRef, useContext } from "react";
import { ditailContext } from "../Portfolio";

import "./StudentCouncilDetail.css";

type Props = {
  barColor: string;
  barTop: number;
};

function StudentCouncilDetail(props: Props) {
  const { studentCouncilDetailState, TimePointDetailLength } =
    useContext(ditailContext);

  const studentCouncilDetailBlockStyle = {
    background: "black",
    top: "101px",
    height: "100px",
  };

  studentCouncilDetailBlockStyle.top = `${props.barTop + 101}px`;
  studentCouncilDetailBlockStyle.height = `${
    TimePointDetailLength!.studentCouncil
  }px`;
  studentCouncilDetailBlockStyle.background = `${props.barColor}`;

  if (!studentCouncilDetailState) {
    return <></>;
  } else {
    return (
      <div
        id="studentCouncilDetailBlock"
        style={studentCouncilDetailBlockStyle}
      >
        <img
          id="councilImg"
          src="img/councilImg.png"
          alt="2021 소프트웨어학부 학생회 로고"
        ></img>

        <div>
          <span>
            당시 다양한 프로그래밍 대회에 참여하고 싶었지만, 이에 앞서서 어떤
            형식으로 진행되는지 경험해보는 것이 우선이라고 생각했습니다.
            <br />
            소프트웨어학부 내에서 대회를 기획하고 주관하는 직책인 학생회
            교육부장을 지원했고, 소프트웨어 학부생들의 지원으로 선출되었습니다.
            <br />
            학부 내 다양한 동아리들과 협력하여 학부 통합 해커톤을 기획 및
            진행했고, 프로그래밍 대회가 어떻게 기획되고 진행되는지 파악했습니다.
            <br />
            학생회로써 학부 내 동기를 비롯한 다양한 선후배들과 교류하며 집단에서
            주도적인 사람이 되는 법을 배웠습니다.
          </span>
        </div>
        <div id="block3"></div>
        <div id="container2">
          <span>
            학기 후반에 서울대학교 포항공과대학교를 포함한 8개 대학에서 연합하여
            진행하는
            <br />
            프로그래밍 대회 <span id="bold">Uni-D</span>에 중앙대학교 대표로써
            기획 및 진행에 참여하였습니다.
            <br />
            대학교를 넘어서는 수준의 작품들과 심사들을 보면서 견문을 넓혔습니다.
          </span>
          <div id="block2"></div>
          <img id="unidImg" src="img/unidImg.png" alt="2021 Uni-D 포스터"></img>
        </div>
      </div>
    );
  }
}

export default StudentCouncilDetail;
