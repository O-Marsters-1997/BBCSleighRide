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
    fontWeight: typography.body1.fontWeight,
    fontFamily: typography.body1.fontFamily,
    fontSize: typography.body1.fontSize,
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
    case textVariants.h4:
      fontVariant.fontWeight = typography.h4.fontWeight;
      fontVariant.fontFamily = typography.h4.fontFamily;
      fontVariant.fontSize = typography.h4.fontSize;
      break;
    case textVariants.h5:
      fontVariant.fontWeight = typography.h5.fontWeight;
      fontVariant.fontFamily = typography.h5.fontFamily;
      fontVariant.fontSize = typography.h5.fontSize;
      break;
    case textVariants.body1:
      fontVariant.fontWeight = typography.body1.fontWeight;
      fontVariant.fontFamily = typography.body1.fontFamily;
      fontVariant.fontSize = typography.body1.fontSize;
      break;
    default:
      break;
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

const h3Modifier = () => {
  const width = window.innerWidth;
  const { viewports, modifiers } = theme;
  switch (true) {
    case width > viewports.laptopL:
      return modifiers.x7;
    case width > viewports.laptopM:
      return modifiers.x6;
    case width > viewports.laptop:
      return modifiers.x5;
    case width > viewports.tablet:
      return modifiers.x4;
    case width > viewports.mobileL:
      return modifiers.x3;
    case width > viewports.mobileS:
      return modifiers.x2;
    default:
      return modifiers.x1;
  }
};

export const getModifier = (variant: Utils.TextVariant) => {
  switch (variant) {
    case textVariants.h3:
      return h3Modifier();
    default:
      return 1;
  }
};
