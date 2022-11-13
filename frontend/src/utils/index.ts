import { Dispatch } from "redux";
import { useSelector, useDispatch } from "react-redux";
import { PlayFunction } from "use-sound/dist/types";
import { endpoints } from "../types/constants";
import { ActionType } from "../state/actionTypes";
import { State } from "../state/reducers";

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

// Map

// zoom functions
export const HandleZoom = () => {
  const dispatch: Dispatch = useDispatch();
  const { position } = useSelector((state: State) => state.map);

  const handleZoomIn = () => {
    if (position.zoom >= 2.5) return;
    dispatch({
      type: ActionType.SET_MAP_POSITION,
      payload: { ...position, zoom: position.zoom * 1.2 },
    });
  };

  const handleZoomOut = () => {
    if (position.zoom <= 1.25) return;
    dispatch({
      type: ActionType.SET_MAP_POSITION,
      payload: { ...position, zoom: position.zoom / 1.2 },
    });
  };

  const handleMoveEnd = () => {
    dispatch({
      type: ActionType.SET_MAP_POSITION,
      payload: { ...position },
    });
  };

  return { handleZoomIn, handleZoomOut, handleMoveEnd };
};

// Sound functions
export const randomChristmasSound = (sounds: PlayFunction[]): void => {
  const toPlay = sounds[Math.floor(Math.random() * sounds.length)];
  return toPlay();
};

// Misc functions
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
