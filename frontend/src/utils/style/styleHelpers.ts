import {
  colorVariants,
  textVariants,
  LoadingSizes,
  Size,
  currentAnswerQuiz,
  breakpoints,
} from "../../types/constants";
import { theme } from "../theme";

// Palette variants

export const getBorderColor = (color: Utils.ColorVariant) => {
  const { palette } = theme;
  switch (color) {
    case colorVariants.primary:
      return palette.primary.main;
    case colorVariants.primaryAlt:
      return palette.primary.contrastText;
    case colorVariants.secondary:
      return palette.secondary.main;
    case colorVariants.secondaryAlt:
      return palette.secondary.contrastText;
    default:
      return "initial";
  }
};

// Font variants
export const getTextColor = (color: string): string => {
  const { palette } = theme;
  switch (color) {
    case colorVariants.primary:
      return palette.primaryText.main;
    case colorVariants.primaryAlt:
      return palette.primaryText.contrastText;
    case colorVariants.secondary:
      return palette.secondaryText.main;
    case colorVariants.secondaryAlt:
      return palette.secondaryText.contrastText;
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
    case textVariants.h1:
      fontVariant.fontWeight = typography.h1.fontWeight;
      fontVariant.fontFamily = typography.h1.fontFamily;
      fontVariant.fontSize = typography.h1.fontSize;
      break;
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
    case textVariants.h6:
      fontVariant.fontWeight = typography.h6.fontWeight;
      fontVariant.fontFamily = typography.h6.fontFamily;
      fontVariant.fontSize = typography.h6.fontSize;
      break;
    case textVariants.body1:
      fontVariant.fontWeight = typography.body1.fontWeight;
      fontVariant.fontFamily = typography.body1.fontFamily;
      fontVariant.fontSize = typography.body1.fontSize;
      break;
    case textVariants.body2:
      fontVariant.fontWeight = typography.body2.fontWeight;
      fontVariant.fontFamily = typography.body2.fontFamily;
      fontVariant.fontSize = typography.body2.fontSize;
      break;
    case textVariants.subtitle1:
      fontVariant.fontWeight = typography.subtitle1.fontWeight;
      fontVariant.fontFamily = typography.subtitle1.fontFamily;
      fontVariant.fontSize = typography.subtitle1.fontSize;
      break;
    case textVariants.subtitle2:
      fontVariant.fontWeight = typography.subtitle2.fontWeight;
      fontVariant.fontFamily = typography.subtitle2.fontFamily;
      fontVariant.fontSize = typography.subtitle2.fontSize;
      break;
    default:
      break;
  }
  return fontVariant;
};

export const getTextBackgroundColor = (
  selected: number,
  index: number,
  answer: Quiz.CurrentAnswer,
): string | undefined => {
  const { palette } = theme;
  if (selected != index) {
    return palette.primary.additional;
  }
  return answer == currentAnswerQuiz.correct
    ? palette.secondary.main
    : palette.primary.main;
};

// Loading

export const getLoadingSize = (size?: string): number | null => {
  switch (size) {
    case LoadingSizes.small:
      return Size.small;
    case LoadingSizes.medium:
      return Size.medium;
    case LoadingSizes.large:
      return Size.large;
    default:
      return 15;
  }
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

export const getElfSize = (modify: (size: Utils.Breakpoints) => boolean) => {
  switch (true) {
    case modify(breakpoints.medium):
      return "14em";
    case modify(breakpoints.small):
      return "10em";
    default:
      return "8em";
  }
};
