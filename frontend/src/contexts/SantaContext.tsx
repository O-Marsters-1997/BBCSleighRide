import React, { useReducer, createContext, useMemo, ReactNode } from "react";
import { SantaActionType } from "../state/actionTypes";

export const SantaContext = createContext<any>(null);

const SantaProvider = ({ children }: { children: ReactNode }) => {
  const initialState: Santa.SantaState = {
    isOpen: false,
    messages: [],
  };

  const reducer = (state: Santa.SantaState, action: Santa.SantaAction) => {
    const { type, payload } = action;
    switch (type) {
      case SantaActionType.TOGGLE:
        if (!state.isOpen) {
          return { ...state, isOpen: !state.isOpen };
        }
        return { ...state, isOpen: !state.isOpen, messages: [] };
      case SantaActionType.INCREMENT_MESSAGES:
        return { ...state, messages: state.messages.concat(payload) };
      default:
        return state;
    }
  };

  const [state, dispatch] = useReducer(reducer, initialState);

  const value = useMemo(() => ({ state, dispatch, SantaActionType }), [state]);
  return (
    <SantaContext.Provider value={value}>{children}</SantaContext.Provider>
  );
};

export default SantaProvider;
