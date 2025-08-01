import React from "react";

export default function Display({ input, result }) {
  return (
    <div className="screen">
      <div className="input">{input || "0"}</div>
      <div className="result">{result}</div>
    </div>
  );
}
