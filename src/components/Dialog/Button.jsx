import React, { useState } from 'react';

const Button = ({ textColor, variant, bgColor = '#FFFFFF', children, ...props }) => {
  const [isHovered, setIsHovered] = useState(false);

  const lightenColor = (color, percent) => {
    if (!color || color.length < 6) return color; // return original color if invalid

    let r = parseInt(color.slice(1, 3), 16);
    let g = parseInt(color.slice(3, 5), 16);
    let b = parseInt(color.slice(5, 7), 16);

    // Calculate the adjustment value
    let adjust = (amount, color) => {
        return Math.round(color + (2.55 * amount));
    };

    r = adjust(percent, r);
    g = adjust(percent, g);
    b = adjust(percent, b);

    r = r > 255 ? 255 : r < 0 ? 0 : r;
    g = g > 255 ? 255 : g < 0 ? 0 : g;
    b = b > 255 ? 255 : b < 0 ? 0 : b;

    return `#${((1 << 24) + (r << 16) + (g << 8) + b).toString(16).slice(1).toUpperCase()}`;
};

  const baseStyles = {
    color: textColor,
    backgroundColor: bgColor,
    border: `1px solid ${bgColor}`,
    padding: '20px 20px',
    cursor: 'pointer',
    borderRadius: variant === 'solid' ? '10px' : (variant === 'soft' ? '50px' : '0')
  };

  const hoveredStyles = {
    ...baseStyles,
    backgroundColor: lightenColor(bgColor, 10)
  };

  return (
    <button 
      style={isHovered ? hoveredStyles : baseStyles} 
      onMouseEnter={() => setIsHovered(true)}
      onMouseLeave={() => setIsHovered(false)}
      {...props}
    >
      {children}
    </button>
  )
};

export default Button;
