import React from "react";
import { getBreakpointMatches } from "../utils/style/styleHelpers";

export const useViewport = (): ((size: Utils.Breakpoints) => boolean) => {
  const [width, setWidth] = React.useState<number>(window.innerWidth);

  const compareViewports = (size: Utils.Breakpoints): boolean => {
    const matches = getBreakpointMatches(size);
    return matches != null && width > matches;
  };

  React.useEffect(() => {
    const handleWindowResize = () => setWidth(window.innerWidth);
    window.addEventListener("resize", handleWindowResize);
    return () => window.removeEventListener("resize", handleWindowResize);
  }, []);

  return compareViewports;
};
