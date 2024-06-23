import React from "react";
import styles from "./Div2.module.scss";

const Div2 = ({ number, grayBorders }) => {
  return (
    <div className={`${styles.div2} ${grayBorders ? styles.grayBorders : ""}`}>
     <p>{number}</p> 
    </div>
  );
};

export default Div2;
