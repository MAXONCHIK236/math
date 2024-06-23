import React from "react";
import styles from "./MultiplicationTable.module.scss"
const MultiplicationTable = () => {
  const numbers = [1, 2, 3, 4, 5, 6, 7, 8, 9, 10]; // Multiplication table from 1 to 10

  return (
    <div>
      <h2>Multiplication Table</h2>
      <table>
        <thead>
          <tr>
            <th>&nbsp;</th> {/* Empty corner */}
            {numbers.map((num) => (
              <th key={num}>{num}</th> // Header row with numbers 1 to 10
            ))}
          </tr>
        </thead>
        <tbody>
          {numbers.map((rowNum) => (
            <tr key={rowNum}>
              <td><strong>{rowNum}</strong></td> {/* Left column with row numbers */}
              {numbers.map((colNum) => (
                <td key={`${rowNum}_${colNum}`}>{rowNum * colNum}</td> // Calculate and display multiplication result
              ))}
            </tr>
          ))}
        </tbody>
      </table>
    </div>
  );
};

export default MultiplicationTable;
