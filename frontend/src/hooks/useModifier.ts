import { theme } from "../utils/theme";
import { breakpoints, textVariants } from "../types/constants";
import { useViewport } from "./useViewport";

export const useModifier = (variant: Utils.TextVariant): number => {
  const viewport = useViewport();
  const { viewports, modifiers } = theme;

  const body1Modifier = () => {
    switch (true) {
      case viewport(breakpoints.large as Utils.Breakpoints):
        return modifiers.x6;
      case viewport(breakpoints.mediumLarge as Utils.Breakpoints):
        return modifiers.x6;
      case viewport(breakpoints.mediumPlus as Utils.Breakpoints):
        return modifiers.x5;
      case viewport(breakpoints.medium as Utils.Breakpoints):
        return modifiers.x4;
      case viewport(breakpoints.smallMedium as Utils.Breakpoints):
        return modifiers.x3;
      case viewport(breakpoints.small as Utils.Breakpoints):
        return modifiers.x3;
      default:
        return modifiers.x2;
    }
  };

  const h2Modifier = () => {
    const width = window.innerWidth;

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

  const h3Modifier = () => {
    switch (true) {
      case viewport(breakpoints.large as Utils.Breakpoints):
        return modifiers.x8;
      case viewport(breakpoints.mediumLarge as Utils.Breakpoints):
        return modifiers.x4;
      case viewport(breakpoints.mediumPlus as Utils.Breakpoints):
        return modifiers.x4;
      case viewport(breakpoints.medium as Utils.Breakpoints):
        return modifiers.x3;
      case viewport(breakpoints.smallMedium as Utils.Breakpoints):
        return modifiers.x3;
      case viewport(breakpoints.small as Utils.Breakpoints):
        return modifiers.x2;
      default:
        return modifiers.x1;
    }
  };

  const h4Modifier = () => {
    switch (true) {
      case viewport(breakpoints.large as Utils.Breakpoints):
        return modifiers.x8;
      case viewport(breakpoints.mediumLarge as Utils.Breakpoints):
        return modifiers.x6;
      case viewport(breakpoints.mediumPlus as Utils.Breakpoints):
        return modifiers.x5;
      case viewport(breakpoints.medium as Utils.Breakpoints):
        return modifiers.x5;
      case viewport(breakpoints.smallMedium as Utils.Breakpoints):
        return modifiers.x4;
      case viewport(breakpoints.small as Utils.Breakpoints):
        return modifiers.x3;
      default:
        return modifiers.x2;
    }
  };

  const h5Modifier = () => {
    switch (true) {
      case viewport(breakpoints.large as Utils.Breakpoints):
        return modifiers.x7;
      case viewport(breakpoints.mediumLarge as Utils.Breakpoints):
        return modifiers.x5;
      case viewport(breakpoints.mediumPlus as Utils.Breakpoints):
        return modifiers.x5;
      case viewport(breakpoints.medium as Utils.Breakpoints):
        return modifiers.x4;
      case viewport(breakpoints.smallMedium as Utils.Breakpoints):
        return modifiers.x4;
      case viewport(breakpoints.small as Utils.Breakpoints):
        return modifiers.x3;
      default:
        return modifiers.x2;
    }
  };

  const getModifier = () => {
    switch (variant) {
      case textVariants.body1:
        return body1Modifier();
      case textVariants.h2:
        return h2Modifier();
      case textVariants.h3:
        return h3Modifier();
      case textVariants.h4:
        return h4Modifier();
      case textVariants.h5:
        return h5Modifier();
      default:
        return 1;
    }
  };

  return getModifier();
};
