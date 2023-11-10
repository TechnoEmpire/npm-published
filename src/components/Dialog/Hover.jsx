// Hover.js
import React, { useState } from 'react';

const Hover = ({ children, bgColor, lightenPercent }) => {
  const [isHovered, setIsHovered] = useState(false);

  const lightenColor = (color, percent) => {
    if (!color || color.length < 6) return color; // return original color if invalid

    let num = parseInt(color.slice(1), 16),
        amt = Math.round(2.55 * percent),
        R = (num >> 16) + amt,
        B = (num >> 8 & 0x00FF) + amt,
        G = (num & 0x0000FF) + amt;

    return '#' + (0x1000000 + (R<255 ? R : 255)*0x10000 + (B<255 ? B : 255)*0x100 + (G<255 ? G : 255)).toString(16).slice(1);
  };

  const style = isHovered ? { backgroundColor: lightenColor(bgColor, lightenPercent) } : {};

  return React.cloneElement(children, {
    onMouseEnter: () => setIsHovered(true),
    onMouseLeave: () => setIsHovered(false),
    style: { ...children.props.style, ...style }
  });
};

export default Hover;
