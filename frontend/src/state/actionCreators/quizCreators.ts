import { Dispatch } from "redux";
import { ActionType } from "../actionTypes";

export const resetQuiz = () => (dispatch: Dispatch<Quiz.Action>) => {
  dispatch({
    type: ActionType.RESET_QUIZ,
  });
};

export const startQuiz = () => (dispatch: Dispatch<Quiz.Action>) => {
  dispatch({
    type: ActionType.START_QUIZ,
  });
};

export const endQuiz = () => (dispatch: Dispatch<Quiz.Action>) => {
  dispatch({
    type: ActionType.END_QUIZ,
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
