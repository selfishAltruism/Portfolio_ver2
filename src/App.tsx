import * as React from "react";
import { useState, createContext, useReducer } from "react";

import "./App.css";

import Title from "./Title";
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
        {pageChangeState === 0 ? <Title /> : <Portfolio />}
      </context.Provider>
    </>
  );
}

export default App;
