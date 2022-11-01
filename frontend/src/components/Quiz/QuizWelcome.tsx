import React, { useContext } from "react";
import { ActionsContext } from "../../contexts/StateActions.context";

const QuizWelcome = () => {
  const { startQuiz } = useContext(ActionsContext) ?? {};
  return (
    <>
      <div>I am the quiz welcome</div>
      <button type="button" onClick={startQuiz}>
        Click to start quiz
      </button>
    </>
  );
};

export default QuizWelcome;
