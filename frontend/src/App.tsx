import React, { useState } from "react";
import { Routes, Route } from "react-router-dom";
import BBCSleighride from "./pages/BBCSleighride.page";
import Map from "./pages/Map.page";
import Quiz from "./pages/Quiz.page";
import Error from "./pages/Error.page";
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
        <Route path="quiz/" element={<Quiz />} />
        <Route path="*" element={<Error />} />
      </Routes>
    </>
  );
};

export default App;
