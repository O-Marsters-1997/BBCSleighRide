import React, { createContext } from "react";
import type { ReactNode } from "react";
import { bindActionCreators, Dispatch } from "redux";
import { useDispatch } from "react-redux";
import { actionCreators } from "../state/actionCreators";

export const ActionsContext = createContext<Quiz.Context | null>(null);

const QuizActionsProvider = ({ children }: { children: ReactNode }) => {
  const dispatch: Dispatch = useDispatch();
  const actions = bindActionCreators(actionCreators, dispatch);

  return (
    <ActionsContext.Provider value={actions}>
      {children}
    </ActionsContext.Provider>
  );
};

export default QuizActionsProvider;
