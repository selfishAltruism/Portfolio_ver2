import { createContext } from "react";

import "src/shared/style/Portfoilo.css";

import { Profile, Projects } from "src/widget";
import Layout from "src/Layout";

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

const Portfolio = () => {
  return (
    <Layout>
      <Profile />
      <Projects />
    </Layout>
  );
};

export default Portfolio;
