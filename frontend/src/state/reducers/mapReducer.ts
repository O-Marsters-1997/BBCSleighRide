import { ActionType } from "../actionTypes";

const initialState: Countries.MapState = {
  response: undefined,
  loading: true,
  error: null,
};

const reducer = (
  state: Countries.MapState = initialState,
  action: Countries.Action,
): Countries.MapState => {
  switch (action.type) {
    case ActionType.SET_COUNTRIES:
      return { ...state, response: action.payload, loading: false };
    case ActionType.COUNTRIES_ERROR:
      return { ...state, error: action.payload, loading: false };
    default:
      return state;
  }
};

export default reducer;
