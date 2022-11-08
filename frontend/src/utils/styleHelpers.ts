import { colorVariants, textVariants, breakpoints } from "../types/constants";
import { theme } from "./theme";

// Font variants

export const getTextColor = (color: string): string => {
  const { palette } = theme;
  switch (color) {
    case colorVariants.primary:
      return palette.primaryText.main;
    case colorVariants.primaryAlt:
      return palette.primaryText.contrastText;
    default:
      return palette.primaryText.main;
  }
};

export const getFontVariant = (variant: string): Utils.FontVariant => {
  const { typography } = theme;
  const fontVariant: Utils.FontVariant = {
    fontWeight: null,
    fontFamily: null,
    fontSize: null,
  };

  switch (variant) {
    case textVariants.h2:
      fontVariant.fontWeight = typography.h2.fontWeight;
      fontVariant.fontFamily = typography.h2.fontFamily;
      fontVariant.fontSize = typography.h2.fontSize;
      break;
    case textVariants.h3:
      fontVariant.fontWeight = typography.h3.fontWeight;
      fontVariant.fontFamily = typography.h3.fontFamily;
      fontVariant.fontSize = typography.h3.fontSize;
      break;
    case textVariants.body1:
      fontVariant.fontWeight = typography.body1.fontWeight;
      fontVariant.fontFamily = typography.body1.fontFamily;
      fontVariant.fontSize = typography.body1.fontSize;
      break;
    default:
      fontVariant.fontWeight = typography.body1.fontWeight;
      fontVariant.fontFamily = typography.body1.fontFamily;
      fontVariant.fontSize = typography.body1.fontSize;
  }
  return fontVariant;
};

// Responsiveness

export const getBreakpointMatches = (breakpoint?: string): number | null => {
  const { viewports } = theme;
  switch (breakpoint) {
    case breakpoints.xSmall:
      return viewports.mobileS;

    case breakpoints.small:
      return viewports.mobileL;

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
