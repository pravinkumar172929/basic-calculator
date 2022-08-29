import React, { useState } from "react";

export default function Calculator() {
  const [operand1, setoperand1] = useState("");
  const [operand2, setoperand2] = useState("");
  const [operator, setOperator] = useState("");
  const [result, setResult] = useState("");
  const [errorMessage, setErrorMessage] = useState("");

  //   const operatorsArr = ["+", "-", "*", "/"];

  //   const updateOperations = (value) => {
  //     if (!operatorsArr.includes(value) && operator === undefined) {
  //       setoperand1(value);
  //     } else if (!operatorsArr.includes(value) && operator !== undefined) {
  //       setoperand2(value);
  //     } else if (operatorsArr.includes(value)) {
  //       setOperator(value);
  //     }
  //   };

  //   console.log("operand1 =>", operand1);
  //   console.log("operand2 =>", operand2);
  //   console.log("operator =>", operator);

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
    setoperand1("");
    setOperator("");
    setoperand2("");
  };

  return (
    <div>
      <h1>Calculator</h1>
      <div style={{ color: "red" }}>{errorMessage}</div>
      <div className="display" style={{ backgroundColor: "aqua" }}>
        {result ? result : operand1 + operator + operand2}
      </div>

      <div className="operators">
        {["+", "-", "*", "/"].map((item) => (
          <button
            key={item}
            onClick={() => {
              if (!operand1) {
                setErrorMessage("Select an operand first");
                setOperator("");
                return;
              }
              setOperator(item);
            }}
          >
            {item}
          </button>
        ))}
      </div>

      <div className="digits">
        {[1, 2, 3, 4, 5, 6, 7, 8, 9, 0, "."].map((item) => (
          <button
            key={item}
            onClick={() => {
              setResult("");
              if (!operator) {
                setoperand1(operand1 + item);
                setErrorMessage("");
              } else {
                setoperand2(operand2 + item);
              }
            }}
          >
            {item}
          </button>
        ))}
      </div>

      <div>
        <button
          onClick={() => {
            if (operand2) {
              setoperand2(operand2.slice(0, operand2.length - 1));
            } else if (operator) {
              setOperator("");
            } else {
              setoperand1(operand1.slice(0, operand1.length - 1));
            }
          }}
        >
          del
        </button>
      </div>

      <div>
        <button
          onClick={() => {
            updateResult();
          }}
        >
          =
        </button>
      </div>
    </div>
  );
}
