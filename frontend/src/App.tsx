import React, { useState, lazy, Suspense } from "react";
import { Routes, Route } from "react-router-dom";
import StyledEngineProvider from "@mui/material/StyledEngineProvider";
import { ThemeProvider } from "styled-components";
import { theme, GlobalStyle } from "./utils/theme";
import QuizActionsProvider from "./contexts/StateActions.context";
import View from "./components/View";
import Header from "./components/Header";

const BBCSleighride = lazy(() => import("./pages/BBCSleighride.page"));
const Map = lazy(() => import("./pages/Map.page"));
const Quiz = lazy(() => import("./pages/Quiz.page"));
const Joke = lazy(() => import("./pages/Joke.page"));
const Error = lazy(() => import("./pages/Error.page"));

const App: React.FC = () => {
  const [santaToggle, setSantaToggle] = useState<boolean>(false);

  const showSanta = (): void => {
    setSantaToggle(!santaToggle);
  };

  return (
    <StyledEngineProvider injectFirst>
      <ThemeProvider theme={theme}>
        <GlobalStyle />

        <Header showSanta={showSanta} />
        <View backgroundImg>
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
              path="joke/"
              element={
                <Suspense fallback={<>...</>}>
                  <Joke />
                </Suspense>
              }
            />
            <Route
              path="quiz/"
              element={
                <QuizActionsProvider>
                  <Suspense fallback={<>...</>}>
                    <Quiz />
                  </Suspense>
                </QuizActionsProvider>
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
      </ThemeProvider>
    </StyledEngineProvider>
  );
};

export default App;
