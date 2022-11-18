import React from "react";
import styled from "styled-components";
import View from "../components/View";
import { RowContainer } from "../components/Lib";
import error_title from "../assets/images/page_naughty_list.svg";
import error_image from "../assets/images/404_page.svg";

const StyledView = styled(View)``;

const Error = () => (
  <StyledView className="main-container">
    <RowContainer className="error-title" component="span">
      <img className="error-image" src={error_title} alt="404" />
    </RowContainer>

    <div className="error-image-wrapper">
      <img className="error-image" src={error_image} alt="404" />
    </div>
  </StyledView>
);

export default Error;
