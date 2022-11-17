import React from "react";
import styled, { css } from "styled-components";
import View from "./View";
import Text from "./Text";

type StyleProps = {
  colorvariant?: Utils.ColorVariant;
};

type Props = {
  text: string;
  variant?: Utils.ButtonVariant;
  onClick?: () => void;
} & StyleProps;

const StyledButton = styled(View)<Props>`
  display: flex;
  align-items: center;
  justify-content: center;
  ${(props) =>
    props.variant == "rounded" &&
    css`
      color: ${props.colorvariant ?? props.theme.palette.primaryText.main};
      background-color: ${props.theme.palette.primary.contrastText};
      height: 35px;
      width: 35px;
      font-size: 2rem;
      border: 2px solid ${props.theme.palette.primaryText.main};
      border-radius: 50%;
      /* .MuiTypography-root {
        transform: translateX(0px);
      } */
    `}
`;

const MyButton: React.FC<Props> = ({
  text,
  variant,
  colorvariant,
  onClick,
}) => (
  <StyledButton
    text={text}
    variant={variant}
    colorvariant={colorvariant}
    onClick={onClick}
  >
    <Text variant="body1" sizeadjust={1.5}>
      {text}
    </Text>
  </StyledButton>
);

export default MyButton;
