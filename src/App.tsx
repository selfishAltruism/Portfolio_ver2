import * as React from "react";
import { useState, createContext, useReducer } from "react";
import { useMediaQuery } from "react-responsive";

import "./App.css";

import FirstPage from "./FirstPage";
import Portfolio from "./Portfolio";

export const context = createContext<{
  setPageChangeState?: React.Dispatch<React.SetStateAction<number>>;
}>({});

function App() {
  const [pageChangeState, setPageChangeState] = useState(0);
  const isMobile = useMediaQuery({
    query: "(max-width:768px)",
  });

  return (
    <>
      <context.Provider
        value={{
          setPageChangeState,
        }}
      >
        {pageChangeState === 0 && !isMobile ? <FirstPage /> : <Portfolio />}
        {/* <Portfolio /> */}
        {/*  <FirstPage /> */}
      </context.Provider>
    </>
  );
}

export default App;
