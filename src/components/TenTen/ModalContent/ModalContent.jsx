import React from 'react';
import styles from './ModalContent.module.scss';

const ModalContent = ({ children, className, position }) => {
  const positionType = position === 'slide-up' ? 'slide-up'
  :position === 'slide-down' ?'slide-down'
  :position === 'full-screen'? 'full-screen'
  :'default';

  return (
    <div className={`${styles.modalContent} ${styles[positionType]} ${className} `}>
      {children}
    </div>
  );
};

export default ModalContent;
