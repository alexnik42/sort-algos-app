import React from "react";
import { HEIGHT_MULTIPLIER } from "utils/constants";
import "./Array.css";

function Array({ array }) {
  return (
    <div
      className="array"
      style={{ gridTemplateColumns: `repeat(${array.length}, 1fr)` }}
    >
      {array.map((element, index) => {
        return (
          <div
            className={`array_col current ${element.status}`}
            key={index}
            style={{ height: element.val * HEIGHT_MULTIPLIER, marginRight: 5 }}
          ></div>
        );
      })}
    </div>
  );
}

export default Array;
