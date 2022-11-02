import React, { useState, lazy, Suspense } from "react";
import { Routes, Route } from "react-router-dom";
import QuizActionsProvider from "./contexts/StateActions.context";

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
    <>
      <Header showSanta={showSanta} />
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
            <Suspense fallback={<>...</>}>
              <QuizActionsProvider>
                <Quiz />
              </QuizActionsProvider>
            </Suspense>
          }
        />
        <Route path="*" element={<Error />} />
      </Routes>
    </>
  );
};

export default App;
