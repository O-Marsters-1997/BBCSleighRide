import React from "react";
import styled from "styled-components";
import Typography, { TypographyProps } from "@mui/material/Typography";
import { useModifier } from "../hooks/useModifier";
import { getTextColor, getFontVariant } from "../utils/style/styleHelpers";

type StyleProps = {
  colorvariant?: Utils.ColorVariant;
  fontFamily?: Utils.FontType;
  lineHeight?: number;
  marginBottom?: string;
  textAlign?: CSS.TextAlign;
  sizeadjust?: number;
};

interface TextProps extends TypographyProps {
  className?: string;
  variant: Utils.TextVariant;
}

const adjustSize = (defaultSize: number, multiplier?: number) => {
  if (!multiplier) {
    return defaultSize;
  }
  return defaultSize * multiplier;
};

type Props = TextProps & StyleProps;

const StyledText = styled(Typography)<Props>`
  color: ${({ colorvariant }) => colorvariant && getTextColor(colorvariant)};
  font-family: ${({ variant }) =>
    variant && getFontVariant(variant).fontFamily};
  font-size: ${(props) =>
    props.variant &&
    adjustSize(
      getFontVariant(props.variant).fontSize * useModifier(props.variant),
      props.sizeadjust,
    )}rem;
  font-weight: ${({ variant }) =>
    variant && getFontVariant(variant).fontWeight};
  font-style: ${(props) => (props.fontStyle == "italic" ? "italic" : "normal")};
  line-height: ${(props) => props.lineHeight && props.lineHeight};
  margin-bottom: ${(props) => props.marginBottom && props.marginBottom};
  text-align: ${({ textAlign }) => textAlign && textAlign};
`;

const Text: React.FC<Props> = ({
  variant,
  children,
  colorvariant,
  lineHeight,
  marginBottom,
  textAlign,
  paddingTop,
  sizeadjust,
}) => (
  <StyledText
    variant={variant}
    colorvariant={colorvariant}
    lineHeight={lineHeight}
    marginBottom={marginBottom}
    textAlign={textAlign}
    paddingTop={paddingTop}
    sizeadjust={sizeadjust}
  >
    {children}
  </StyledText>
);

export default Text;
