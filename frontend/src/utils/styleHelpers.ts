import { colorVariants } from "../types/constants";
import { theme } from "./theme";

export const getTextColor = (color: string) => {
  const { palette } = theme;
  switch (color) {
    case colorVariants.PRIMARY:
      return palette.primaryText.main;
    case colorVariants.PRIMARY_ALT:
      return palette.primaryText.contrastText;
    default:
      return palette.primaryText.main;
  }
};
