import React from "react";
import styled from "styled-components";

type Props = {
  src: string;
  alt: string;
  height?: number;
  width?: number;
  className?: string;
  logo?: boolean;
  onClick?: () => void;
};

const StyledImage = styled.img<Props>``;

const LogoImage = styled(StyledImage)`
  width: 20vw;
  height: 100%;
  cursor: pointer;
  margin-left: 25px;
  z-index: 100;
`;

const Image: React.FC<Props> = ({
  src,
  alt,
  height,
  width,
  className,
  logo,
  onClick,
}) => {
  if (logo) {
    return (
      <LogoImage
        src={src}
        alt={alt}
        height={height}
        width={width}
        className={className}
        onClick={onClick}
      />
    );
  }
  return (
    <StyledImage
      src={src}
      alt={alt}
      height={height}
      width={width}
      className={className}
      onClick={onClick}
    />
  );
};

export default Image;
