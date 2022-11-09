import React from "react";
import styled from "styled-components";
import Typography, { TypographyProps } from "@mui/material/Typography";
import {
  getTextColor,
  getFontVariant,
  getModifier,
} from "../utils/styleHelpers";

type StyleProps = {
  colorvariant?: Utils.ColorVariant;
  fontFamily?: Utils.FontType;
  lineHeight?: number;
  marginBottom?: string;
  textAlign?: CSS.TextAlign;
};

interface TextProps extends TypographyProps {
  className?: string;
  variant: Utils.TextVariant;
}

type Props = TextProps & StyleProps;
const StyledText = styled(Typography)<Props>`
  color: ${({ colorvariant }) => colorvariant && getTextColor(colorvariant)};
  font-family: ${({ variant }) =>
    variant && getFontVariant(variant).fontFamily};
  font-size: ${({ variant }) =>
    variant && getFontVariant(variant).fontSize * getModifier(variant)}rem;
  font-weight: ${({ variant }) =>
    variant && getFontVariant(variant).fontWeight};
  font-style: ${(props) => (props.fontStyle == "italic" ? "italic" : "normal")};
  line-height: ${(props) => props.lineHeight && props.lineHeight};
  margin-bottom: ${(props) => props.marginBottom && props.marginBottom};
`;

const Text: React.FC<Props> = ({
  variant,
  children,
  colorvariant,
  lineHeight,
  marginBottom,
  textAlign,
}) => (
  <StyledText
    variant={variant}
    colorvariant={colorvariant}
    lineHeight={lineHeight}
    marginBottom={marginBottom}
    textAlign={textAlign}
  >
    {children}
  </StyledText>
);

export default Text;

// getFontVariant(variant).fontSize
