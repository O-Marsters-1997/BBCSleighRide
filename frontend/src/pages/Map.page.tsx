import React from "react";
import styled from "styled-components";

const StledView = styled.button`
  margin: 500px;
`;

const Map = () => (
  <StledView type="button" onClick={() => console.log("hello")}>
    I am a map
  </StledView>
);

export default Map;
