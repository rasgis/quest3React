import React, { useState } from "react";
import styles from "./App.module.css";

export const App = () => {
  const NUMS = ["1", "2", "3", "4", "5", "6", "7", "8", "9", "0"];
  const [operand1, setOperand1] = useState("");
  const [operator, setOperator] = useState("");
  const [operand2, setOperand2] = useState("");
  const [resultDisplayed, setResultDisplayed] = useState(false);

  const handleNumberClick = (num) => {
    if (resultDisplayed) {
      setOperand1(num);
      setOperator("");
      setOperand2("");
      setResultDisplayed(false);
    } else if (operator) {
      setOperand2((prev) => prev + num);
    } else {
      setOperand1((prev) => prev + num);
    }
  };

  const handleOperatorClick = (op) => {
    if (resultDisplayed) {
      setOperator(op);
      setResultDisplayed(false);
    } else if (!operator && operand1) {
      setOperator(op);
    }
  };

  const calculateResult = () => {
    if (operand1 && operator && operand2) {
      const num1 = parseInt(operand1, 10);
      const num2 = parseInt(operand2, 10);
      let result = 0;

      if (operator === "+") result = num1 + num2;
      if (operator === "-") result = num1 - num2;

      setOperand1(String(result));
      setOperator("");
      setOperand2("");
      setResultDisplayed(true);
    }
  };

  const resetCalculator = () => {
    setOperand1("");
    setOperator("");
    setOperand2("");
    setResultDisplayed(false);
  };

  return (
    <div className={styles.calculator}>
      <div
        className={`${styles.display} ${
          resultDisplayed ? styles.result : ""
        }`}
      >
        {operand1}
        {operator}
        {operand2}
      </div>
      <div className={styles.buttons}>
        {NUMS.map((num) => (
          <button
            key={num}
            className={styles.button}
            onClick={() => handleNumberClick(num)}
          >
            {num}
          </button>
        ))}
        <button
          className={styles.button}
          onClick={() => handleOperatorClick("+")}
        >
          +
        </button>
        <button
          className={styles.button}
          onClick={() => handleOperatorClick("-")}
        >
          -
        </button>
        <button className={styles.button} onClick={calculateResult}>
          =
        </button>
        <button className={styles.button} onClick={resetCalculator}>
          C
        </button>
      </div>
    </div>
  );
};