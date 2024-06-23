import React, { useState, useEffect } from "react";
import styles from "./ColumnMultiplication.module.scss"; // Adjust the path to your actual SCSS file
import DivSolve from "../DivSolve/DivSolve";

const ColumnMultiplication = ({ onCompletion }) => {
  const [bottomRowValues, setBottomRowValues] = useState(["", "", "", ""]);
  const [clickedDiv, setClickedDiv] = useState(null);

  const handleDivClick = (divName) => {
    setClickedDiv(divName);
  };
  const handleBottomRowChange = (index, value) => {
    const newValues = [...bottomRowValues];
    newValues[index] = value;
    setBottomRowValues(newValues);
  };

  useEffect(() => {
    const isCorrect = bottomRowValues.join("") === "2295";
    if (isCorrect) {
      onCompletion();
    }
  }, [bottomRowValues, onCompletion]);

  return (
    <div className={styles.ColumnMultiplication}>
      <div className={styles.ColumnMultiplication__top}>
        <div style={{ display: "flex", alignItems: "center" }} className={styles.close}>
          <p>+</p>
        </div>
        <div className={styles.ColumnMultiplication__top_child}>
          <div className={styles.ColumnMultiplication__top_column}>
            <div className={styles.ColumnMultiplication__left}>
              <div className={styles.main__flex}>
                <div className={styles.close}>
                  <p>x</p>
                </div>
                <div className={styles.main__multiplication}>
                    <div style={{marginBottom:"10px"}} className={styles.ColumnMultiplication__top_flex}>
                      <div className={`${styles.div1} ${(clickedDiv === 'yellowborder2' || clickedDiv === 'yellowborder1' || clickedDiv === 'yellowborder5' || clickedDiv === 'yellowborder4') ? styles.goldBorder : ''}`}>
                        <p>2</p>
                      </div>
                      <div className={`${styles.div2} ${(clickedDiv === 'yellowborder3' || clickedDiv === 'yellowborder6') ? styles.goldBorder : ''}`}>
                        <p>7</p>
                      </div>
                    </div>
                    <div className={styles.ColumnMultiplication__top_flex}>
                      <div className={`${styles.div3} ${(clickedDiv === 'yellowborder5' || clickedDiv === 'yellowborder4' || clickedDiv === 'yellowborder6') ? styles.goldBorder : ''}`}>
                        <p>8</p>
                      </div>
                      <div className={`${styles.div4} ${(clickedDiv === 'yellowborder3' || clickedDiv === 'yellowborder2' || clickedDiv === 'yellowborder1') ? styles.goldBorder : ''}`}>
                        <p>5</p>
                      </div>
                    </div>
                    <hr />
                  </div>
                </div>
                <div className={styles.ColumnMultiplication__top_flex}>
                <div
                  className={styles.div__none}
                  onClick={() => handleDivClick('yellowborder4')}
                >
                  <DivSolve correctNumber="2" />
                </div>
                  <div
                    className={styles.yellowborder1 }
                    onClick={() => handleDivClick('yellowborder1')}
                  >
                    <DivSolve correctNumber="1" />
                  </div>
                  <div
                    className={styles.yellowborder2}
                    onClick={() => handleDivClick('yellowborder2')}
                  >
                    <DivSolve correctNumber="3" />
                  </div>
                  <div
                    className={styles.yellowborder3}
                    onClick={() => handleDivClick('yellowborder3')}
                  >
                    <DivSolve correctNumber="5" />
                  </div>
                </div>
              </div>
              <div style={{
               paddingLeft:"40px"
              }}>
              <div className={styles.ColumnMultiplication__top_flex}>
          
                <div
                  className={styles.yellowborder4}
                  onClick={() => handleDivClick('yellowborder4')}
                >
                  <DivSolve correctNumber="2" />
                </div>
                <div
                  className={styles.yellowborder5}
                  onClick={() => handleDivClick('yellowborder5')}
                >
                  <DivSolve correctNumber="1" />
                </div>
                <div
                  className={styles.yellowborder6}
                  onClick={() => handleDivClick('yellowborder6')}
                >
                  <DivSolve correctNumber="6" />
                </div>
             
                <div className={styles.div__none}>
                  <input
                    type="text"
                  />
                </div>
              </div>
              </div>
            <hr className={styles.hr__solve} />
            <div style={{ paddingLeft: "40px" }} className={styles.ColumnMultiplication__bottom}>
              <div className={styles.ColumnMultiplication__top_flex}>
                {["2", "2", "9", "5"].map((num, index) => (
                  <DivSolve
                    key={index}
                    correctNumber={num}
                    onValueChange={(value) => handleBottomRowChange(index, value)}
                  />
                ))}
              </div>
            </div>
          </div>
        </div>
      </div>
    </div>
  );
};

export default ColumnMultiplication;
