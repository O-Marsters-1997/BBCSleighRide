import * as quizCreators from "./quizCreators";
import * as jokeCreators from "./jokeCreators";
import * as mapCreators from "./mapCreators";

export const actionCreators = {
  ...quizCreators,
  ...jokeCreators,
  ...mapCreators,
};
