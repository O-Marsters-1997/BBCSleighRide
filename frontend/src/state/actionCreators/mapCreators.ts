import { Dispatch } from "redux";
import { AxiosError } from "axios";
import { ActionType } from "../actionTypes";

export const setCountries =
  (countries: Country[]) => (dispatch: Dispatch<Countries.Action>) => {
    dispatch({
      type: ActionType.SET_COUNTRIES,
      payload: countries,
    });
  };

export const countriesError =
  (error: AxiosError) => (dispatch: Dispatch<Countries.Action>) => {
    dispatch({
      type: ActionType.COUNTRIES_ERROR,
      payload: error,
    });
  };
