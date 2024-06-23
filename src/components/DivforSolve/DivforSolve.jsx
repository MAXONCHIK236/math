// DivforSolve.jsx
import React, { useState } from 'react';
import styles from "./DivForSolve.module.scss";

const DivforSolve = ({ correctNumber, onComplete }) => {
  const [inputValue, setInputValue] = useState("");

  const handleInputChange = (event) => {
    setInputValue(event.target.value);
    
    // Check if input matches correctNumber and fire onComplete callback
    if (event.target.value === correctNumber) {
      onComplete(); // Fire onComplete callback when correct number is entered
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

export default DivforSolve;
