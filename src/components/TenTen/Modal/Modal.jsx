// Modal.js
import React from 'react';
import styles from './Modal.module.scss'


const Modal = ({ isOpen,children }) => {
  return (
    isOpen && (
      <div className={styles.modal}>
          <div className={styles.modalContent}>
            {children}
          </div>
        
        </div>
      
    )
  );
};

export default Modal;