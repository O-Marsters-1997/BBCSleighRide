import React, { useState, lazy, Suspense } from "react";
import { Routes, Route } from "react-router-dom";
import StyledEngineProvider from "@mui/material/StyledEngineProvider";
import { ThemeProvider } from "styled-components";
import { useSelector } from "react-redux";
import { State } from "./state/reducers";
import { theme, GlobalStyle } from "./utils/theme";
import ActionsProvider from "./contexts/StateActions.context";
import Joke from "./components/joke/Joke.overlay";
import Header from "./components/Header";
import View from "./components/View";
import { AppContainer } from "./components/Lib";
// import Background from "./components/Svg/Background";

const BBCSleighride = lazy(() => import("./pages/BBCSleighride.page"));
const Map = lazy(() => import("./pages/Map.page"));
const Quiz = lazy(() => import("./pages/Quiz.page"));
const Error = lazy(() => import("./pages/Error.page"));

const App: React.FC = () => {
  const [santaToggle, setSantaToggle] = useState<boolean>(false);
  const showSanta = (): void => {
    setSantaToggle(!santaToggle);
  };
  const { modalOpen } = useSelector((state: State) => state.joke);

  return (
    <StyledEngineProvider injectFirst>
      <ThemeProvider theme={theme}>
        <GlobalStyle />
        <Header showSanta={showSanta} />
        <AppContainer>
          <ActionsProvider>
            <View backgroundImg>
              {modalOpen && (
                <View
                  style={{
                    position: "absolute",
                    display: "flex",
                    flexDirection: "column",
                    alignItems: "center",
                    justifyContent: "center",
                    width: "100%",
                    height: "100%",
                    zIndex: "100",
                  }}
                >
                  <Joke />
                </View>
              )}
              <Routes>
                <Route
                  path="/"
                  element={
                    <Suspense fallback={<>...</>}>
                      <BBCSleighride />
                    </Suspense>
                  }
                />
                <Route
                  path="map/"
                  element={
                    <Suspense fallback={<>...</>}>
                      <Map />
                    </Suspense>
                  }
                />

                <Route
                  path="quiz/"
                  element={
                    <Suspense fallback={<>...</>}>
                      <Quiz />
                    </Suspense>
                  }
                />
                <Route
                  path="*"
                  element={
                    <Suspense fallback={<>...</>}>
                      <Error />
                    </Suspense>
                  }
                />
              </Routes>
            </View>
          </ActionsProvider>
        </AppContainer>
      </ThemeProvider>
    </StyledEngineProvider>
  );
};

export default App;
