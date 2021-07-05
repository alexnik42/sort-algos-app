import { delay, handleDispatch } from "../utils/utils";
import { setNewArray } from "redux/actions/actions";

export async function quickSort(dispatch, array, speed) {
  const auxiliaryRes = [];
  doQuickSort(array, 0, array.length - 1, auxiliaryRes);
  auxiliaryRes.push(JSON.parse(JSON.stringify(array)));
  for (let i = 0; i < auxiliaryRes.length; i++) {
    await delay(speed, () =>
      handleDispatch(dispatch, setNewArray, auxiliaryRes[i])
    );
  }
}

function doQuickSort(array, start, end, auxiliaryRes) {
  if (start >= end) {
    array[Math.max(Math.min(start, end), 0)].status = "is-sorted";
    return;
  }

  let min = start;
  let max = end;

  let randIndex = Math.floor(min + Math.random() * (max + 1 - min));
  let pivot = array[randIndex].val;
  array[randIndex].status = "is-pivot";
  auxiliaryRes.push(JSON.parse(JSON.stringify(array)));

  let pivotCurrentIndex = start;
  [array[start], array[randIndex]] = [array[randIndex], array[start]];
  auxiliaryRes.push(JSON.parse(JSON.stringify(array)));

  for (let i = start + 1; i <= end; i++) {
    array[i].status = "is-correct-position";
    auxiliaryRes.push(JSON.parse(JSON.stringify(array)));
    if (pivot <= array[i].val) {
      array[i].status = "not-sorted";
    } else {
      array[i].status = "is-wrong-position";
      auxiliaryRes.push(JSON.parse(JSON.stringify(array)));

      const valueToSwap = JSON.parse(JSON.stringify(array[i]));
      array.splice(i, 1);
      array.splice(pivotCurrentIndex++, 0, valueToSwap);
      array[pivotCurrentIndex - 1].status = "is-correct-position";
      auxiliaryRes.push(JSON.parse(JSON.stringify(array)));

      array[pivotCurrentIndex - 1].status = "not-sorted";
    }
    auxiliaryRes.push(JSON.parse(JSON.stringify(array)));
  }

  array[pivotCurrentIndex].status = "is-sorted";
  auxiliaryRes.push(JSON.parse(JSON.stringify(array)));

  doQuickSort(array, start, pivotCurrentIndex - 1, auxiliaryRes);
  doQuickSort(array, pivotCurrentIndex + 1, end, auxiliaryRes);
}
