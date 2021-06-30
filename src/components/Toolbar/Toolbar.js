import React from "react";
import "./Toolbar.css";

function Toolbar({
  array,
  size,
  speed,
  generateNewArray,
  bubbleSort,
  insertionSort,
  changeArraySize,
  changeSortingSpeed,
}) {
  const [sortingProperties, setSortingProperties] = React.useState({
    size: size,
    speed: speed,
  });

  function handleInputChange(event) {
    setSortingProperties((prev) => ({
      ...prev,
      ...{
        [event.target.name]: event.target.value,
      },
    }));
  }

  React.useEffect(() => {
    changeArraySize(sortingProperties.size);
  }, [changeArraySize, sortingProperties.size]);

  React.useEffect(() => {
    changeSortingSpeed(sortingProperties.speed);
  }, [changeSortingSpeed, sortingProperties.speed]);

  return (
    <div className="nav-container">
      <div className="nav-array">
        <button
          className="btn btn-primary"
          onClick={() => generateNewArray(sortingProperties.size)}
        >
          Generate new array
        </button>
        <form className="form-horizontal">
          <label className="sort_label">Array's size</label>
          <input
            className="sort_slider"
            type="range"
            name="size"
            min="3"
            max="100"
            step="5"
            value={sortingProperties.size}
            onChange={handleInputChange}
          ></input>
          <label className="sort_label">Sorting speed</label>
          <input
            className="sort_slider"
            type="range"
            name="speed"
            min="2"
            max="80"
            step="1"
            value={sortingProperties.speed}
            onChange={handleInputChange}
          ></input>
        </form>
      </div>
      <div className="nav_sort_algos">
        <button
          className="btn btn-secondary"
          onClick={() => bubbleSort(array, sortingProperties.speed)}
        >
          Bubble Sort
        </button>
        <button
          className="btn btn-secondary"
          onClick={() => insertionSort(array, sortingProperties.speed)}
        >
          Insertion Sort
        </button>
        <button className="btn btn-secondary">MergeSort</button>
        <button className="btn btn-secondary">QuickSort</button>
      </div>
    </div>
  );
}

export default Toolbar;
