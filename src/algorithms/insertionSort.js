import { delay, handleDispatch } from "../utils/utils";
import { setNewArray } from "redux/actions/actions";

export async function insertionSort(dispatch, array, speed) {
  const arr = array.slice();
  for (let i = 0; i < arr.length; i++) {
    let j = i;
    if (j === 0) {
      arr[j].status = "isCorrectPosition";
    } else if (arr[j].val >= arr[j - 1].val) {
      arr[j].status = "isCorrectPosition";
      arr[j - 1].status = "isCorrectPosition";
    } else {
      while (j > 0 && arr[j].val < arr[j - 1].val) {
        arr[j].status = "isWrongPosition";
        arr[j - 1].status = "isWrongPosition";
        await delay(speed, () => handleDispatch(dispatch, setNewArray, arr));
        [arr[j], arr[j - 1]] = [arr[j - 1], arr[j]];
        arr[j].status = "notSorted";
        j--;
        arr[j].status = "isCorrectPosition";
        if (j > 0) {
          arr[j - 1].status = "isCorrectPosition";
        }
        await delay(speed, () => handleDispatch(dispatch, setNewArray, arr));
      }
    }
    await delay(speed, () => handleDispatch(dispatch, setNewArray, arr));
    arr[j].status = "notSorted";
    if (j > 0) {
      arr[j - 1].status = "notSorted";
    }
    await delay(speed, () => handleDispatch(dispatch, setNewArray, arr));
  }
  for (let i = 0; i < arr.length; i++) {
    arr[i].status = "isSorted";
    await delay(speed, () => handleDispatch(dispatch, setNewArray, arr));
  }
}
