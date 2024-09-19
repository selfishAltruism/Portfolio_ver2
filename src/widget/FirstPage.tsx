import { useState, useContext } from "react";
import { context } from "src/App";

import "src/shared/style/FirstPage.css";

export const FirstPage = () => {
  const { setPageChangeState } = useContext(context);

  const [cilckBlock1TopState, setCilckBlock1TopState] = useState("70vh");
  const [cilckBlock1LeftState, setCilckBlock1LeftState] = useState("-1vw");
  const cilckBlock1Style = {
    top: cilckBlock1TopState,
    left: cilckBlock1LeftState,
  };

  const [cilckBlock2TopState, setCilckBlock2TopState] = useState("0vh");
  const [cilckBlock2LeftState, setCilckBlock2LeftState] = useState("-1vw");
  const cilckBlock2Style = {
    top: cilckBlock2TopState,
    left: cilckBlock2LeftState,
  };

  const [containerOpacityState, setContainerOpacityState] = useState(1.0);
  const containerStyle = {
    opacity: `${containerOpacityState}`,
  };

  const [colorBlockOpacityState, setColorBlockOpacityState] = useState(1.0);
  const colorBlockStyle = {
    opacity: `${colorBlockOpacityState}`,
  };

  const mainClickHandler = () => {
    const ele1 = document.getElementById("cilckBlock1");
    const ele1PositionTop = window.scrollY + ele1!.getBoundingClientRect().top;
    let cilckBlock1TopPosition = ele1PositionTop + 55; // element에 기울기를 줬기 때문에 오차가 생겨 보정값이 필요: 55
    const ele1PositionLeft =
      window.scrollX + ele1!.getBoundingClientRect().left;
    let cilckBlock1LeftPosition = ele1PositionLeft;

    const ele2 = document.getElementById("cilckBlock2");
    const ele2PositionTop = window.scrollY + ele2!.getBoundingClientRect().top;
    let cilckBlock2TopPosition = ele2PositionTop + 70; // element에 기울기를 줬기 때문에 오차가 생겨 보정값이 필요: 70
    const ele2PositionLeft =
      window.scrollX + ele2!.getBoundingClientRect().left;
    let cilckBlock2LeftPosition = ele2PositionLeft;

    let Opacity = 1.0;

    const interval = setInterval(() => {
      cilckBlock1TopPosition = cilckBlock1TopPosition - 1;
      cilckBlock1LeftPosition = cilckBlock1LeftPosition + 16;
      setCilckBlock1TopState(`${cilckBlock1TopPosition}px`);
      setCilckBlock1LeftState(`${cilckBlock1LeftPosition}px`);

      cilckBlock2TopPosition = cilckBlock2TopPosition - 1;
      cilckBlock2LeftPosition = cilckBlock2LeftPosition - 14;
      setCilckBlock2TopState(`${cilckBlock2TopPosition}px`);
      setCilckBlock2LeftState(`${cilckBlock2LeftPosition}px`);

      Opacity = Opacity - 0.01;
      setContainerOpacityState(Opacity);
      setColorBlockOpacityState(Opacity);
    }, 16);

    setTimeout(() => {
      clearInterval(interval);
      setPageChangeState!(1);
    }, 2200);
  };

  return (
    <div className="titleBody" onClick={mainClickHandler}>
      <div id="container" style={containerStyle}>
        <div id="titleText2">Welcome!</div>
        {/*         <div id="titleText2">Kang MinKyu's Portfolio</div> */}
        <div id="titleText1">
          프론트 엔드 개발자, <span className="borderText">(성명 제외)</span>{" "}
          포트폴리오입니다.
        </div>
        <div id="block"></div>
      </div>

      <div id="cilckBlock1" style={cilckBlock1Style}>
        Click anywhere Click anywhere Click anywhere Click anywhere Click
        anywhere Click anywhere Click anywhere Click anywhere
      </div>

      <div id="cilckBlock2" style={cilckBlock2Style}>
        Click anywhere Click anywhere Click anywhere Click anywhere Click
        anywhere Click anywhere Click anywhere Click anywhere
      </div>
    </div>
  );
};
