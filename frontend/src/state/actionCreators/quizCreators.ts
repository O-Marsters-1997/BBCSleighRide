import { Dispatch } from "redux";
import { AxiosError } from "axios";
import { ActionType } from "../actionTypes";

export const setQuestions =
  (questions: Quiz[]) => (dispatch: Dispatch<Quiz.Action>) => {
    dispatch({
      type: ActionType.SET_QUESTIONS,
      payload: questions,
    });
  };

export const questionsError =
  (error: AxiosError) => (dispatch: Dispatch<Quiz.Action>) => {
    dispatch({ type: ActionType.QUESTIONS_ERROR, payload: error });
  };

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

export const nextQuestion = () => (dispatch: Dispatch<Quiz.Action>) => {
  dispatch({
    type: ActionType.NEXT_QUESTION,
  });
};

export const nextQuestionGiveUp = () => (dispatch: Dispatch<Quiz.Action>) => {
  dispatch({
    type: ActionType.NEXT_QUESTION_GIVE_UP,
  });
};
