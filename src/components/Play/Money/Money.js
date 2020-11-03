import React from "react";
import "../../../index.css";

export default function Money({ money, count, id }) {
  const check = count + 1;
  return (
    <div key={id} className={check === id ? "beafor beafor-active" : "beafor"}>
      <div className={check === id ? "shag shag-active" : "shag"}>
        <span className={check > id ? "number gray" : "number"}>{money}</span>
      </div>
    </div>
  );
}
