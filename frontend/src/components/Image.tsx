import React from "react";
import styled from "styled-components";

type StyleProps = {
  height?: string;
  width?: string;
  pointer?: boolean;
};

type Props = {
  src: string;
  alt: string;
  className?: string;
  logo?: boolean;
  onClick?: () => void;
} & StyleProps;

const StyledImage = styled.img<StyleProps>`
  height: ${({ height }) => height ?? "400px"};
  width: ${({ width }) => width ?? "400px"};
  cursor: ${(props) => props.pointer && "pointer"};
`;

const LogoImage = styled(StyledImage)`
  height: 100%;
  width: 20vw;
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
  pointer,
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
        pointer={pointer}
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
      pointer={pointer}
      onClick={onClick}
    />
  );
};

export default Image;
