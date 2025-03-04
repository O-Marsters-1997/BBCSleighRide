import { theme } from "../utils/theme";
import { breakpoints, textVariants } from "../types/constants";
import { useViewport } from "./useViewport";

export const useModifier = (variant: Utils.TextVariant): number => {
  const viewport = useViewport();
  const { modifiers } = theme;

  const body1Modifier = () => {
    switch (true) {
      case viewport(breakpoints.large):
        return modifiers.x7;
      case viewport(breakpoints.mediumLarge):
        return modifiers.x7;
      case viewport(breakpoints.mediumPlus):
        return modifiers.x6;
      case viewport(breakpoints.medium):
        return modifiers.x5;
      case viewport(breakpoints.smallMedium):
        return modifiers.x4;
      case viewport(breakpoints.small):
        return modifiers.x4;
      default:
        return modifiers.x3;
    }
  };

  const body2Modifier = () => {
    switch (true) {
      case viewport(breakpoints.large):
        return modifiers.x7;
      case viewport(breakpoints.mediumLarge):
        return modifiers.x7;
      case viewport(breakpoints.mediumPlus):
        return modifiers.x6;
      case viewport(breakpoints.medium):
        return modifiers.x5;
      case viewport(breakpoints.smallMedium):
        return modifiers.x4;
      case viewport(breakpoints.small):
        return modifiers.x4;
      default:
        return modifiers.x3;
    }
  };

  const h1Modifier = () => {
    switch (true) {
      case viewport(breakpoints.xLarge):
        return modifiers.x11;
      case viewport(breakpoints.large):
        return modifiers.x6;
      case viewport(breakpoints.mediumLarge):
        return modifiers.x3;
      case viewport(breakpoints.mediumPlus):
        return modifiers.x3;
      case viewport(breakpoints.medium):
        return modifiers.x1;
      case viewport(breakpoints.smallMedium):
        return modifiers.x4;
      case viewport(breakpoints.small):
        return modifiers.x1;
      default:
        return modifiers.x1;
    }
  };

  const h2Modifier = () => {
    switch (true) {
      case viewport(breakpoints.large):
        return modifiers.x8;
      case viewport(breakpoints.mediumLarge):
        return modifiers.x7;
      case viewport(breakpoints.mediumPlus):
        return modifiers.x6;
      case viewport(breakpoints.medium):
        return modifiers.x5;
      case viewport(breakpoints.smallMedium):
        return modifiers.x4;
      case viewport(breakpoints.small):
        return modifiers.x3;
      default:
        return modifiers.x2;
    }
  };

  const h3Modifier = () => {
    switch (true) {
      case viewport(breakpoints.large):
        return modifiers.x9;
      case viewport(breakpoints.mediumLarge):
        return modifiers.x5;
      case viewport(breakpoints.mediumPlus):
        return modifiers.x5;
      case viewport(breakpoints.medium):
        return modifiers.x4;
      case viewport(breakpoints.smallMedium):
        return modifiers.x4;
      case viewport(breakpoints.small):
        return modifiers.x3;
      default:
        return modifiers.x2;
    }
  };

  const h4Modifier = () => {
    switch (true) {
      case viewport(breakpoints.large):
        return modifiers.x9;
      case viewport(breakpoints.mediumLarge):
        return modifiers.x7;
      case viewport(breakpoints.mediumPlus):
        return modifiers.x6;
      case viewport(breakpoints.medium):
        return modifiers.x6;
      case viewport(breakpoints.smallMedium):
        return modifiers.x5;
      case viewport(breakpoints.small):
        return modifiers.x4;
      default:
        return modifiers.x3;
    }
  };

  const h5Modifier = () => {
    switch (true) {
      case viewport(breakpoints.large):
        return modifiers.x8;
      case viewport(breakpoints.mediumLarge):
        return modifiers.x6;
      case viewport(breakpoints.mediumPlus):
        return modifiers.x6;
      case viewport(breakpoints.medium):
        return modifiers.x5;
      case viewport(breakpoints.smallMedium):
        return modifiers.x5;
      case viewport(breakpoints.small):
        return modifiers.x4;
      default:
        return modifiers.x3;
    }
  };

  const getModifier = () => {
    switch (variant) {
      case textVariants.body1:
        return body1Modifier();
      case textVariants.body2:
        return body2Modifier();
      case textVariants.h1:
        return h1Modifier();
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
