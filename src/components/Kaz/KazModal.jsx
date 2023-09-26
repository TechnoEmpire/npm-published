// We can't delete this for bundling purpose
import React from 'react'; 

import styles from "./KazModal.module.scss";

const KazModal = ({ variant }) => {
  let bgColorClass;

  switch (variant) {
    case "orange":
      bgColorClass = styles.btnOrange;
      break;
    case "red":
      bgColorClass = styles.btnRed;
      break;
    default:
      bgColorClass = styles.btnGreen;
      break;
  }

  // console.log(styles.btn);
  // console.log(bgColorClass);

  return (
    <div>
      <button className={`${styles.btn} ${bgColorClass}`}>
        test button
        <span className={styles.aaa}>CSS</span>
      </button>
    </div>
  );
};

export default KazModal;
