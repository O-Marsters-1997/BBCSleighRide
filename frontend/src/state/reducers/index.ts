import { combineReducers } from "redux";
import quizReducer from "./quizReducer";
import jokeReducer from "./jokeReducer";
import mapReducer from "./mapReducer";

const reducers = combineReducers({
  quiz: quizReducer,
  joke: jokeReducer,
  map: mapReducer,
});

export default reducers;

export type State = ReturnType<typeof reducers>;
