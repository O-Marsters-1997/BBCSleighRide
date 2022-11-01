import { Dispatch } from "redux";
import { ActionType } from "../actionTypes";

export const startQuiz = () => (dispatch: Dispatch<any>) => {
  dispatch({
    type: ActionType.START_QUIZ,
  });
};

export const answerCorrectly = () => (dispatch: Dispatch<any>) => {
  dispatch({
    type: ActionType.ANSWER_CORRECTLY,
  });
};

export const answerInCorrectly = () => (dispatch: Dispatch<any>) => {
  dispatch({
    type: ActionType.ANSWER_INCORRECTLY,
  });
};
