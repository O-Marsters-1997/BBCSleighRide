import React from "react";
import styled from "styled-components";
import View from "../components/View";
import Image from "../components/Image";
import { RowContainer, CentralColumnContainer } from "../components/Lib";
import error_title from "../assets/images/page_naughty_list.svg";
import error_image from "../assets/images/404_page.svg";

const StyledView = styled(View)``;

const Error = () => (
  <StyledView>
    <RowContainer component="section">
      <CentralColumnContainer>
        <Image src={error_title} alt="404" />
        <Image src={error_image} alt="404" />
      </CentralColumnContainer>
    </RowContainer>
  </StyledView>
);

export default Error;
