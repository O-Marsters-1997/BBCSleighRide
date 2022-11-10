import React, { ReactNode, ElementType } from "react";
import styled, { css } from "styled-components";
import Box from "@mui/material/Box";
import Background from "./Svg/Background";

type StyleProps = {
  width?: number;
  height?: number;
  widthmeasurement?: string;
  heightmeasurement?: string;
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
  width: ${(props) =>
    props.width &&
    props.widthmeasurement &&
    `${props.width} ${props.widthmeasurement}`};
  height: ${(props) =>
    props.height &&
    props.heightmeasurement &&
    `${props.height} ${props.heightmeasurement}`};
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
    z-index: 10;
  }
`;

const StyledOverlay = styled(Background)`
  position: absolute;
  top: 0;
  right: 0;
  bottom: 0;
  left: 0;

  z-index: -5;
`;

const View: React.FC<Props> = ({
  width,
  height,
  widthmeasurement,
  heightmeasurement,
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
        widthmeasurement={widthmeasurement}
        heightmeasurement={heightmeasurement}
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
      widthmeasurement={widthmeasurement}
      heightmeasurement={heightmeasurement}
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
