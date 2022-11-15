import React from "react";
import styled, { keyframes } from "styled-components";
import View from "./View";
import Text from "./Text";
import Card from "./Card";
import Image from "./Image";
import { CentralColumnContainer, CentralRowContainer } from "./Lib";
import { useViewport } from "../hooks/useViewport";
import { getLoadingSize } from "../utils/style/styleHelpers";
import { deviceMin } from "../types/constants";
import elfSad from "../assets/images/elf_sad.svg";

type Props = {
  size?: Utils.LoadingSize;
  title: string;
  subtitle?: string;
  error?: boolean;
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

const ErrorCard = styled(View)<Props>`
  width: clamp(200px, 50vw, 700px);
  .MuiTypography-root {
    padding-bottom: 0.2em;
  }
  @media ${deviceMin.medium} {
    .text-wrapper {
      padding-left: 2.55em;
    }
  }
`;

const Loading: React.FC<Props> = ({ size, title, subtitle, error }) => {
  const viewport = useViewport();
  if (error) {
    const errorContent = (alignment: CSS.TextAlign) => (
      <>
        <Image
          src={elfSad}
          alt="sad elf"
          height={viewport("mediumPlus") ? 12 : 8}
          width={viewport("mediumPlus") ? 12 : 8}
          heightSizeUnits="em"
          widthSizeUnits="em"
        />
        <View className="text-wrapper">
          <Text
            variant={viewport("medium") ? "h2" : "h3"}
            textAlign={alignment}
            paddingTop={2 + 2 == 4 ? ".5em" : "0px"}
          >
            Oops!
          </Text>
          <Text variant="body1" colorvariant="primaryAlt" textAlign={alignment}>
            {title}
          </Text>
          <Text variant="subtitle1" textAlign={alignment}>
            Please try again or submit a bug report if the issue persists!
          </Text>
        </View>
      </>
    );
    return (
      <CentralColumnContainer>
        <ErrorCard title={title}>
          <Card>
            {viewport("medium") ? (
              <CentralRowContainer style={{ padding: "2.5em" }}>
                {errorContent("start")}
              </CentralRowContainer>
            ) : (
              <CentralColumnContainer style={{ padding: "2.5em" }}>
                {errorContent("center")}
              </CentralColumnContainer>
            )}
          </Card>
        </ErrorCard>
      </CentralColumnContainer>
    );
  }

  return (
    <CentralColumnContainer>
      <Spinner size={size} title={title} subtitle={subtitle} />
      <View style={{ paddingTop: "1em" }}>
        <Text variant="subtitle1" colorvariant="primary">
          {title}
        </Text>
        {subtitle && <Text variant="h6">{subtitle}</Text>}
      </View>
    </CentralColumnContainer>
  );
};

export default Loading;
