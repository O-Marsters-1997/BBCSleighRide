import React, { lazy, Suspense, useContext } from "react";
import { Routes, Route } from "react-router-dom";
import StyledEngineProvider from "@mui/material/StyledEngineProvider";
import { ThemeProvider } from "styled-components";
import { useSelector } from "react-redux";
import { State } from "./state/reducers";
import { theme, GlobalStyle } from "./utils/theme";
import ActionsProvider from "./contexts/StateActions.context";
import Santa from "./components/santa/Santa";
import Joke from "./components/joke/Joke.overlay";
import Header from "./components/Header";
import View from "./components/View";
import { AppContainer, CompleteOverlayContainer } from "./components/Lib";
import { SantaContext } from "./contexts/SantaContext";

const BBCSleighride = lazy(() => import("./pages/BBCSleighride.page"));
const Map = lazy(() => import("./pages/Map.page"));
const Quiz = lazy(() => import("./pages/Quiz.page"));
const Error = lazy(() => import("./pages/Error.page"));

const App: React.FC = () => {
  const { modalOpen: jokeOpen } = useSelector((state: State) => state.joke);
  const { state } = useContext(SantaContext);

  return (
    <StyledEngineProvider injectFirst>
      <ThemeProvider theme={theme}>
        <GlobalStyle />
        <AppContainer>
          <Header />
          <ActionsProvider>
            <View backgroundImg>
              {jokeOpen && (
                <CompleteOverlayContainer>
                  <View style={{ paddingTop: "4em" }}>
                    <Joke />
                  </View>
                </CompleteOverlayContainer>
              )}
              {state.isOpen && <Santa />}

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
