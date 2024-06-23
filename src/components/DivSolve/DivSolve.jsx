import React, { useState } from 'react';
import PropTypes from 'prop-types';
import styles from "./DivSolve.module.scss";

const DivSolve = ({ correctNumber, onValueChange }) => {
  const [inputValue, setInputValue] = useState("");

  const handleInputChange = (event) => {
    const value = event.target.value;
    setInputValue(value);
    onValueChange(value);
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

DivSolve.propTypes = {
  correctNumber: PropTypes.string.isRequired,
  onValueChange: PropTypes.func,
};

DivSolve.defaultProps = {
  onValueChange: () => {},  // No-op function
};

export default DivSolve;
