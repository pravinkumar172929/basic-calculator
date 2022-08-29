import React, { useState } from "react";

export default function CalculatorImproved() {
  const [operand1, setOperand1] = useState("");
  const [operand2, setOperand2] = useState("");
  const [operator, setOperator] = useState("");
  const [result, setResult] = useState("");
  const [errorMessage, setErrorMessage] = useState("");

  const handleOperands = (value) => {
    setResult("");
    if (!operator) {
      setOperand1(operand1 + value);
    } else {
      setOperand2(operand2 + value);
    }
  };

  const handleOperator = (operatorValue) => {
    if (!operand1) {
      setErrorMessage("Select an operand first");
      setOperator("");
      return;
    }
    setOperator(operatorValue);
  };

  const updateResult = () => {
    if (operator === "+") {
      setResult(+operand1 + +operand2);
    } else if (operator === "-") {
      setResult(+operand1 - +operand2);
    } else if (operator === "*") {
      setResult(+operand1 * +operand2);
    } else {
      setResult(+operand1 / +operand2);
    }
    setOperand1("");
    setOperator("");
    setOperand2("");
  };

  const delOperationHandler = () => {
    if (operand2) {
      setOperand2(operand2.slice(0, operand2.length - 1));
    } else if (operator) {
      setOperator("");
    } else {
      setOperand1(operand1.slice(0, operand1.length - 1));
    }
  };

  console.log("1", operand1);
  console.log("2", operand2);
  console.log("op", operator);

  return (
    <div>
      <h1>Basic Calculator</h1>
      <div className="calculator">
        <div className="display">
          {result ? result : operand1 + operator + operand2}
        </div>
        <div className="operators">
          {["+", "-", "*", "/"].map((item) => (
            <button
              key={item}
              onClick={() => {
                handleOperator(item);
              }}
            >
              {item}
            </button>
          ))}
          <button
            onClick={() => {
              delOperationHandler();
            }}
          >
            DEL
          </button>
        </div>

        <div className="digits">
          {[1, 2, 3, 4, 5, 6, 7, 8, 9, 0, "."].map((item) => (
            <button
              key={item}
              onClick={() => {
                handleOperands(item);
              }}
            >
              {item}
            </button>
          ))}
          <button
            onClick={() => {
              updateResult();
            }}
          >
            =
          </button>
        </div>
      </div>
    </div>
  );
}
