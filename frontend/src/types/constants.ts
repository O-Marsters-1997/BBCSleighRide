import { theme } from "../utils/theme";

const { viewports } = theme;

// Loading Component
export const LoadingSizes: Utils.LoadingSizeMap = {
  small: "small",
  medium: "medium",
  large: "large",
};

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

export const device = {
  mobileS: `(min-width: ${viewports.mobileS}px)`,
  mobileL: `(min-width: ${viewports.mobileL}px)`,
  tablet: `(min-width: ${viewports.tablet}px)`,
  laptop: `(min-width: ${viewports.laptop}px)`,
  laptopM: `(min-width: ${viewports.laptopM}px)`,
  LaptopL: `(min-width: ${viewports.laptopL}px)`,
  desktop: `(min-width: ${viewports.desktop}px)`,
};
