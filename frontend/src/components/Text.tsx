import React from "react";
import styled from "styled-components";
import Typography, { TypographyProps } from "@mui/material/Typography";
import { getTextColor, getFontVariant } from "../utils/styleHelpers";

type StyleProps = {
  colorvariant?: Utils.FontColor;
  fontFamily?: Utils.FontType;
};

interface TextProps extends TypographyProps {
  className?: string;
}

type Props = TextProps & StyleProps;
const StyledText = styled(Typography)<Props>`
  color: ${({ colorvariant }) => colorvariant && getTextColor(colorvariant)};
  font-family: ${({ variant }) =>
    variant && getFontVariant(variant).fontFamily};
  font-size: ${({ variant }) => variant && getFontVariant(variant).fontSize};
  font-weight: ${({ variant }) =>
    variant && getFontVariant(variant).fontWeight};
  font-style: ${(props) => (props.fontStyle == "italic" ? "italic" : "normal")};
`;

const Text: React.FC<Props> = ({ variant, children, colorvariant }) => (
  <StyledText variant={variant} colorvariant={colorvariant}>
    {children}
  </StyledText>
);

export default Text;
