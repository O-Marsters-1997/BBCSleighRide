import React from "react";
import styled from "styled-components";

type Props = {
  src: string;
  alt: string;
  height?: number;
  width?: number;
  heightSizeUnits?: Utils.SizeUnits;
  widthSizeUnits?: Utils.SizeUnits;
  className?: string;
  logo?: boolean;
  onClick?: () => void;
};

const StyledImage = styled.img<Props>`
  width: ${({ width, widthSizeUnits }) =>
    width ? `${width}${widthSizeUnits}` : `400${widthSizeUnits}`};
  height: ${({ height, heightSizeUnits }) =>
    height ? `${height}${heightSizeUnits}` : `400${heightSizeUnits}`};
`;

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
  heightSizeUnits,
  widthSizeUnits,
  onClick,
}) => {
  if (logo) {
    return (
      <LogoImage
        src={src}
        alt={alt}
        height={height}
        width={width}
        heightSizeUnits={heightSizeUnits}
        widthSizeUnits={widthSizeUnits}
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
      heightSizeUnits="px"
      widthSizeUnits="px"
      className={className}
      onClick={onClick}
    />
  );
};

export default Image;
