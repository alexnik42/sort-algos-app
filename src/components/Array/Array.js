import React from "react";
import { HEIGHT_MULTIPLIER } from "utils/constants";
import { getNumFontSize, getNumWidth } from "utils/utils";
import "./Array.css";

function Array({ array }) {
  const numMargin = getNumWidth(array.length);
  const numWidth =
    (window.innerWidth - 2 * numMargin * array.length) / array.length;
  const color = numWidth > 20 ? "white" : "transparent";
  const numFontSize = getNumFontSize(numWidth);

  return (
    <div
      className="array"
      style={{
        gridTemplateColumns: `repeat(${array.length}, 1fr)`,
        gap: numMargin,
      }}
    >
      {array.map((element, index) => {
        return (
          <div
            className={`array-col ${element.status}`}
            key={index}
            style={{
              height: element.val * HEIGHT_MULTIPLIER,
              color: color,
              fontSize: `${numFontSize}px`,
            }}
          >
            {element.val}
          </div>
        );
      })}
    </div>
  );
}

export default Array;
