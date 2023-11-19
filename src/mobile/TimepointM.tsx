import * as React from "react";
import { useState, useEffect, useRef, useContext } from "react";
import { ditailContext } from "../browser/Portfolio";

import "./TimepointM.css";

import { IoIosArrowUp } from "react-icons/io";

type Props = {
  barColor: string;
  barTop: number;
  barLength: number;
  startTime: string;
  title: string;
  setState: any;
};

function TimepointM(props: Props) {
  const timebarStyle = {
    background: "black",
    top: "70px",
    height: "3000px",
  };

  const startTimeStyle = {
    top: "70px",
    left: "110px",
    color: "black",
  };

  const titleStyle = {
    top: "49px",
    left: "0px",
    width: "100vw",
    color: "#323232",
  };

  const DetailBlockStyle = {
    background: "black",
    top: "70px",
  };

  const startTimeLineStyle = {
    background: "black",
    top: "101px",
  };

  timebarStyle.background = `${props.barColor}`;
  timebarStyle.top = `${props.barTop + 70}px`;
  timebarStyle.height = `${props.barLength}px`;

  startTimeStyle.color = `${props.barColor}`;
  startTimeStyle.top = `${props.barTop + 70}px`;

  titleStyle.top = `${props.barTop + 70 - 21}px`;

  DetailBlockStyle.background = `${props.barColor}`;
  DetailBlockStyle.top = `${props.barTop + 70}px`;

  startTimeLineStyle.background = `${props.barColor}`;
  startTimeLineStyle.top = `${props.barTop + 70 + 31}px`;

  const [loadingBlockState, setLoadingBlockState] = useState("0vw");

  const loadingBlockStyle = {
    background: "black",

    top: "70px",

    width: loadingBlockState,
  };

  loadingBlockStyle.background = `${props.barColor}`;
  loadingBlockStyle.top = `${props.barTop + 70}px`;

  const [IoIosAddCircleState, setIoIosAddCircleState] =
    useState("rotate(0deg)");

  const IoIosAddCircleStyle = {
    transform: `${IoIosAddCircleState}`,
  };

  const [detailBlockText, setDetailBlockText] = useState("Open Detail");

  const detailBlockClick = () => {
    if (IoIosAddCircleState == "rotate(0deg)") {
      setIoIosAddCircleState("rotate(180deg)");
      setDetailBlockText("Close Detail ");

      let LoadingBlockWidth = 0;
      const interval = setInterval(() => {
        LoadingBlockWidth = LoadingBlockWidth + 3;
        setLoadingBlockState(`${LoadingBlockWidth}vw`);
      }, 20);

      props.setState(1);

      setTimeout(() => {
        clearInterval(interval);
        setLoadingBlockState("90vw");
      }, 600);
    } else {
      setIoIosAddCircleState("rotate(0deg)");
      setDetailBlockText(" Open Detail ");
      let LoadingBlockWidth = 90;
      const interval = setInterval(() => {
        LoadingBlockWidth = LoadingBlockWidth - 3;
        setLoadingBlockState(`${LoadingBlockWidth}vw`);
      }, 20);

      props.setState(0);

      setTimeout(() => {
        clearInterval(interval);
        setLoadingBlockState("0vw");
      }, 600);
    }
  };

  return (
    <>
      <div id="timebar" style={timebarStyle}></div>

      <div id="startTimeLine" style={startTimeLineStyle}></div>

      <div id="startTime" style={startTimeStyle}>
        {props.startTime}
      </div>

      <div id="title" style={titleStyle}>
        <p>{props.title}</p>
      </div>

      <div id="DetailBlock" style={DetailBlockStyle} onClick={detailBlockClick}>
        <span>{detailBlockText}</span>
        <IoIosArrowUp size="22" style={IoIosAddCircleStyle} />
      </div>

      <div id="loadingBlock" style={loadingBlockStyle}></div>
    </>
  );
}

export default TimepointM;
