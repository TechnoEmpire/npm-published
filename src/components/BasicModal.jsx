// We can't delete this for bundling purpose
import React from 'react';

import styles from "./BasicModal.module.scss";

const BasicModal = ({
  position = "slide-down",
  btnTexts = "OPEN MODAL",
  btnTextsColor = "#fff",
  texts = "Default text  Default text ",
  btnColor = "#2f2f2f",
  modalColor = "#ffffff",
  modalTextsColor = "#2f2f2f",
}) => {

  // Animation Type Change
  const positionType = position === 'slide-up' ? 'slide-up' : 'slide-down';

  return (
    <div className={`${styles.modalWrap}`}>

      {/* Hidden input check box */}
      <input
        type="radio"
        id="MODAL__OPEN"
        className={`${styles.modal__open__input}`}
        name="MODAL__TRIGGER"
      />

      {/* OPEN BUTTON  */}
      <label
        htmlFor="MODAL__OPEN"
        className={`${styles.modal__open__label}`}
        style={{
          backgroundColor: `${btnColor}`,
          color: `${btnTextsColor}`
        }}
      >
        {btnTexts}
      </label>

      {/* Hidden input check box */}
      <input
        type="radio"
        id="MODAL__CLOSE"
        name="MODAL__TRIGGER"
      />

      {/* ENTIRE OPENED MODAL */}
      <div className={`${styles.modal}`}>

        {/* CONTENT OF THE MODAL */}
        <div
          className={`
            ${styles.modal__content__wrap} 
            ${styles.modalContent}
            ${styles[positionType]}
          `}>

          {/* CLOSE BUTTON */}
          <label
            htmlFor="MODAL__CLOSE"
            className={`${styles.modal__close__label}`}>
            ×
          </label>

          {/* MODAL BOX CONTENT */}
          <div
            className={`${styles.modal__content} `}
            style={{
              backgroundColor: `${modalColor}`,
              color: `${modalTextsColor}`
            }}>
            {texts}
          </div>
        </div>

        {/* CLOSE BACKGROUND */}
        <label htmlFor="MODAL__CLOSE">
          <div className={`${styles.modal__background}`}></div>
        </label>

      </div>
    </div>
  );
};

export default BasicModal;
