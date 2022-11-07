import styled from "styled-components";
import View from "../View";

export const RowContainer = styled(View)`
  display: flex;
`;

export const CentralRowContainer = styled(View)`
  display: flex;
  justify-content: center;
  align-items: center;
  width: 100%;
`;

export const CentralColumnContainer = styled(View)`
  display: flex;
  flex-direction: column;
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
