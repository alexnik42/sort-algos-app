import { delay, handleDispatch } from "../utils/utils";
import { setNewArray } from "redux/actions/actions";

export async function insertionSort(dispatch, array, speed) {
  const arr = array.slice();
  for (let i = 0; i < arr.length; i++) {
    let j = i;
    if (j > 0) {
      arr[j].status = "isCorrectPosition";
      arr[j - 1].status = "isCorrectPosition";
      await delay(speed, () => handleDispatch(dispatch, setNewArray, arr));
    }
    while (j > 0 && arr[j].val < arr[j - 1].val) {
      arr[j].status = "isWrongPosition";
      arr[j - 1].status = "isWrongPosition";
      await delay(speed, () => handleDispatch(dispatch, setNewArray, arr));
      [arr[j], arr[j - 1]] = [arr[j - 1], arr[j]];
      arr[j].status = "isCorrectPosition";
      arr[j - 1].status = "isCorrectPosition";
      await delay(speed, () => handleDispatch(dispatch, setNewArray, arr));
      arr[j].status = "notSorted";
      arr[j - 1].status = "notSorted";
      j--;
      await delay(speed, () => handleDispatch(dispatch, setNewArray, arr));
    }
    if (j > 0) {
      arr[j].status = "isCorrectPosition";
      arr[j - 1].status = "isCorrectPosition";
      await delay(speed, () => handleDispatch(dispatch, setNewArray, arr));
      arr[j].status = "notSorted";
      arr[j - 1].status = "notSorted";
      await delay(speed, () => handleDispatch(dispatch, setNewArray, arr));
    }
  }
  await delay(speed, () => handleDispatch(dispatch, setNewArray, arr));

  for (let i = arr.length - 1; i >= 0; i--) {
    arr[i].status = "isSorted";
    await delay(speed, () => handleDispatch(dispatch, setNewArray, arr));
  }
}
