import styled from "styled-components";
import Image from "../Image";
import { deviceMin } from "../../types/constants";

export const CountdownImage = styled(Image)`
  position: relative;
  height: fit-content;
  padding-top: 5rem;
  width: clamp(220px, 90vw, 550px);
  @media ${deviceMin.medium} {
    width: clamp(550px, 45vw, 850px);
  }
`;
