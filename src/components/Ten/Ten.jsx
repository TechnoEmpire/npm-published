import React, { useState } from 'react';
import styles from './Ten.module.scss'


const Ten = () => {
  const [isOpen, setIsOpen] = useState(false);

  const openModal = () => {
    setIsOpen(true);
  };

  const closeModal = () => {
    setIsOpen(false);
  };

  return (
    <div>
      {/* BUTTON */}
      <button onClick={openModal} className={styles.btn}>
        <span className={styles.btnOne}>Click me</span>
        <span className={styles.btnTwo}>Great!</span>
      </button>


      {isOpen && (
        <div className={styles.modal}>
          <div className={styles.modalContent}>
            <div className={styles.modalHeader}>
              <h1> Pop Up Static backdrop</h1>

              <span onClick={closeModal} className={styles.closeModal}>
                ×
              </span>
            </div>
            <div className={styles.modalBody}>
              <p>Lorem ipsum dolor sit amet consectetur adipisicing elit. Expedita, quo?</p>
            </div>
          </div>
        </div>
      )}
    </div>
  );
};

export default Ten;
