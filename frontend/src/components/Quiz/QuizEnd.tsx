import React, { useContext } from "react";
import { Dispatch } from "redux";
import { useDispatch } from "react-redux";
import { useNavigate } from "react-router-dom";
import { ActionType } from "../../state/actionTypes";
import { ActionsContext } from "../../contexts/StateActions.context";

const QuizEnd = () => {
  const navigate = useNavigate();
  const dispatch: Dispatch = useDispatch();
  const { endQuiz } = useContext(ActionsContext) ?? {};

  const handleEndQuiz = (): void => {
    console.log("exiting");
    dispatch({ type: ActionType.END_QUIZ });
    navigate("/");
  };

  return (
    <>
      <div>This is the end of the quiz</div>
      <button type="button" onClick={endQuiz}>
        Restart Quiz
      </button>
      <button type="button" onClick={handleEndQuiz}>
        Exit quiz
      </button>
    </>
  );
};

export default QuizEnd;
