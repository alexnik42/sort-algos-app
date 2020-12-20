import React from "react";
import "./Nav.css";

function Nav({
  handleNewArray,
  setArray,
  arr,
  bubbleSort,
  insertionSort,
  mergeSort,
}) {
  return (
    <div className="nav-container">
      <div className="nav-array">
        <button className="btn_sort" onClick={() => handleNewArray()}>
          Generate new array
        </button>
      </div>
      <div className="nav_sort_algos">
        <button className="btn_sort" onClick={() => bubbleSort(arr, setArray)}>
          BubbleSort it!
        </button>
        <button
          className="btn_sort"
          onClick={() => insertionSort(arr, setArray)}
        >
          InsertionSort it!
        </button>
        <button
          className="btn_sort"
          onClick={() => mergeSort(arr, setArray, 0, arr.length - 1)}
        >
          MergeSort it!
        </button>
        <button className="btn_sort">QuickSort it!</button>
      </div>
    </div>
  );
}

export default Nav;
