import * as React from "react";
import { useState, createContext, useContext, useReducer } from "react";
import { context } from "./App";
import "./Portfoilo.css";

import Profile from "./Profile";
import Projects from "./Projects";

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

  return (
    <>
      <div
        id="portfolioTitle"
        onClick={() => {
          setPageChangeState!(0);
        }}
      >
        <p>Kang Min Kyu's Portfolio Ver II</p>
      </div>

      <Profile />

      <Projects />

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
