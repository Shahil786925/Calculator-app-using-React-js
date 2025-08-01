import React, { useState } from "react";
import Display from "./Display";
import Button from "./Button";

const buttons = [
  "7","8","9","/",
  "4","5","6","*",
  "1","2","3","-",
  ".", "0", "=", "+"
];

export default function Calculator() {
  const [input, setInput] = useState("");
  const [result, setResult] = useState("");

  const handleClick = (value) => {
    if (value === "=") return calculate();
    if (value === "C") return clearAll();
    setInput((prev) => prev + value);
  };

  const calculate = () => {
    try {
      // warning: eval() can be unsafe in production; for learning only
      const evalResult = eval(input).toString();
      setResult(evalResult);
    } catch (e) {
      setResult("Error");
    }
  };

  const clearAll = () => {
    setInput("");
    setResult("");
  };

  return (
    <div className="calculator-app">
      <h1>React Calculator</h1>
      <Display input={input} result={result} />
      <div className="buttons">
        {buttons.map((b) => (
          <Button
            key={b}
            label={b}
            onClick={() =>
              b === "=" ? calculate() : handleClick(b)
            }
            className={
              b.match(/[0-9.]/) ? "number" : "operator"
            }
          />
        ))}
        <Button label="C" onClick={clearAll} className="clear" />
      </div>
    </div>
  );
}
