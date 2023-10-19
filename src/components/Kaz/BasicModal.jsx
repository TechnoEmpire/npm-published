// We can't delete this for bundling purpose
import React from 'react';

import styles from "./BasicModal.module.scss";

const BasicModal = ({
  btnTexts = "OPEN MODAL",
  btnTextsColor = "#fff",
  texts = "Default text Default text Default text Default text Default text Default text Default text Default text Default text Default text Default text Default text Default text Default text Default text Default text ",
  btnColor,
  modalColor,
  modalTextsColor = "#2f2f2f",
}) => {

  return (
    <div className={`${styles.modal__wrap}`}>

      <input type="radio" id="modal__open" className={`${styles.modal__open__input}`} name="modal__trigger" />

      {/*  */}
      <label htmlFor="modal__open"
        className={`${styles.modal__open__label}`}
        style={{ 
          backgroundColor: `${btnColor}`, 
          color: `${btnTextsColor}`
        }}
      >
        {btnTexts}
      </label>

      <input type="radio" id="modal__close" name="modal__trigger" />
      <div className={`${styles.modal}`}>

        <div className={`${styles.modal__content__wrap}`}>

          <label htmlFor="modal__close" className={`${styles.modal__close__label}`}>×</label>

          <div 
          className={`${styles.modal__content}`} 
          style={{
            backgroundColor: `${modalColor}`,
            color: `${modalTextsColor}`
            }}>
            {texts}
          </div>
        </div>

        <label htmlFor="modal__close">
          <div className={`${styles.modal__background}`}></div>
        </label>
      </div>
    </div>
  );
};

export default BasicModal;
