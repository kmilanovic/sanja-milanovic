import React from 'react';

interface SvgIconProps {
  src: string;
  width?: string;
  height?: string;
  style?: React.CSSProperties; 
}

export const SvgIcon = ({ src, width, height, style }: SvgIconProps) => (
  <img
    src={`${process.env.PUBLIC_URL}/img/svg/${src}`}
    alt={src}
    width={width}
    height={height}
    style={style}
  />
);
