import * as React from "react";
import { useState, createContext, useContext, useReducer } from "react";
import "./style/Portfoilo.css";
import { useMediaQuery } from "react-responsive";

import Profile from "./Profile";
import Projects from "./Projects";
import Layout from "./Layout";
import PcProjectsContainer from "./style/PcProjectsContainer";
import PcProfileContainer from "./style/PcProfileContainer";

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
  const isFullScreen = useMediaQuery({
    query: "(min-width:1500px)",
  });

  const TimePointDetailLength = {
    university: 200,
    studentCouncil: 460,
    it_da: 590,
    militaryEnlistment: 400,
    shipList: 200,
    portfolio: 200,
  };

  return (
    <Layout>
      <Profile />
      <Projects />
    </Layout>
  );
}

export default Portfolio;
