import React, { useContext } from "react";
import { useNavigate } from "react-router-dom";
import { Dispatch } from "redux";
import { useDispatch, useSelector } from "react-redux";
import { State } from "../../state/reducers";
import { ActionType } from "../../state/actionTypes";
import { ActionsContext } from "../../contexts/StateActions.context";
import { correctPercentage } from "../../utils/quizHelpers";

const QuizEnd = () => {
  const navigate = useNavigate();
  const dispatch: Dispatch = useDispatch();
  const { livesLeft, totalQuestions, correctQuestions, incorrectQuestions } =
    useSelector((state: State) => state.quiz);
  const { endQuiz } = useContext(ActionsContext) ?? {};

  const handleEndQuiz = (): void => {
    dispatch({ type: ActionType.END_QUIZ });
    navigate("/");
  };

  return (
    <>
      <div>
        {livesLeft == 0 ? (
          <div>
            <p>You have been unsuccessful</p>
          </div>
        ) : (
          <div>
            <p>You have completed the quiz</p>
            <p>
              You got {correctQuestions - incorrectQuestions} correct out of{" "}
              {totalQuestions}
            </p>
            <p>
              That is
              {correctPercentage(
                correctQuestions,
                incorrectQuestions,
                totalQuestions,
              )}
            </p>
          </div>
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
