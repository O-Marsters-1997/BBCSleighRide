import { theme } from "../utils/theme";

const { viewports } = theme;

// API
export const endpoints: Endpoints = {
  joke: "joke",
  quiz: "questions",
  map: "map",
};

// Quiz
export const currentAnswerQuiz = {
  incorrect: "incorrect",
  correct: "correct", //
};

// Loading Component
export const LoadingSizes: Utils.LoadingSizeMap = {
  small: "small",
  medium: "medium",
  large: "large",
};

export enum Size {
  small = 50,
  medium = 75,
  large = 100,
}

// Text Component

export const colorVariants: Utils.ColorVariantMap = {
  primary: "primary",
  primaryAlt: "primaryAlt",
  secondary: "secondary",
  secondaryAlt: "secondaryAlt",
  grey: "grey",
  greyAlt: "greyAlt",
};

export const textVariants: Utils.TextVariantMap = {
  h1: "h1",
  h2: "h2",
  h3: "h3",
  h4: "h4",
  h5: "h5",
  h6: "h6",
  subtitle1: "subtitle1",
  subtitle2: "subtitle2",
  body1: "body1",
  body2: "body2",
  caption: "caption",
  button: "button",
  overline: "overline",
  inherit: "inherit",
};

// Responsiveness Components

export const breakpoints: Utils.BreakpointsMap = {
  xSmall: "xSmall",
  small: "small",
  smallMedium: "smallMedium",
  medium: "medium",
  mediumPlus: "mediumPlus",
  mediumLarge: "mediumLarge",
  large: "large",
  xLarge: "xLarge",
};

export const deviceMin = {
  xSmall: `(min-width: ${viewports.mobileS}px)`,
  small: `(min-width: ${viewports.mobileL}px)`,
  smallMedium: `(min-width: ${viewports.tabletS}px)`,
  medium: `(min-width: ${viewports.tablet}px)`,
  mediumPlus: `(min-width: ${viewports.laptop}px)`,
  mediumLarge: `(min-width: ${viewports.laptopM}px)`,
  large: `(min-width: ${viewports.laptopL}px)`,
  xLarge: `(min-width: ${viewports.desktop}px)`,
};

export const deviceMax = {
  xSmall: `(max-width: ${viewports.mobileS}px)`,
  small: `(max-width: ${viewports.mobileL}px)`,
  smallMedium: `(max-width: ${viewports.tabletS}px)`,
  medium: `(max-width: ${viewports.tablet}px)`,
  mediumPlus: `(max-width: ${viewports.laptop}px)`,
  mediumLarge: `(max-width: ${viewports.laptopM}px)`,
  large: `(max-width: ${viewports.laptopL}px)`,
  xLarge: `(max-width: ${viewports.desktop}px)`,
};
