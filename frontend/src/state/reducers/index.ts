import { combineReducers } from "redux";
import quizReducer from "./quizReducer";
import jokeReducer from "./jokeReducer";

const reducers = combineReducers({
  quiz: quizReducer,
  joke: jokeReducer,
});

export default reducers;

export type State = ReturnType<typeof reducers>;
