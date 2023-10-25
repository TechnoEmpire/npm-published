import React from 'react';
import styles from './Button.module.scss';

const Button = ({ onClick, className, children, btnBg, btnTextColor }) => {
  const defaultBtn = (
    <>
      <span className={styles.btnOne}>Click me</span>
      <span className={styles.btnTwo}>Great!</span>
    </>
  );

  return (
    <button 
    onClick={onClick} 
    className={`${styles.btn} ${className}`}
    style={{backgroundColor: `${btnBg}` , color: `${btnTextColor}`}} 
    >
      {children || defaultBtn}
    </button>
  );
};

export default Button;
