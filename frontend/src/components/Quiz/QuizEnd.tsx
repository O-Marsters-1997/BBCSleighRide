import React, { useContext } from "react";
import { useNavigate } from "react-router-dom";
import { Dispatch } from "redux";
import { useDispatch, useSelector } from "react-redux";
import { State } from "../../state/reducers";
import { ActionType } from "../../state/actionTypes";
import { ActionsContext } from "../../contexts/StateActions.context";

const QuizEnd = () => {
  const navigate = useNavigate();
  const dispatch: Dispatch = useDispatch();
  const { livesLeft } = useSelector((state: State) => state.quiz);
  const { endQuiz } = useContext(ActionsContext) ?? {};

  const handleEndQuiz = (): void => {
    console.log("exiting");
    dispatch({ type: ActionType.END_QUIZ });
    navigate("/");
  };

  return (
    <>
      <div>
        {livesLeft == 0 ? (
          <p>You have been unsuccessful</p>
        ) : (
          <p>You have completed the quiz</p>
        )}
      </div>
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
