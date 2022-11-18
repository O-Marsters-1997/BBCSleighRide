import React from "react";
import styled, { css } from "styled-components";
import View from "./View";
import Text from "./Text";
import { deviceMin } from "../types/constants";

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
      @media ${deviceMin.small} {
        height: 35px;
        width: 35px;
      }
      color: ${props.colorvariant ?? props.theme.palette.primaryText.main};
      background-color: ${props.theme.palette.primary.contrastText};
      font-size: 2rem;
      border: 2px solid ${props.theme.palette.primaryText.main};
      border-radius: 50%;
      height: 20px;
      width: 20px;
      .MuiTypography-root {
        transform: translate(0.2px);
      }
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
