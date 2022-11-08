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

export const RowContainer = styled(View)`
  display: flex;
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

export const TextWrapper = styled(View)<{ lineHeight?: number }>`
  display: flex;
  flex-direction: column;
  .MuiTypography-body1 {
    line-height: ${({ lineHeight }) => lineHeight && lineHeight};
    padding-bottom: 1em;
  }
`;
