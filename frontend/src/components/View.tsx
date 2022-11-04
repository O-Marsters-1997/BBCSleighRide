import React, { ReactNode } from "react";
import styled from "styled-components";
import Box from "@mui/material/Box";
import app_background from "../assets/images/app_background.jpg";

type StyleProps = {
  width?: number;
  height?: number;
  widthmeasurement?: string;
  heightmeasurement?: string;
  background?: string;
};

type Props = {
  className?: string;
  display?: string;
  backgroundImg?: boolean;
  children?: ReactNode;
  style?: React.CSSProperties;
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
  display: ${(props) => (props.display == "inline" ? "inline-block" : "block")};
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
  background-color: rgba(83, 153, 80, 0.2);
  z-index: -5;
`;

const View: React.FC<Props> = ({
  width,
  height,
  widthmeasurement,
  heightmeasurement,
  background,
  className,
  backgroundImg,
  children,
  display,
  style,
}) => {
  if (backgroundImg) {
    return (
      <StyledBackground
        width={width}
        height={height}
        widthmeasurement={widthmeasurement}
        heightmeasurement={heightmeasurement}
        background={background}
        className={className}
        display={display}
        style={style}
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
      className={className}
      display={display}
      style={style}
    >
      {children}
    </StyledView>
  );
};

export default View;
