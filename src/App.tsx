import * as React from "react";
import { useState, createContext, useReducer } from "react";
import { useMediaQuery } from "react-responsive";

import "./App.css";

import FirstPage from "./FirstPage";
import Portfolio from "./Portfolio";
import { BrowserRouter as Router, Routes, Route } from "react-router-dom";

export const context = createContext<{
  setPageChangeState?: React.Dispatch<React.SetStateAction<number>>;
}>({});

function App() {
  const [pageChangeState, setPageChangeState] = useState(1);
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
        <Router>
          <Routes>
            <Route
              path="/"
              element={
                pageChangeState === 0 && !isMobile ? (
                  <FirstPage />
                ) : (
                  <Portfolio />
                )
              }
            ></Route>
            <Route
              path="/grid"
              element={
                pageChangeState === 0 && !isMobile ? (
                  <FirstPage />
                ) : (
                  <Portfolio />
                )
              }
            ></Route>
          </Routes>
        </Router>
      </context.Provider>
    </>
  );
}

export default App;
