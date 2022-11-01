import { ActionType } from "../actionTypes";

const inititalState = {
  correctQuestions: 0,
  incorrectQuestions: 0,
  totalQuestions: 0,
  questionsRemaining: 5,
};

const reducer = (state: Quiz.QuizGame = inititalState, action: Quiz.Action) => {
  switch (action.type) {
    case ActionType.START_QUIZ:
      return inititalState;
    case ActionType.ANSWER_CORRECTLY:
      return {
        ...state,
        questionsRemaining: state.questionsRemaining - 1,
        correctQuestions: state.correctQuestions + 1,
      };
    case ActionType.ANSWER_INCORRECTLY:
      return {
        ...state,
        questionsRemaining: state.questionsRemaining - 1,
        incorrectQuestions: state.incorrectQuestions + 1,
      };
    default:
      return state;
  }
};

export default reducer;
