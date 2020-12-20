import React from "react";
import Nav from "./Nav";
import Footer from "./Footer";

import { bubbleSort } from "../algorithms/bubble_sort";
import { insertionSort } from "../algorithms/insertion_sort";
import { mergeSort } from "../algorithms/merge_sort";

import "./Array.css";

function Array() {
  const [arr, setArray] = React.useState([]);

  function generateArray() {
    const arr = [];
    for (let i = 0; i < 100; i++) {
      arr.push({
        val: Math.ceil(Math.random() * 300),
        isCurrent: false,
        isFinalPosition: false,
      });
    }
    return arr;
  }

  function handleNewArray() {
    const new_arr = generateArray();
    setArray(new_arr);
  }

  React.useEffect(() => {
    setArray(generateArray());
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
      <div className="array">
        {arr.map((e, index) => {
          return visualizeItem(e, index);
        })}
      </div>
      <Footer></Footer>
    </>
  );
}

export default Array;
