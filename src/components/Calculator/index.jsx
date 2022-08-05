import React from "react";
import { useState } from "react";

export default function Calculator() {
  const [result, setResult] = useState("");

  const [calculation, setCalculation] = useState("");
  const operators = ["/", "*", "+", "-", "."];

  const makeCalculation = (value) => {
    //If the last value is operators and calculation has nothing OR
    if (
      (operators.includes(value) && calculation === "") ||
      //The value is an operator and the last value is also an operator
      (operators.includes(value) && operators.includes(calculation.slice(-1))) // -1 to get the last element
    ) {
      //We will return nothing
      return;
    }
    setCalculation(calculation + value);

    //If the last element is not an operator
    if (!operators.includes(value)) {
      setResult(eval(calculation + value).toString());
    }
  };

  //eval = making math operation with the strings

  const finishedCalculation = () => {
    setCalculation(eval(calculation).toString());
  };

  const deleteLast = () => {
    if (calculation === "") {
      return;
    }
    const value = calculation.slice(0, -1);
    setCalculation(value);
  };

  const createNumber = () => {
    let numbers = [];
    for (let i = 1; i < 10; i++) {
      numbers.push(
        <button onClick={() => makeCalculation(i.toString())} key={i}>
          {i}
        </button>
      );
    }
    return numbers;
  };

  return (
    <div className="app-wraper">
      <div className="display-wrapper">
        <div>
          {result ? <span>({result})</span> : ""} &nbsp;
          {calculation || 0}
        </div>
      </div>
      <div className="operators">
        <button onClick={() => makeCalculation("/")}>/</button>
        <button onClick={() => makeCalculation("*")}>*</button>
        <button onClick={() => makeCalculation("+")}>+</button>
        <button onClick={() => makeCalculation("-")}>-</button>
        <button onClick={() => deleteLast()}>DEL</button>
      </div>
      <div className="digits">
        {createNumber()}
        <button onClick={() => makeCalculation(".")}>.</button>
        <button button onClick={() => makeCalculation("0")}>
          0
        </button>
        <button onClick={() => finishedCalculation()}>=</button>
      </div>
    </div>
  );
}
