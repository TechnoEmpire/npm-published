// Button.js
import React from 'react';
import Hover from './Hover';

const Button = ({ textColor, variant, bgColor = '#dbdbdb', children, ...props }) => {

  const baseStyles = {
    color: textColor,
    backgroundColor: bgColor,
    border: `1px solid ${bgColor}`,
    padding: '20px 20px',
    cursor: 'pointer',
    borderRadius: variant === 'solid' ? '10px' : (variant === 'soft' ? '50px' : '0'),
  };

  return (
    <Hover bgColor={bgColor} lightenPercent={10}>
      <button style={baseStyles} {...props}>
        {children}
      </button>
    </Hover>
  );
};

export default Button;
