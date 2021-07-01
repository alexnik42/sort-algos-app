import React from "react";
import "./Toolbar.css";

function Toolbar({
  array,
  size,
  isSortRunning,
  speed,
  generateNewArray,
  setSortingActive,
  setSortingInActive,
  bubbleSort,
  insertionSort,
  mergeSort,
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

  async function handleButtonClick(event) {
    setSortingActive();
    let sortingAlgorithm = event.target.name;
    switch (sortingAlgorithm) {
      case "bubbleSort":
        await bubbleSort(array, sortingProperties.speed);
        break;
      case "insertionSort":
        await insertionSort(array, sortingProperties.speed);
        break;
      case "mergeSort":
        await mergeSort(array, sortingProperties.speed);
        break;
      default:
        return;
    }
    setSortingInActive();
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
          disabled={isSortRunning}
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
          name="bubbleSort"
          disabled={isSortRunning}
          onClick={handleButtonClick}
        >
          Bubble Sort
        </button>
        <button
          className="btn btn-secondary"
          name="insertionSort"
          disabled={isSortRunning}
          onClick={handleButtonClick}
        >
          Insertion Sort
        </button>
        <button
          className="btn btn-secondary"
          name="mergeSort"
          disabled={isSortRunning}
          onClick={handleButtonClick}
        >
          MergeSort
        </button>
        <button className="btn btn-secondary" disabled>
          QuickSort
        </button>
      </div>
    </div>
  );
}

export default Toolbar;
