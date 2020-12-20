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
  const [size, setSize] = React.useState(100);
  const [speed, setSpeed] = React.useState(40);

  function handleArraySize(e) {
    handleNewArray(e.target.value);
    setSize(e.target.value);
  }

  function handleSortingSpeed(e) {
    setSpeed(e.target.value);
  }

  return (
    <div className="nav-container">
      <div className="nav-array">
        <button className="btn_sort" onClick={() => handleNewArray(size)}>
          Generate new array
        </button>
        <form>
          <label className="sort_label">Array's size</label>
          <input
            className="sort_slider"
            type="range"
            min="5"
            max="200"
            step="5"
            value={size}
            onInput={handleArraySize}
          ></input>
          <label className="sort_label">Sorting speed</label>
          <input
            className="sort_slider"
            type="range"
            min="10"
            max="70"
            step="1"
            value={speed}
            onInput={handleSortingSpeed}
          ></input>
        </form>
      </div>
      <div className="nav_sort_algos">
        <button
          className="btn_sort"
          onClick={() => bubbleSort(arr, setArray, speed)}
        >
          BubbleSort it!
        </button>
        <button
          className="btn_sort"
          onClick={() => insertionSort(arr, setArray, speed)}
        >
          InsertionSort it!
        </button>
        <button
          className="btn_sort"
          onClick={() => mergeSort(arr, setArray, 0, arr.length - 1, speed)}
        >
          MergeSort it!
        </button>
        <button className="btn_sort">QuickSort it!</button>
      </div>
    </div>
  );
}

export default Nav;
