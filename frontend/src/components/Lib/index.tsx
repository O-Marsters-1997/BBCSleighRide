import styled from "styled-components";
import View from "../View";
import { device } from "../../types/constants";

export const CentralOverlayContainer = styled(View)`
  display: flex;
  width: 100%;
  justify-content: center;
  align-items: center;
  position: relative;
`;

export const LoadingWrapper = styled(View)`
  display: flex;
  width: 100%;
  height: 80vh;
  justify-content: center;
  align-items: center;
  position: relative;
`;

export const CardWrapper = styled(View)<{ padding?: number }>`
  padding: ${({ padding }) => padding && padding}px;
`;

// prettier-ignore
export const RowContainer = styled(View)<{ justifyContent?: CSS.JustifyContent, gap?: string }>`
  display: flex;
  justify-content: ${({ justifyContent }) => justifyContent && justifyContent};
  gap: ${({gap}) => gap && gap};
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
  @media ${device.laptop} {
    transform: rotate(${(props) => (props.pageSide == "right" ? 5 : -5)}deg);
    transition-property: all;
    transition: 0.4s ease-in;
    &:hover {
      transform: rotate(${(props) => (props.pageSide == "right" ? -5 : 5)}deg);
      transform: scale(1.25);
    }
  }
`;

export const QuizGameCracker = styled(Cracker)`
  height: 5em;
  width: 10em;
  @media ${device.laptop} {
    height: 7em;
    width: 14em;
  } ;
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
  width: clamp(300px, 60vw, 1100px);
`;
