import React, { ReactNode, ElementType } from "react";
import styled, { css } from "styled-components";
import Box from "@mui/material/Box";
import app_background from "../assets/images/green_background.png";

type StyleProps = {
  width?: string;
  height?: string;
  background?: string;
  fontWeight?: string;
};

type Props = {
  className?: string;
  display?: string;
  backgroundImg?: boolean;
  children?: ReactNode;
  component?: ElementType<any> & string;
  style?: React.CSSProperties;
  onClick?: (e?: any) => void;
} & StyleProps;

const StyledView = styled(Box)<Props>`
  width: ${(props) => props.width && `${props.width}`};
  height: ${(props) => props.height && `${props.height} `};
  background: ${(props) => props.background && props.background};
  font-weight: ${(props) =>
    props.fontWeight
      ? props.theme.typography.body2.fontWeight
      : props.theme.typography.body1.fontWeight};
  ${(props) =>
    props.display == "inline" &&
    css`
      display: inline-block;
      padding-left: 0.3em;
    `};
`;

const StyledBackground = styled(StyledView)<Props>`
  && {
    position: relative;
    object-fit: cover;
    background-size: cover;
    background-repeat: no-repeat;
    background-position: center center;
    background-image: linear-gradient(rgba(4, 9, 30, 0), rgba(4, 9, 30, 0)),
      url(${app_background});
    min-height: 120vh;
    z-index: 10;
  }
`;

const StyledOverlay = styled(Box)`
  position: absolute;
  top: 0;
  right: 0;
  bottom: 0;
  left: 0;

  filter: brightness(200%);
  z-index: -5;
`;

const View: React.FC<Props> = ({
  width,
  height,

  background,
  fontWeight,
  className,
  backgroundImg,
  children,
  display,
  component,
  style,
  onClick,
}) => {
  if (backgroundImg) {
    return (
      <StyledBackground
        width={width}
        height={height}
        background={background}
        fontWeight={fontWeight}
        className={className}
        display={display}
        component={component && "div"}
        style={style}
        onClick={onClick}
      >
        {backgroundImg && <StyledOverlay />}
        {children}
      </StyledBackground>
    );
  }
  return (
    <StyledView
      width={width}
      height={height}
      background={background}
      fontWeight={fontWeight}
      className={className}
      display={display}
      style={style}
      onClick={onClick}
    >
      {children}
    </StyledView>
  );
};

export default View;
