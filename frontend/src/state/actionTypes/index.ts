export enum ActionType {
  // Quiz state
  SET_QUESTIONS = "set questions",
  QUESTIONS_ERROR = "questions error",
  RESET_QUIZ = "reset quiz",
  START_QUIZ = "start quiz",
  END_QUIZ = "end quiz",
  ANSWER_CORRECTLY = "answer correctly",
  ANSWER_INCORRECTLY = "answer incorrectly",
  NEXT_QUESTION = "next question",
  NEXT_QUESTION_GIVE_UP = "next question give up",
  // Joke state
  SET_JOKE = "set joke",
  JOKE_ERROR = "joke error",
  RESET_JOKE = "reset joke",
  SHOW_MODAL = "show modal",
  HIDE_MODAL = "hide modal",
  // Map state
  SET_COUNTRIES = "set countries",
  COUNTRIES_ERROR = "countries error",
  TOGGLE_INSTRUCTIONS = "toggle instructions",
  SELECT_GREETING = "select greeting",
  SET_MAP_POSITION = "map position",
}

export enum SantaActionType {
  TOGGLE = "toggle",
  RESET_MESSAGES = "reset messages",
  INCREMENT_MESSAGES = "increment messages",
}
