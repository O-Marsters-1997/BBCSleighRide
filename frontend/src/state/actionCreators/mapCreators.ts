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

export const toggleInstructions =
  () => (dispatch: Dispatch<Countries.Action>) => {
    dispatch({
      type: ActionType.TOGGLE_INSTRUCTIONS,
    });
  };

export const selectGreeting =
  (greeting: string) => (dispatch: Dispatch<Countries.Action>) => {
    dispatch({
      type: ActionType.SELECT_GREETING,
      payload: greeting,
    });
  };

export const setMapPosition =
  (position: Countries.MapAxis) => (dispatch: Dispatch<Countries.Action>) => {
    dispatch({
      type: ActionType.SET_MAP_POSITION,
      payload: position,
    });
  };
