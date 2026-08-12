import React from 'react';

interface TapeProps {
  className?: string;
  style?: React.CSSProperties;
  color?: string;
  rotation?: string; // e.g. '-3deg', '2deg'
  width?: string;
}

export const Tape: React.FC<TapeProps> = ({
  className = '',
  style = {},
  color = 'rgba(238, 232, 218, 0.85)',
  rotation = '-2deg',
  width = '100px'
}) => {
  return (
    <div
      className={`tape-strip tape-both ${className}`}
      style={{
        width,
        backgroundColor: color,
        transform: `rotate(${rotation})`,
        ...style
      }}
      aria-hidden="true"
    />
  );
};

export default Tape;
