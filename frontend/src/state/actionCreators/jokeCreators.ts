import { Dispatch } from "redux";
import { ActionType } from "../actionTypes";

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
