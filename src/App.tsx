import * as React from "react";
import { useState, createContext } from "react";
import { useMediaQuery } from "react-responsive";
import { BrowserRouter as Router, Routes, Route } from "react-router-dom";

import "src/shared/style/App.css";

import { FirstPage } from "src/widget";
import Portfolio from "src/Portfolio";

export const context = createContext<{
  setPageChangeState?: React.Dispatch<React.SetStateAction<number>>;
}>({});

const App = () => {
  const [pageChangeState, setPageChangeState] = useState(0);
  const isMobile = useMediaQuery({
    query: "(max-width:700px)",
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
};

export default App;
