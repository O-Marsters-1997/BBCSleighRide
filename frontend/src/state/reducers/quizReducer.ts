import { ActionType } from "../actionTypes";

const inititalState = {
  questionsRemaining: 5,
  livesLost: 0,
};

const reducer = (state: Quiz.QuizGame = inititalState, action: Quiz.Action) => {
  switch (action.type) {
    case ActionType.START_QUIZ:
      return inititalState;
    case ActionType.ANSWER_CORRECTLY:
      return {
        ...state,
        questionsRemaining: state.questionsRemaining - 1,
      };
    case ActionType.ANSWER_INCORRECTLY:
      return {
        ...state,
        questionsRemaining: state.questionsRemaining - 1,
        livesLost: state.livesLost + 1,
      };
    default:
      return state;
  }
};

export default reducer;
