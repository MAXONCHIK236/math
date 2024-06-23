import React from "react";
import styles from "./Div.module.scss";
const Div = ({ number }) => {
  return (
    <div className={styles.div}>
  <p>{number}</p>
    </div>
  );
};

export default Div;
