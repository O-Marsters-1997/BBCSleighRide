import React from "react";
import styled from "styled-components";
import Paper, { PaperProps } from "@mui/material/Paper";

const StyledCard = styled(Paper)`
  border-radius: 20px;
`;

interface Props extends PaperProps {}

const Card: React.FC<Props> = ({ children }) => (
  <StyledCard elevation={5}>{children}</StyledCard>
);

export default Card;
