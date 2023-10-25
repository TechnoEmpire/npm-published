// ModalHeader.js
import React from 'react';
import { useState } from 'react';
import styles from './ModalHeader.module.scss'


const ModalHeader = ({onClick,children,className}) => {
  const defaultHeader = (
    <>
     <h1> Pop Up Static backdrop</h1>
    </>
  );


  return (
    <div className={`${styles.modalHeader} ${className}`}>
 {children || defaultHeader}
      <span className={styles.modalOff} onClick={onClick}>x</span>
    </div>
  );
};

export default ModalHeader;
