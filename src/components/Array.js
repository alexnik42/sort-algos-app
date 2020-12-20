import React from "react";
import Nav from "./Nav";
import Footer from "./Footer";

import { bubbleSort } from "../algorithms/bubble_sort";
import { insertionSort } from "../algorithms/insertion_sort";
import { mergeSort } from "../algorithms/merge_sort";

import "./Array.css";

const DEFAULT_SIZE = 100;

function Array() {
  const [arr, setArray] = React.useState([]);

  function generateArray(size) {
    const arr = [];
    for (let i = 0; i < size; i++) {
      arr.push({
        val: Math.ceil(Math.random() * 300),
        isCurrent: false,
        isFinalPosition: false,
      });
    }
    return arr;
  }

  function handleNewArray(size) {
    const new_arr = generateArray(size);
    setArray(new_arr);
  }

  React.useEffect(() => {
    setArray(generateArray(DEFAULT_SIZE));
  }, []);

  function visualizeItem(item, key) {
    return (
      <div
        className={`array_col ${item.isCurrent ? "current" : ""} ${
          item.isFinalPosition ? "final" : ""
        }`}
        key={key}
        style={{ height: item.val }}
      ></div>
    );
  }

  return (
    <>
      <Nav
        handleNewArray={handleNewArray}
        setArray={setArray}
        arr={arr}
        bubbleSort={bubbleSort}
        insertionSort={insertionSort}
        mergeSort={mergeSort}
      ></Nav>
      <div
        className="array"
        style={{ gridTemplateColumns: `repeat(${arr.length}, 1fr)` }}
      >
        {arr.map((e, index) => {
          return visualizeItem(e, index);
        })}
      </div>
      <Footer></Footer>
    </>
  );
}

export default Array;
