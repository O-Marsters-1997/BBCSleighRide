import React from "react";
import styled from "styled-components";
import View from "../components/View";
import Image from "../components/Image";
import { RowContainer, CentralColumnContainer } from "../components/Lib";
import { useViewport } from "../hooks/useViewport";
import error_title from "../assets/images/page_naughty_list.svg";
import error_image from "../assets/images/404_page.svg";

const StyledView = styled(View)``;

const Error = () => {
  const viewport = useViewport();
  return (
    <StyledView>
      <CentralColumnContainer>
        <RowContainer component="section">
          <View
            style={
              viewport("medium")
                ? { padding: "8em 0 6em 0" }
                : { padding: "6em 0 2em 0" }
            }
          >
            <Image
              src={error_title}
              alt="404"
              width={
                viewport("smallMedium") ? "clamp(550px, 55vw, 1100px)" : "350px"
              }
              height="fit-content"
            />
          </View>
        </RowContainer>
        <RowContainer>
          <Image
            src={error_image}
            alt="404"
            width={
              viewport("smallMedium") ? "clamp(450px, 45vw, 950px)" : "350px"
            }
            height="fit-content"
          />
        </RowContainer>
      </CentralColumnContainer>
    </StyledView>
  );
};

export default Error;
