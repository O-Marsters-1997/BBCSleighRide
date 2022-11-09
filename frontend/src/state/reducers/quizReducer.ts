import { ActionType } from "../actionTypes";
import { currentAnswerQuiz } from "../../types/constants";

const inititalState: Quiz.QuizGame = {
  questions: [],
  currentAnswer: undefined,
  answeredCorrectly: false,
  readyToPlay: false,
  correctQuestions: 0,
  incorrectQuestions: 0,
  totalQuestions: 0,
  questionsRemaining: 5,
  livesLeft: 5,
};

const reducer = (state: Quiz.QuizGame = inititalState, action: Quiz.Action) => {
  switch (action.type) {
    case ActionType.RESET_QUIZ:
      return inititalState;
    case ActionType.START_QUIZ:
      return { ...inititalState, readyToPlay: true };
    case ActionType.ANSWER_CORRECTLY:
      return {
        ...state,
        questionsRemaining: state.questionsRemaining - 1,
        correctQuestions: state.correctQuestions + 1,
        currentAnswer: currentAnswerQuiz.correct,
        answeredCorrectly: true,
      };
    case ActionType.ANSWER_INCORRECTLY:
      return {
        ...state,
        questionsRemaining: state.questionsRemaining - 1,
        incorrectQuestions: state.incorrectQuestions + 1,
        livesLeft: state.livesLeft - 1,
        currentAnswer: currentAnswerQuiz.incorrect,
      };
    case ActionType.NEXT_QUESTION:
      return {
        ...state,
        totalQuestions: state.totalQuestions + 1,
        answeredCorrectly: false,
      };
    case ActionType.END_QUIZ:
      return inititalState;
    default:
      return state;
  }
};

export default reducer;
