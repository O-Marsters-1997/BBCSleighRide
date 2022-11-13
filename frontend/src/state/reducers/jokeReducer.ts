import { ActionType } from "../actionTypes";

const initialState: Joke.JokeState = {
  response: undefined,
  loading: true,
  error: null,
  modalOpen: false,
  selectedJoke: null,
};

const reducer = (
  state: Joke.JokeState = initialState,
  action: Joke.Action,
): Joke.JokeState => {
  switch (action.type) {
    case ActionType.SET_JOKE:
      return { ...state, response: action.payload, loading: false };
    case ActionType.JOKE_ERROR:
      return { ...state, error: action.payload, loading: false };
    case ActionType.SHOW_MODAL:
      return {
        ...state,
        modalOpen: true,
      };
    case ActionType.HIDE_MODAL:
      return {
        ...state,
        modalOpen: false,
        selectedJoke: null,
      };
    case ActionType.SELECT_JOKE:
      return {
        ...state,
        selectedJoke: action.payload,
      };
    default:
      return state;
  }
};

export default reducer;
