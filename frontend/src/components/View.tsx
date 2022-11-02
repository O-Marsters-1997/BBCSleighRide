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

const StyledBackground = styled(StyledView)`
  && {
    background-image: linear-gradient(rgba(4, 9, 30, 0), rgba(4, 9, 30, 0)),
      url(${app_background});
    filter: opacity(75%);
    object-fit: cover;
    background-size: cover;
    background-repeat: no-repeat;
    background-position: center center;
    min-height: 120vh;
  }
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
