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

// @font-face {
//     font-family: 'Raleway-italic';
//     font-style: italic;
//     font-weight: normal;
//     src: url(${RalewayItalicTTF}) format('ttf'),
//     url(${RalewayItalicWOFF}) format('woff');
//   }

/* @font-face {
    font-family: 'Raleway';
    font-style: normal;
    font-weight: bold;
    src: url(${RalewayBoldTTF}) format('ttf'),
         url(${RalewayBoldWOFF}) format('woff');
    }

  @font-face {
    font-family: 'Raleway';
    font-style: italic;
    font-weight: bold;
    src: url(${RalewayBoldItalicTTF}) format('ttf'),
        url(${RalewayBoldItalicWOFF}) format('woff');
  }
  @font-face {
    font-family: 'Raleway';
    font-style: normal;
    font-weight: bolder;
    src: url(${RalewayExtraBoldTTF}) format('ttf'),
         url(${RalewayExtraBoldWOFF}) format('woff');
    }

  @font-face {
    font-family: 'Raleway';
    font-style: italic;
    font-weight: bolder;
    src: url(${RalewayExtraBoldItalicTTF}) format('ttf'),
        url(${RalewayExtraBoldItalicWOFF}) format('woff');
  } */
