import React from "react";
import styled from "styled-components";
import Paper, { PaperProps } from "@mui/material/Paper";
import { getBorderColor } from "../utils/style/styleHelpers";

type StyleProps = {
  borderradius?: number;
  bordercolor?: Utils.ColorVariant;
  borderthickness?: number;
  elavation?: number;
};

interface Props extends PaperProps {}

type CardProps = Props & StyleProps;

const StyledCard = styled(Paper)<StyleProps>`
  border-radius: ${(props) => (props.borderradius ? props.borderradius : 20)}px;
  border-color: ${(props) =>
    props.bordercolor && getBorderColor(props.bordercolor)};
  border-width: ${(props) =>
    props.borderthickness ? props.borderthickness : 0}px;
  border-style: solid;
`;

const Card: React.FC<CardProps> = ({
  children,
  borderradius,
  bordercolor,
  borderthickness,
  elavation,
}) => (
  <StyledCard
    elevation={elavation ?? 5}
    borderradius={borderradius}
    bordercolor={bordercolor}
    borderthickness={borderthickness}
  >
    {children}
  </StyledCard>
);

export default Card;
