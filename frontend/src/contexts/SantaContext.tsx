import React, { useReducer, createContext, useMemo, ReactNode } from "react";

export const SantaContext = createContext<any>(null);

const SantaProvider = ({ children }: { children: ReactNode }) => {
  const reducer = (initial: any) => !initial;
  const [toggleSantaView, invertToggleSantaView] = useReducer<any>(
    reducer,
    false,
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
