import * as React from "react";
import { useState, createContext, useContext, useReducer } from "react";
import { context } from "../App";

import Timepoint from "./Timepoint";
import IT_DADetail from "./detailPage/IT_DADetail";
import MilitaryEnlistmentDetail from "./detailPage/MilitaryEnlistmentDetail";
import ShipListDetail from "./detailPage/ShipListDetail";
import PortfolioDetail from "./detailPage/PortfolioDetail";

import "./Portfoilo.css";

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
      <div className="defaulttimebar"></div>
      <ditailContext.Provider
        value={{
          TimePointDetailLength,
          universityDetailState,
          studentCouncilDetailState,
          it_daDetailState,
          militaryEnlistmentDetailState,
          shipListDetailState,
          portfolioDetailState,
        }}
      >
        <Timepoint
          barColor="#0A6E0A"
          barTop={10}
          barLength={43}
          startTime="2021.06.23 ~ 2021.12.20"
          title="IT_DA Project"
          setState={setIt_daDetailState}
        />

        <IT_DADetail barColor="#0A6E0A" barTop={10} />

        <Timepoint
          barColor="#389561"
          barTop={60}
          barLength={97}
          startTime="2021.01.17 ~ 2023.06.15"
          title="대한민국 군대 입대"
          setState={setMilitaryEnlistmentDetailState}
        />

        <MilitaryEnlistmentDetail barColor="#389561" barTop={60} />

        <Timepoint
          barColor="#4646CD"
          barTop={107}
          barLength={43}
          startTime="2023.02.21~2023.02.25"
          title="Ship List Program Development"
          setState={setShipListDetailState}
        />

        <ShipListDetail barColor="#4646CD" barTop={107} />

        <Timepoint
          barColor="#323232"
          barTop={175}
          barLength={40}
          startTime="2023.07.10 ~ 2023.07.11"
          title="Portfoilo Ver I wed page Development"
          setState={setPortfolioDetailState}
        />

        <PortfolioDetail barColor="#323232" barTop={165} />

        <div
          id="portfolioTitle"
          onClick={() => {
            setPageChangeState!(0);
          }}
        >
          <p>Kang Min Kyu's Portfolio Ver II</p>
        </div>
        <a href="https://github.com/selfishAltruism">
          <div id="gitLink2">
            <p>Made by https://github.com/selfishAltruism</p>
          </div>
        </a>

        <Timepoint
          barColor="#00008C"
          barTop={218}
          barLength={70}
          startTime="2023.09.08 ~ 2023.11.10"
          title="Grid Project"
          setState={() => {}}
        />

        <Timepoint
          barColor="#8c008c"
          barTop={289}
          barLength={35}
          startTime="2023.11.11 ~ 2023.11.12"
          title="Talent Save Project"
          setState={() => {}}
        />
      </ditailContext.Provider>

      <span id="toBeContinued">
        To Be Continued.. To Be Continued.. To Be Continued.. To Be Continued..
        To Be Continued.. To Be Continued..
      </span>
    </>
  );
}

export default Portfolio;
