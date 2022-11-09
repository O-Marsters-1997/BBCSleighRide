import React from "react";
import styled, { keyframes } from "styled-components";
import View from "./View";
import Text from "./Text";
import { CentralColumnContainer } from "./Lib";
import { getLoadingSize } from "../utils/styleHelpers";

type Props = {
  size?: Utils.LoadingSize;
  title: string;
  subtitle?: string;
};

const spinAnimation = keyframes`
    from {transform: rotate(0);}
    to {transform: rotate(360deg);}
`;

const Spinner = styled(View)<Props>`
  height: ${(props) => getLoadingSize(props.size)}px;
  width: ${(props) => getLoadingSize(props.size)}px;
  border-radius: 50%;
  border: ${({ theme }) => `3px solid ${theme.palette.grey.contrastText}`};
  border-bottom: ${({ theme }) =>
    `4px solid ${theme.palette.primary.contrastText}`};
  animation-name: ${spinAnimation};
  animation-duration: 1.5s;
  animation-iteration-count: infinite;
  animation-timing-function: linear;
`;

const Loading: React.FC<Props> = ({ size, title, subtitle }) => (
  <CentralColumnContainer>
    <Spinner size={size} title={title} subtitle={subtitle} />
    <View style={{ paddingTop: "1em" }}>
      <Text variant="subtitle1" colorvariant="primary">
        {title}
      </Text>
      {subtitle && <h6>{subtitle}</h6>}
    </View>
  </CentralColumnContainer>
);

export default Loading;
