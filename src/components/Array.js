import React from 'react';
import { bubbleSort } from '../algorithms/bubble_sort';
import { insertionSort } from '../algorithms/insertion_sort';
import './Array.css';

function Array() {
  const [arr, setArray] = React.useState([]);

  function generateArray() {
    const arr = [];
    for (let i = 0; i < 100; i++) {
      arr.push(
        {
          val: Math.ceil(Math.random() * 300),
          isCurrent: false,
          isFinalPosition: false
        }
      );
    }
    return arr;
  }

  React.useEffect(() => {
    setArray(generateArray());
  }, []);

  function visualizeItem(item, key) {
    return (
      <div className={`array_col ${item.isCurrent ? 'current' : ''} ${item.isFinalPosition ? 'final' : ''}`} key={key} style={{height: item.val}}>
      </div>
    )
  }

  return (
    <>
      <div className="array">
        {arr.map((e, index) => {
          return visualizeItem(e, index);
        })}
      </div>
      <button className="btn_sort" onClick={() => bubbleSort(arr, setArray)}>BubbleSort it!</button>
      <button className="btn_sort" onClick={() => insertionSort(arr, setArray)}>InsertionSort it!</button>
    </>
  )
}

export default Array;