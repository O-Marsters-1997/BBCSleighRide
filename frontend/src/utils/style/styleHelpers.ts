import {
  colorVariants,
  textVariants,
  LoadingSizes,
  Size,
  currentAnswerQuiz,
  breakpoints,
} from "../../types/constants";
import { useViewport } from "../../hooks/useViewport";
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
const h2Modifier = () => {
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

export const useModifier = (variant: Utils.TextVariant): number => {
  const viewport = useViewport();

  const h3Modifier = () => {
    const { modifiers } = theme;
    switch (true) {
      case viewport(breakpoints.large as Utils.Breakpoints):
        return modifiers.x7;
      case viewport(breakpoints.mediumLarge as Utils.Breakpoints):
        return modifiers.x4;
      case viewport(breakpoints.mediumPlus as Utils.Breakpoints):
        return modifiers.x4;
      case viewport(breakpoints.medium as Utils.Breakpoints):
        return modifiers.x4;
      case viewport(breakpoints.smallMedium as Utils.Breakpoints):
        return modifiers.x3;
      case viewport(breakpoints.small as Utils.Breakpoints):
        return modifiers.x2;
      default:
        return modifiers.x1;
    }
  };

  const h5Modifier = () => {
    const width = window.innerWidth;
    const { viewports, modifiers } = theme;
    switch (true) {
      case width > viewports.laptopL:
        return modifiers.x7;
      case width > viewports.laptopM:
        return modifiers.x7;
      case width > viewports.laptop:
        return modifiers.x7;
      case width > viewports.tablet:
        console.log("yes");
        return modifiers.x7;
      case width > viewports.mobileL:
        return modifiers.x3;
      case width > viewports.mobileS:
        return modifiers.x2;
      default:
        return modifiers.x1;
    }
  };

  const getModifier = () => {
    switch (variant) {
      case textVariants.h2:
        return h2Modifier();
      case textVariants.h3:
        console.log(h3Modifier());
        return h3Modifier();
      case textVariants.h5:
        return h5Modifier();
      default:
        return 1;
    }
  };

  return getModifier();
};
