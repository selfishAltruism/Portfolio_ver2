import * as React from "react";
import { useState, createContext, useReducer } from "react";
import { useMediaQuery } from "react-responsive";
import { BrowserRouter as Router, Routes, Route } from "react-router-dom";

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
        <Router>
          <Routes>
            <Route
              path="*"
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
