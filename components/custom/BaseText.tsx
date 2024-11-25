import React from 'react';

interface BaseTextProps {
  title: string;
  className?: string;
  textColor?: string;
  textAlign?: string;
  fontWeight?: string;
  lineHeight?: string;
  fontSize?: string;
}

const BaseText: React.FC<BaseTextProps> = ({
  title,
  className = '',
  textColor = 'text-gray-700',
  textAlign = 'text-left',
  fontWeight = 'text-regular',
  lineHeight,
  fontSize = '18px',
}) => {
  return (
    <p
      style={{ fontSize, lineHeight }}
      className={`${fontWeight} ${textColor} ${textAlign} ${className}`}
    >
      {title}
    </p>
  );
};

export default BaseText;
