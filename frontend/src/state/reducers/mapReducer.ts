import { ActionType } from "../actionTypes";

const initialState: Countries.MapState = {
  countries: undefined,
};

const reducer = (
  state: Countries.MapState = initialState,
  action: Countries.Action,
) => {
  switch (action.type) {
    case ActionType.SET_COUNTRIES:
      return { ...state, countries: action.payload };
    default:
      return state;
  }
};

export default reducer;
