import React from "react";
import styled from "styled-components";
import Button from "@mui/material/Button";

type Props = {
  onClick?: () => void;
  text: string;
};

const StyledButton = styled(Button)<Props>``;

const MyButton: React.FC<Props> = ({ text, onClick }) => (
  <StyledButton text={text} onClick={onClick}>
    {text}
  </StyledButton>
);

export default MyButton;
