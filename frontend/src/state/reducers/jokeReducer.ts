import { ActionType } from "../actionTypes";

const initialState: Joke.JokeState = {
  modalOpen: false,
};

const reducer = (state: Joke.JokeState = initialState, action: Joke.Action) => {
  switch (action.type) {
    case ActionType.SHOW_MODAL:
      return {
        ...state,
        modalOpen: true,
      };
    case ActionType.HIDE_MODAL:
      return {
        ...state,
        modalOpen: false,
      };
    default:
      return state;
  }
};

export default reducer;
