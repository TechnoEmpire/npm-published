// We can't delete this for bundling purpose
import React from "react";

import { useState,useEffect } from "react";

import styles from './Modal.module.scss';

const Modal = () => {
    const [isPopUp, setIsPopUp] = useState(false);

    useEffect(() => {
        const handleKeyPress = (e) => {
          if (e.key === "Escape") {
            closeModal();
          }
        };
    
        if (isPopUp) {
          window.addEventListener("keydown", handleKeyPress);
        } else {
          window.removeEventListener("keydown", handleKeyPress);
        }
    
        return () => {
          window.removeEventListener("keydown", handleKeyPress);
        };
      }, [isPopUp]);
    
      const togglePopover = () => {
        setIsPopUp(!isPopUp);
      };
      
      
    
      const closeModal = () => {
        setIsPopUp(false);
      };
    
      const preventModalClose = (e) => {
        e.stopPropagation(); // Prevent the click event from propagating to close the modal
      };

  return (
    <>
    <div>
      {/* BUTTON */}
      <button onClick={togglePopover} className={styles.btn}>
        <span className={styles.btnOne }>Click me</span>
        <span className={styles.btnTwo }>Great!</span>
      </button>

      {/* MODAL CONTENTS */}
      {isPopUp && (
        <div className="popover backdrop-static"
          onClick={closeModal}
        >
          <div className={styles.popUpContent} onClick={preventModalClose}>
            <div className={styles.popUpHeader}>
              <h1> Pop Up Static backdrop</h1>

              <span onClick={closeModal} className={styles.closeModal}>
                ×
              </span>
            </div>
            <div className={styles.popUpBody}>
              <p>
                Lorem ipsum dolor sit amet, consectetur adipiscing elit. Nullam
                pulvinar risus non risus hendrerit venenatis. Pellentesque sit
                amet hendrerit risus, sed porttitor quam.
                Lorem ipsum dolor sit amet, consectetur adipiscing elit. Nullam
                pulvinar risus non risus hendrerit venenatis. Pellentesque sit
                amet hendrerit risus, sed porttitor quam.
                Magna exercitation reprehenderit magna aute tempor cupidatat
                consequat elit dolor adipisicing. Mollit dolor eiusmod sunt ex
                incididunt cillum quis. Velit duis sit officia eiusmod Lorem
                aliqua enim laboris do dolor eiusmod. Et mollit incididunt nisi
                consectetur esse laborum eiusmod pariatur proident Lorem eiusmod
                et. Culpa deserunt nostrud ad veniam.
              </p>
            </div>
          </div>
        </div>
      )}
    </div>
    </>
  );
}


export default Modal;