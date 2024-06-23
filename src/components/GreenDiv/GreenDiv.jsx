import React from "react";
import styles from "./GreenDiv.module.scss";
const GreenDiv = ({ number }) => {
  return (
    <div className={styles.div}>
  <p>{number}</p>
    </div>
  );
};

export default GreenDiv;
