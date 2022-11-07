import { colorVariants } from "../types/constants";
import { theme } from "./theme";

export const getTextColor = (color: string) => {
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

export const getFontVariant = (variant: string) => {
  const { typography } = theme;
  const fontVariant: Utils.FontVariant = {
    fontWeight: null,
    fontFamily: null,
    fontSize: null,
  };
  console.log(variant);

  switch (variant) {
    case "h2":
      fontVariant.fontWeight = typography.h2.fontWeight;
      fontVariant.fontFamily = typography.h2.fontFamily;
      fontVariant.fontSize = typography.h2.fontSize;
      break;
    default:
      fontVariant.fontWeight = typography.body1.fontWeight;
      fontVariant.fontFamily = typography.body1.fontFamily;
      fontVariant.fontSize = typography.body1.fontSize;
  }
  return fontVariant;
};
