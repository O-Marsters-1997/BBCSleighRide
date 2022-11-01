import { Dispatch } from "redux";
import { ActionType } from "../actionTypes";

export const startQuiz = () => (dispatch: Dispatch<Quiz.Action>) => {
  dispatch({
    type: ActionType.START_QUIZ,
  });
};

export const answerCorrectly = () => (dispatch: Dispatch<Quiz.Action>) => {
  dispatch({
    type: ActionType.ANSWER_CORRECTLY,
  });
};

export const answerIncorrectly = () => (dispatch: Dispatch<Quiz.Action>) => {
  dispatch({
    type: ActionType.ANSWER_INCORRECTLY,
  });
};
