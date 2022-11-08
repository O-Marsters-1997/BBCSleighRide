import React from "react";
import styled from "styled-components";
import Typography, { TypographyProps } from "@mui/material/Typography";
import {
  getTextColor,
  getFontVariant,
  getModifier,
} from "../utils/styleHelpers";

type StyleProps = {
  colorvariant?: Utils.FontColor;
  fontFamily?: Utils.FontType;
  lineHeight?: number;
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
`;

const Text: React.FC<Props> = ({
  variant,
  children,
  colorvariant,
  lineHeight,
}) => (
  <StyledText
    variant={variant}
    colorvariant={colorvariant}
    lineHeight={lineHeight}
  >
    {children}
  </StyledText>
);

export default Text;

// getFontVariant(variant).fontSize
