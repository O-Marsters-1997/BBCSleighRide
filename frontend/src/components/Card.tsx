import React from "react";
import styled from "styled-components";
import Paper, { PaperProps } from "@mui/material/Paper";
import { getBorderColor } from "../utils/styleHelpers";

type StyleProps = {
  borderRadius?: number;
  borderColor?: Utils.ColorVariant;
  borderThickness?: number;
  elavation?: number;
};

interface Props extends PaperProps {}

type CardProps = Props & StyleProps;

const StyledCard = styled(Paper)<StyleProps>`
  border-radius: ${(props) => (props.borderRadius ? props.borderRadius : 20)}px;
  border-color: ${(props) =>
    props.borderColor && getBorderColor(props.borderColor)};
  border-width: ${(props) =>
    props.borderThickness ? props.borderThickness : 0}px;
  border-style: solid;
`;

const Card: React.FC<CardProps> = ({
  children,
  borderRadius,
  borderColor,
  borderThickness,
  elavation,
}) => (
  <StyledCard
    elevation={elavation ?? 5}
    borderRadius={borderRadius}
    borderColor={borderColor}
    borderThickness={borderThickness}
  >
    {children}
  </StyledCard>
);

export default Card;
