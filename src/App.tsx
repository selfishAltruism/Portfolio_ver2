import * as React from "react";
import { useState, createContext, useReducer } from "react";

import "./App.css";

import FirstPage from "./FirstPage";
import Portfolio from "./Portfolio";

export const context = createContext<{
  setPageChangeState?: React.Dispatch<React.SetStateAction<number>>;
}>({});

function App() {
  const [pageChangeState, setPageChangeState] = useState(0);

  return (
    <>
      <context.Provider
        value={{
          setPageChangeState,
        }}
      >
        {/* {pageChangeState === 0 ? <FirstPage /> : } */}
        {/* <Portfolio /> */}
        <FirstPage />
      </context.Provider>
    </>
  );
}

export default App;
