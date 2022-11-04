import React from "react";
import styled from "styled-components";
import Typography, { TypographyProps } from "@mui/material/Typography";
import { getTextColor } from "../utils/styleHelpers";

type StyleProps = {
  colorVariant?: Utils.FontColor;
  fontFamily?: Utils.FontType;
};

interface TextProps extends TypographyProps {
  type?: Utils.TextVariant;
  className?: string;
}

type Props = TextProps & StyleProps;

const StyledText = styled(Typography)<Props>`
  color: ${(props) => props.colorVariant && getTextColor(props.colorVariant)};
  font-family: ${(props) =>
    props.fontFamily == "body" ? "Roboto" : "Raleway"};
`;

const Text: React.FC<Props> = ({ type, children, colorVariant }) => (
  <StyledText type={type} colorVariant={colorVariant}>
    {children}
  </StyledText>
);

export default Text;
