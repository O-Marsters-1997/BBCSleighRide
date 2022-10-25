import React from "react";
import styled from "styled-components";
import { RowContainer } from "./Lib";

type Props = {
  src: string;
  alt: string;
  height?: number;
  width?: number;
  className?: string;
  onClick?: () => void;
};

const StyledImage = styled.img<Props>`
  height: ${(props) => (props.height ? props.height : 40)}px;
  width: ${(props) => (props.width ? props.width : 40)}px;
  object-fit: cover;
`;

const Image: React.FC<Props> = ({
  src,
  alt,
  height,
  width,
  className,
  onClick,
}) => (
  <RowContainer>
    <StyledImage
      src={src}
      alt={alt}
      height={height}
      width={width}
      className={className}
      onClick={onClick}
    />
  </RowContainer>
);

export default Image;
