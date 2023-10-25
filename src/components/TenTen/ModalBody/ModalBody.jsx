// ModalBody.js
import React from 'react';
import styles from './ModalBody.module.scss'


const ModalBody = ({ children }) => {
  const defaultBody = (
    <>
      <p>Hello</p>
    </>
  ); return (
    <div className={styles.modalBody}>
      {children || defaultBody}
    </div>

  );
};

export default ModalBody;
