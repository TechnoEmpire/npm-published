// Button.jsx
import React from 'react';

// Props from the parent component
const Button = ({ textColor, variant, bgColor, children, ...props }) => {
  const styles = {
    color: textColor,
    backgroundColor: bgColor,
    border: bgColor,
    padding: '20px 20px',
    cursor: 'pointer',

    // Change Button Style (solid or soft)
    borderRadius: variant === 'solid' ? '4px' : (variant === 'soft' ? '50px' : '0'),
  };

  return (
    <button style={styles} {...props}>
      {children}
    </button>
  )
};

export default Button;
