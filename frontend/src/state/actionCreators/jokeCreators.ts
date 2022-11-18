import { Dispatch } from "redux";
import { AxiosError } from "axios";
import { ActionType } from "../actionTypes";

export const setJoke = (joke: Joke) => (dispatch: Dispatch<Joke.Action>) => {
  dispatch({
    type: ActionType.SET_JOKE,
    payload: joke,
  });
};

export const jokeError =
  (error: AxiosError) => (dispatch: Dispatch<Joke.Action>) => {
    dispatch({
      type: ActionType.JOKE_ERROR,
      payload: error,
    });
  };

export const resetJoke = () => (dispatch: Dispatch<Joke.Action>) => {
  dispatch({
    type: ActionType.RESET_JOKE,
  });
};

export const showModal = () => (dispatch: Dispatch<Joke.Action>) => {
  dispatch({
    type: ActionType.SHOW_MODAL,
  });
};

export const hideModal = () => (dispatch: Dispatch<Joke.Action>) => {
  dispatch({
    type: ActionType.HIDE_MODAL,
  });
};
