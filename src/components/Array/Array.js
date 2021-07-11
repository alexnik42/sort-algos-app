import React from "react";
import { HEIGHT_MULTIPLIER, WIDTH_MULTIPLIER } from "utils/constants";
import { getNumFontSize, getNumWidth } from "utils/utils";
import "./Array.css";

function Array({ array }) {
  const numMargin = getNumWidth(array.length, window.innerWidth);
  const numWidth =
    (window.innerWidth - 2 * numMargin * array.length) / array.length;
  const color = numWidth > 20 ? "white" : "transparent";
  const numFontSize = getNumFontSize(numWidth);
  const colWidth = window.innerWidth / (array.length * WIDTH_MULTIPLIER);

  return (
    <div className="arrayContainer">
      <div
        className="arrayBody"
        style={{
          gridTemplateColumns: `repeat(${array.length}, ${colWidth}px)`,
          gap: numMargin,
        }}
      >
        {array.map((element, index) => {
          return (
            <div
              className={`arrayColumn ${element.status}`}
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
    </div>
  );
}

export default Array;
