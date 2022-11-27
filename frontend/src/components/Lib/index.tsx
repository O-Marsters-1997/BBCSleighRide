import styled from "styled-components";
import View from "../View";
import { deviceMin, deviceMax } from "../../types/constants";

// Layouts
export const AppContainer = styled(View)`
  position: relative;
  height: 100vh;
  width: 100vw;
`;

export const CompleteOverlayContainer = styled(View)`
  position: absolute;
  display: flex;
  flex-direction: column;
  align-items: center;
  justify-content: flex-start;
  top: 0;
  right: 0;
  left: 0;
  bottom: 0;
  z-index: 100;
  background-color: ${({ theme }) => theme.palette.grey.additional};
`;

export const PageContainer = styled(View)<{ alignItems?: CSS.AlignItems }>`
  display: flex;
  justify-content: center;
  align-items: ${({ alignItems }) => alignItems && alignItems};
  height: 100vh;
  width: 100vw;
  @media ${deviceMin.mediumLarge} {
  }
`;

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

export const ErrorWrapper = styled(LoadingWrapper)``;

export const CardWrapper = styled(View)<{ padding?: number }>`
  padding: ${({ padding }) => padding && padding}px;
`;

// prettier-ignore
export const RowContainer = styled(View)<{justifyContent?: CSS.JustifyContent; alignItems?: CSS.AlignItems; gap?: string;}>`
  position: relative;
  display: flex;
  justify-content: ${({ justifyContent }) => justifyContent && justifyContent};
  align-items: ${({ alignItems }) => alignItems && alignItems};
  gap: ${({ gap }) => gap && gap};
`;

export const DetailsContainer = styled(View)<{ reverse?: boolean }>`
  display: flex;
  flex-direction: ${({ reverse }) => (reverse ? "column-reverse" : "column")};
`;

// prettier-ignore
export const CollectionContainer = styled(DetailsContainer)<{countries?: Country[];}>``;

export const CentralRowContainer = styled(View)<{ gap?: string }>`
  display: flex;
  justify-content: center;
  align-items: center;
  gap: ${({ gap }) => gap && gap};
  width: 100%;
`;
export const RowContainerOverlayBorderBottom = styled(CentralRowContainer)`
  width: 90%;
  padding: 0.85rem 0;
  margin: 0 auto;
  border-bottom: ${({ theme }) =>
    `2px solid ${theme.palette.primary.contrastText}`};
`;

export const CentralColumnContainer = styled(View)<{ reverse?: boolean }>`
  display: flex;
  flex-direction: ${({ reverse }) => (reverse ? "column-reverse" : "column")};
  justify-content: center;
  align-items: center;
  width: 100%;
  height: 100%;
`;

// Images and image helpers

export const ElfImageWrapper = styled(View)`
  padding: 2em 0;
  @media ${deviceMin.mediumLarge} {
    padding: 2em 0 0 2em;
  } ;
`;

export const Cracker = styled.svg<{ pageSide: Utils.PageSide }>`
  cursor: pointer;
  @media ${deviceMin.mediumPlus} {
    transform: rotate(${(props) => (props.pageSide == "right" ? 5 : -5)}deg);
    transition-property: all;
    transition: 0.4s ease-in;
    &:hover {
      transform: rotate(${(props) => (props.pageSide == "right" ? -5 : 5)}deg);
      transform: scale(1.25);
    }
  }
`;

export const HomePageCracker = styled(Cracker)`
  width: 70%;
`;

export const MapCracker = styled(Cracker)<{ translateY?: string }>`
  @media ${deviceMax.medium} {
    width: clamp(125px, 33vw, 400px);
    transform: translateY(${({ translateY }) => translateY && translateY});
  }
`;

export const QuizGameCracker = styled(Cracker)`
  height: 5em;
  width: 10em;
  @media ${deviceMin.mediumPlus} {
    height: 7em;
    width: 14em;
  } ;
`;

// Overlay
export const CardOverlayWrapper = styled(View)`
  width: clamp(275px, 60vw, 1100px);
  padding-top: 8rem;
`;

export const HomePageCardOverlayWrapper = styled(View)`
  padding: 80px 0;
  width: clamp(250px, 45vw, 850px);
  justify-self: center;
`;

// prettier-ignore
export const TextWrapper = styled(View)<{
  lineHeight?: number;
  indent?: boolean;
  childrenPadding?: string;
  alignItems?: CSS.AlignItems;
}>`
  display: flex;
  flex-direction: column;
  align-items: ${({alignItems}) => alignItems && alignItems};
  padding-bottom: 1em;
  padding-left: ${({ indent }) => (indent ? "5px" : 0)};
  .MuiTypography-body1 {
    line-height: ${({ lineHeight }) => lineHeight && lineHeight};
    padding-bottom: ${({ childrenPadding }) => childrenPadding ??  "1em"};
  }
`;
