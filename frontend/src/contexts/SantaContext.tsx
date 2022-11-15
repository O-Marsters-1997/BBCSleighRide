import React, { useReducer, createContext, useMemo, ReactNode } from "react";

export const SantaContext = createContext<any>(null);

const SantaProvider = ({ children }: { children: ReactNode }) => {
  const reducer = (initial: any) => !initial;
  const [toggleSantaView, setToggleSantaView] = useReducer<any>(reducer, false);

  const value = useMemo(
    () => ({ toggleSantaView, setToggleSantaView }),
    [toggleSantaView],
  );
  return (
    <SantaContext.Provider value={value}>{children}</SantaContext.Provider>
  );
};

export default SantaProvider;
