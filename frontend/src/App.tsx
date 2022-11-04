import React, { useState } from "react";
import { Routes, Route } from "react-router-dom";
// import StyledEngineProvider from "@mui/material/StyledEngineProvider";
import { ThemeProvider } from "styled-components";
import { theme, GlobalStyle } from "./utils/theme";
import QuizActionsProvider from "./contexts/StateActions.context";
import View from "./components/View";
import Header from "./components/Header";

import BBCSleighride from "./pages/BBCSleighride.page";
import Map from "./pages/Map.page";
import Quiz from "./pages/Quiz.page";
import Joke from "./pages/Joke.page";
import Error from "./pages/Error.page";

// const BBCSleighride = lazy(() => import("./pages/BBCSleighride.page"));
// const Map = lazy(() => import("./pages/Map.page"));
// const Quiz = lazy(() => import("./pages/Quiz.page"));
// const Joke = lazy(() => import("./pages/Joke.page"));
// const Error = lazy(() => import("./pages/Error.page"));

const App: React.FC = () => {
  const [santaToggle, setSantaToggle] = useState<boolean>(false);

  const showSanta = (): void => {
    setSantaToggle(!santaToggle);
  };

  return (
    // <StyledEngineProvider injectFirst>
    <ThemeProvider theme={theme}>
      <GlobalStyle />

      <Header showSanta={showSanta} />
      <View backgroundImg>
        <Routes>
          <Route path="/" element={<BBCSleighride />} />
          <Route path="map/" element={<Map />} />
          <Route path="joke/" element={<Joke />} />
          <Route
            path="quiz/"
            element={
              <QuizActionsProvider>
                <Quiz />
              </QuizActionsProvider>
            }
          />
          <Route path="*" element={<Error />} />
        </Routes>
      </View>
    </ThemeProvider>
    // </StyledEngineProvider>
  );
};

export default App;
