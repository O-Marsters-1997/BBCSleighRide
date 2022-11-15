import React from "react";
import { theme } from "../utils/theme";
import { breakpoints } from "../types/constants";

const getBreakpointMatches = (breakpoint?: string): number | null => {
  const { viewports } = theme;
  switch (breakpoint) {
    case breakpoints.xSmall:
      return viewports.mobileS;
    case breakpoints.small:
      return viewports.mobileL;
    case breakpoints.smallMedium:
      return viewports.tabletS;
    case breakpoints.medium:
      return viewports.tablet;
    case breakpoints.mediumPlus:
      return viewports.laptop;
    case breakpoints.mediumLarge:
      return viewports.laptopM;
    case breakpoints.large:
      return viewports.laptopL;
    case breakpoints.xLarge:
      return viewports.desktop;
    default:
      return null;
  }
};

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
