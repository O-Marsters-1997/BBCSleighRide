import React, { useContext } from "react";
import { ActionsContext } from "../../contexts/StateActions.context";
import Button from "../Button";

const QuizWelcome = () => {
  const { startQuiz } = useContext(ActionsContext) ?? {};
  return (
    <>
      <div>I am the quiz welcome</div>
      <Button onClick={startQuiz} text="click here to start the quiz" />
    </>
  );
};

export default QuizWelcome;
