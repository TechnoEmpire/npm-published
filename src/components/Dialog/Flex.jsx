// Flex.jsx
import React from 'react';

const Flex = ({ gap, mt, justify, children }) => {
  const styles = {
    display: 'flex',
    gap: gap || '0',
    marginTop: mt || '0',
    justifyContent: justify || 'flex-start',
  };

  return <div style={styles}>{children}</div>;
};

export default Flex;
