import React from "react";
import styled from "styled-components";
import View from "./View";
import Text from "./Text";
import Image from "./Image";
import Card from "./Card";
import { CentralRowContainer, CentralColumnContainer } from "./Lib";
import { useViewport } from "../hooks/useViewport";
import { errorConstants } from "../types/constants";
import elfSad from "../assets/images/elf_sad.svg";

type Props = {
  title: string;
  subtitle?: string;
};

const ErrorCard = styled(View)<Props>`
  .MuiTypography-root {
    padding-bottom: 0.2em;
  }
`;

const Error: React.FC<Props> = ({ title }) => {
  const viewport = useViewport();

  const errorContent = (alignment: CSS.TextAlign) => (
    <>
      <Image
        src={elfSad}
        alt="sad elf means there is an error"
        height={viewport("mediumPlus") ? "12em" : "8em"}
        width={viewport("mediumPlus") ? "12em" : "8em"}
      />
      <View paddingLeft={viewport("medium") ? "2.55em" : "0px"}>
        <Text
          variant={viewport("medium") ? "h2" : "h3"}
          textAlign={alignment}
          paddingTop=".5em"
        >
          {errorConstants.errorHeading}
        </Text>
        <Text variant="body1" colorvariant="primaryAlt" textAlign={alignment}>
          {title}
        </Text>
        <Text variant="subtitle1" textAlign={alignment}>
          {errorConstants.errorInstructions}
        </Text>
      </View>
    </>
  );
  return (
    <CentralColumnContainer>
      <ErrorCard title={title}>
        <Card width="clamp(200px, 50vw, 700px)">
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
};

export default Error;
