import { endpoints } from "../types/constants";
import { ActionType } from "../state/actionTypes";

export const getActionType = (url: string): ActionTypeObject => {
  const result: ActionTypeObject = { res: null, err: null };

  switch (url) {
    case endpoints.quiz:
      result.res = ActionType.SET_QUESTIONS;
      result.err = ActionType.QUESTIONS_ERROR;
      break;
    case endpoints.joke:
      result.res = ActionType.SET_JOKE;
      result.err = ActionType.JOKE_ERROR;
      break;
    case endpoints.map:
      result.res = ActionType.SET_COUNTRIES;
      result.err = ActionType.COUNTRIES_ERROR;
      break;
    default:
      return result;
  }
  return result;
};

export const shuffleArray = (array: any[]) => {
  let currentIndex = array.length;
  let randomIndex;

  while (currentIndex != 0) {
    randomIndex = Math.floor(Math.random() * currentIndex);
    currentIndex -= 1;

    [array[currentIndex], array[randomIndex]] = [
      array[randomIndex],
      array[currentIndex],
    ];
  }

  return array;
};
