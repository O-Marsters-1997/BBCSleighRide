import React, { useState } from "react";
import { Routes, Route } from "react-router-dom";
import QuizActionsProvider from "./contexts/StateActions.context";

import BBCSleighride from "./pages/BBCSleighride.page";
import Map from "./pages/Map.page";
import Quiz from "./pages/Quiz.page";
import Error from "./pages/Error.page";
import ReduxTest from "./pages/ReduxTest.page";
import Header from "./components/Header";

const App: React.FC = () => {
  const [santaToggle, setSantaToggle] = useState<boolean>(false);

  const showSanta = (): void => {
    setSantaToggle(!santaToggle);
  };

  return (
    <>
      <Header showSanta={showSanta} />
      <Routes>
        <Route path="/" element={<BBCSleighride />} />
        <Route path="map/" element={<Map />} />
        <Route
          path="quiz/"
          element={
            <QuizActionsProvider>
              <Quiz />
            </QuizActionsProvider>
          }
        />
        <Route path="*" element={<Error />} />
        <Route path="*" element={<ReduxTest />} />
      </Routes>
    </>
  );
};

export default App;
