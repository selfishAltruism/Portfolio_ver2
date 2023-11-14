import * as React from "react";
import { useState, createContext, useReducer } from "react";

import "./App.css";

import Title from "./Title";
import Portfolio from "./Portfolio";

export const context = createContext<{
  setPageChangeState?: React.Dispatch<React.SetStateAction<number>>;
}>({});

function ChangePage(props: any) {
  if (props.pageChangeState === 0) return <Title />;
  return <></>;
}

function App() {
  const [pageChangeState, setPageChangeState] = useState(0);

  return (
    <>
      <context.Provider
        value={{
          setPageChangeState,
        }}
      >
        <ChangePage pageChangeState={pageChangeState} />
        <Portfolio />
      </context.Provider>
    </>
  );
}

export default App;
