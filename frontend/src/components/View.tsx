import React, { ReactNode } from "react";
import styled from "styled-components";
import Box from "@mui/material/Box";
import app_background from "../assets/images/app_background.jpg";

type StyleProps = {
  width?: number;
  height?: number;
  widthMeasurement?: string;
  heightMeasurement?: string;
  background?: string;
};

type Props = {
  className?: string;
  backgroundImg?: boolean;
  children: ReactNode;
} & StyleProps;

const StyledView = styled(Box)<Props>`
  width: ${(props) =>
    props.width &&
    props.widthMeasurement &&
    `${props.width} ${props.widthMeasurement}`};
  height: ${(props) =>
    props.height &&
    props.heightMeasurement &&
    `${props.height} ${props.heightMeasurement}`};
  background: ${(props) => props.background && props.background};
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
    z-index: -10;
  }
`;

const StyledOverlay = styled(Box)<{ opacity?: number }>`
  position: absolute;
  top: 0;
  right: 0;
  bottom: 0;
  left: 0;
  background: #a1bd93;
  opacity: ${({ opacity }) => opacity ?? 1};
  z-index: -5;
`;

const View: React.FC<Props> = ({
  width,
  height,
  widthMeasurement,
  heightMeasurement,
  background,
  className,
  backgroundImg,
  children,
}) => {
  if (backgroundImg) {
    return (
      <StyledBackground
        width={width}
        height={height}
        widthMeasurement={widthMeasurement}
        heightMeasurement={heightMeasurement}
        background={background}
        className={className}
      >
        {backgroundImg && <StyledOverlay opacity={0.2} />}
        {children}
      </StyledBackground>
    );
  }
  return (
    <StyledView
      width={width}
      height={height}
      widthMeasurement={widthMeasurement}
      heightMeasurement={heightMeasurement}
      background={background}
      className={className}
    >
      {children}
    </StyledView>
  );
};

export default View;
