import React, { useState } from 'react';
import styles from "./DivForSolve2.module.scss";
import PropTypes from 'prop-types';

const DivforSolve2 = ({ correctNumber, onComplete }) => {
  const [inputValue, setInputValue] = useState("2295");

  const handleInputChange = (event) => {
    const value = event.target.value;
    setInputValue(value);
    if (value === correctNumber) {
      onComplete();
    }
  };

  const isCorrect = inputValue === correctNumber;
  const isIncorrect = inputValue !== "" && inputValue !== correctNumber;

  return (
    <div className={`${styles.solvediv} ${isCorrect ? styles.greenBackground : isIncorrect ? styles.redBackground : ""}`}>
      <input
        type="text"
        value={inputValue}
        onChange={handleInputChange}
      />
    </div>
  );
};

DivforSolve2.propTypes = {
  correctNumber: PropTypes.string.isRequired,
  onComplete: PropTypes.func.isRequired,
};

export default DivforSolve2;
