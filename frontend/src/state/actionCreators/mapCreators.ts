import { Dispatch } from "redux";
import { ActionType } from "../actionTypes";

export const setCountries =
  (countries: Country[]) => (dispatch: Dispatch<Countries.Action>) => {
    dispatch({
      type: ActionType.SET_COUNTRIES,
      payload: countries,
    });
  };
