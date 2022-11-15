import React, { useReducer, createContext, useMemo, ReactNode } from "react";

export const SantaContext = createContext<any>(null);

const SantaProvider = ({ children }: { children: ReactNode }) => {
  const initialState = { isOpen: false };
  const reducer = (initial: any) => ({ ...initial, isOpen: !initial.isOpen });
  const [toggleSantaView, invertToggleSantaView] = useReducer(
    reducer,
    initialState,
  );

  const value = useMemo(
    () => ({ toggleSantaView, invertToggleSantaView }),
    [toggleSantaView],
  );
  return (
    <SantaContext.Provider value={value}>{children}</SantaContext.Provider>
  );
};

export default SantaProvider;
