import React from "react";
import styles from "./ButtonHint.module.scss";
const ButtonHint = ({ logics }) => {
  return (
    <button className={styles.hint} onClick={logics}>
      <a>💡Подсказка</a>
    </button>
  );
};

export default ButtonHint;
