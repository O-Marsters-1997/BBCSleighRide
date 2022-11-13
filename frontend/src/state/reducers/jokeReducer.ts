import { ActionType } from "../actionTypes";

const initialState: Joke.JokeState = {
  response: undefined,
  loading: true,
  error: null,
  newRequest: 0,
  modalOpen: false,
  selectedJoke: null,
  toggleJokeView: false,
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
    case ActionType.REFETCH_JOKE:
      return { ...state, newRequest: state.newRequest + 1 };
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
    case ActionType.RESET_JOKE:
      return { ...state, loading: true };
    default:
      return state;
  }
};

export default reducer;
