import React from "react";
import styles from "./ButtonMultiplication.module.scss";
import img from "../../assents/example8/noto_heavy-multiplication-x.png";
const ButtonMultiplication = () => {
  return (
    <div className={styles.multiplication}>
      <div className={styles.multiplication2}>
        {/* <img src="" alt="shpora" /> */}
      </div>
      <button className={styles.ButtonMultiplication}>
        <img src={img} alt="img" />
        Таблица умножения
      </button>
    </div>
  );
};

export default ButtonMultiplication;
