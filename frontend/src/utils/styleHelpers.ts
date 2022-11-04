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
