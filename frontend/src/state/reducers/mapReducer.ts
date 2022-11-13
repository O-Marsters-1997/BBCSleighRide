import { ActionType } from "../actionTypes";

const initialState: Countries.MapState = {
  response: undefined,
  loading: true,
  error: null,
  selectedMapFilter: "greeting",
  position: {
    coordinates: [10, 8],
    zoom: 1.1,
  },
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
    case ActionType.SELECT_GREETING:
      return { ...state, selectedMapFilter: action.payload };
    case ActionType.SET_MAP_POSITION:
      return { ...state, position: action.payload };
    default:
      return state;
  }
};

export default reducer;
