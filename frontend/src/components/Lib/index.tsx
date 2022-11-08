import styled from "styled-components";
import View from "../View";

export const CentralOverlayContainer = styled(View)`
  display: flex;
  width: 100%;

  justify-content: center;
  align-items: center;
  position: relative;
`;

export const CardWrapper = styled(View)<{ padding?: number }>`
  padding: ${({ padding }) => padding && padding}px;
`;

// prettier-ignore
export const RowContainer = styled(View)<{ justifyContent?: CSS.JustifyContent }>`
  display: flex;
  justify-content: ${({ justifyContent }) => justifyContent && justifyContent};
`;

export const DetailsContainer = styled(View)`
  display: flex;
  flex-direction: column;
`;

export const CentralRowContainer = styled(View)`
  display: flex;
  justify-content: center;
  align-items: center;
  width: 100%;
`;

export const CentralColumnContainer = styled(View)<{ reverse?: boolean }>`
  display: flex;
  flex-direction: ${({ reverse }) => (reverse ? "column-reverse" : "column")};
  justify-content: center;
  align-items: center;
  width: 100%;
  height: 100%;
`;

export const Cracker = styled.svg<{ pageSide: Utils.PageSide }>`
  cursor: pointer;
  transform: rotate(${(props) => (props.pageSide == "right" ? 5 : -5)}deg);
  transition-property: all;
  transition: 0.4s ease-in;

  &:hover {
    transform: rotate(${(props) => (props.pageSide == "right" ? -5 : 5)}deg);
    transform: scale(1.25);
  }
`;

// prettier-ignore
export const TextWrapper = styled(View)<{lineHeight?: number;indent?: boolean;}>`
  display: flex;
  flex-direction: column;
  padding-bottom: 1em;
  padding-left: ${({ indent }) => (indent ? "5px" : 0)};
  .MuiTypography-body1 {
    line-height: ${({ lineHeight }) => lineHeight && lineHeight};
    padding-bottom: 1em;
  }
`;

// Overlay
export const CardOverlayWrapper = styled(View)`
  padding: 80px 0;
  width: clamp(40%, 60vw, 85%);
`;
