import * as React from "react";
import { useState, useEffect, useRef, useContext } from "react";
import { ditailContext } from "../Portfolio";

import "./IT_DADetail.css";

type Props = {
  barColor: string;
  barTop: number;
};

function IT_DADetail(props: Props) {
  const { it_daDetailState, TimePointDetailLength } = useContext(ditailContext);

  const IT_DADetailBlockStyle = {
    background: "black",
    top: "101px",
    height: "100px",
  };

  IT_DADetailBlockStyle.top = `${props.barTop + 101}px`;
  IT_DADetailBlockStyle.height = `${TimePointDetailLength!.it_da}px`;
  IT_DADetailBlockStyle.background = `${props.barColor}`;

  if (!it_daDetailState) {
    return <></>;
  } else {
    return (
      <div id="IT_DADetailBlock" style={IT_DADetailBlockStyle}>
        <iframe
          id="it_daYouTube"
          width="440"
          height="220"
          src="https://www.youtube.com/embed/A4qq8sp7lDs"
          title="YouTube video player"
          allow="accelerometer; autoplay; clipboard-write; encrypted-media; gyroscope; picture-in-picture; web-share"
        ></iframe>
        <div id="block8"></div>
        <div id="container5">
          <span>
            <span id="bold">Wed Page Prototype</span>
            <br />
            Html, JavaScript 그리고 CSS를 활용하여 프로그래밍했습니다.
            <br />
            로고 색을 기본으로 디자인했으며,
            <br />
            구성요소들이 서로 자유롭게 상호작용할 수 있도록 설계했습니다.
            <br />
            자동 스크롤을 통해 다양한 카페 이미지를 사용자가 접하게끔 했습니다.
            <br />
            상세페이지에서 좌석의 현황과 카페의 위치를 확인하게 디자인했습니다.
            <br />
            (이미지 클릭 시 Wed Page Prototype에 방문하실 수 있습니다.)
          </span>
          <div id="block9"></div>
          <a
            href="https://itda.netlify.app/"
            rel="IT_DA Wed Page Prototype"
            type="text/html"
            target="_blank"
          >
            <img
              id="it_da_page"
              src="img/it_da_page.gif"
              alt="IT_DA Wed Page Prototype"
            ></img>
          </a>
        </div>
        <div id="block8"></div>
        <div id="container4">
          <img
            id="it_da_opencv"
            src="img/it_da_opencv.gif"
            alt="OpenCV test 영상"
          ></img>
          <div id="block7"></div>
          <span>
            <span id="bold">영상분석프로그램</span>
            <br />
            C++과 OpenCV를 기반의 영상분석프로그램을 프로그래밍하였습니다.
            <br />
            AI를 적용해보았지만, 학습자료 부족으로 정확도가 매우 낮았습니다.
            <br />
            때문에, 색 구분을 기초한 식별 방법을 채택했습니다.
            <br />
            CCTV 화면에 담기는 색과 위치를 미리 식별하고, 이와 다른 색을 띠는
            형체가 형성되면
            <br />
            이를 사람 혹은 자리를 비운 사람이 두고 간 물건이라고 판단하게끔
            프로그래밍했습니다.
          </span>
        </div>
      </div>
    );
  }
}

export default IT_DADetail;
