import * as React from "react";
import { useState, createContext, useContext, useReducer } from "react";
import { context } from "./App";
import "./Portfoilo.css";

import Timepoint from "./Timepoint";
import IT_DADetail from "./detailPage/IT_DADetail";
import MilitaryEnlistmentDetail from "./detailPage/MilitaryEnlistmentDetail";
import ShipListDetail from "./detailPage/ShipListDetail";
import PortfolioDetail from "./detailPage/PortfolioDetail";

import Profile from "./Profile";

export const MAXLENGTH_TIMEBAR = 750;

export const ditailContext = createContext<{
  TimePointDetailLength?: {
    university: number;
    studentCouncil: number;
    it_da: number;
    militaryEnlistment: number;
    shipList: number;
    portfolio: number;
  };
  universityDetailState?: number;
  studentCouncilDetailState?: number;
  it_daDetailState?: number;
  militaryEnlistmentDetailState?: number;
  shipListDetailState?: number;
  portfolioDetailState?: number;
}>({});

function Portfolio() {
  const { setPageChangeState } = useContext(context);

  const TimePointDetailLength = {
    university: 200,
    studentCouncil: 460,
    it_da: 590,
    militaryEnlistment: 400,
    shipList: 200,
    portfolio: 200,
  };

  const [universityDetailState, setUniversityDetailState] = useState(0);
  const [studentCouncilDetailState, setStudentCouncilDetailState] = useState(0);
  const [it_daDetailState, setIt_daDetailState] = useState(0);
  const [militaryEnlistmentDetailState, setMilitaryEnlistmentDetailState] =
    useState(0);
  const [shipListDetailState, setShipListDetailState] = useState(0);
  const [portfolioDetailState, setPortfolioDetailState] = useState(0);

  return (
    <>
      <Profile />

      {/*       <div className="defaulttimebar"></div>
      <Timepoint
        barColor="#0A6E0A"
        barTop={10}
        barLength={43}
        startTime="21.06.23 ~ 21.12.20"
        title="IT_DA Project"
        setState={setIt_daDetailState}
      />

      <Timepoint
        barColor="#389561"
        barTop={60}
        barLength={97}
        startTime="21.01.17 ~ 23.06.15"
        title="대한민국 군대 입대"
        setState={setMilitaryEnlistmentDetailState}
      />

      <Timepoint
        barColor="#4646CD"
        barTop={107}
        barLength={43}
        startTime="23.02.21~23.02.25"
        title="Ship List Program Development"
        setState={setShipListDetailState}
      />

      <Timepoint
        barColor="#323232"
        barTop={175}
        barLength={40}
        startTime="23.07.10 ~ 23.07.11"
        title="Portfoilo Ver I wed page Development"
        setState={setPortfolioDetailState}
      />

      <div
        id="portfolioTitle"
        onClick={() => {
          setPageChangeState!(0);
        }}
      >
        <p>Kang Min Kyu's Portfolio Ver II</p>
      </div>

      <Timepoint
        barColor="#00008C"
        barTop={218}
        barLength={70}
        startTime="23.09.08 ~ 23.11.10"
        title="Grid Project"
        setState={() => {}}
      />

      <Timepoint
        barColor="#8c008c"
        barTop={289}
        barLength={35}
        startTime="23.11.11 ~ 23.11.12"
        title="Talent Save Project"
        setState={() => {}}
      /> */}

      <a href="https://github.com/selfishAltruism">
        <div id="gitLink2">
          <p>Made by https://github.com/selfishAltruism</p>
        </div>
      </a>

      <span id="toBeContinued">
        To Be Continued.. To Be Continued.. To Be Continued.. To Be Continued..
        To Be Continued.. To Be Continued..
      </span>
    </>
  );
}

export default Portfolio;
