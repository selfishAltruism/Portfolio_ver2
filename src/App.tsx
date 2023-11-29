import * as React from "react";
import { useState, createContext, useReducer } from "react";
import { useMediaQuery } from "react-responsive";
import { BrowserRouter as Router, Routes, Route } from "react-router-dom";

import "./App.css";

import FirstPage from "./FirstPage";
import Portfolio from "./Portfolio";
import DetailPage from "./DetailPage";

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
              path="/sociallogin"
              element={
                <DetailPage notionID="458b881bf2984563ac951bb4f9d7e9ba?pvs=4" />
              }
            ></Route>
          </Routes>
        </Router>
      </context.Provider>
    </>
  );
}

export default App;
