export enum ActionType {
  // Quiz state
  GET_QUESTIONS = "get questions",
  LOAD_QUESTIONS = "load questions",
  RESET_QUIZ = "reset quiz",
  START_QUIZ = "start quiz",
  END_QUIZ = "end quiz",
  ANSWER_CORRECTLY = "answer correctly",
  ANSWER_INCORRECTLY = "answer incorrectly",
  NEXT_QUESTION = "next question",
  NEXT_QUESTION_GIVE_UP = "next question give up",
  // Joke state
  SHOW_MODAL = "show modal",
  HIDE_MODAL = "hide modal",
  SELECT_JOKE = "select joke",
  // Map state
  SET_COUNTRIES = "set countries",
}
