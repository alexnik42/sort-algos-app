import { delay, handleDispatch } from "../utils/utils";
import { setNewArray } from "redux/actions/actions";

export async function insertionSort(dispatch, array, speed) {
  const arr = array.slice();
  for (let i = 0; i < arr.length; i++) {
    let j = i;
    if (j > 0) {
      arr[j].status = "columnCorrectPosition";
      arr[j - 1].status = "columnCorrectPosition";
      await delay(speed, () => handleDispatch(dispatch, setNewArray, arr));
    }
    while (j > 0 && arr[j].val < arr[j - 1].val) {
      arr[j].status = "columnWrongPosition";
      arr[j - 1].status = "columnWrongPosition";
      await delay(speed, () => handleDispatch(dispatch, setNewArray, arr));
      [arr[j], arr[j - 1]] = [arr[j - 1], arr[j]];
      arr[j].status = "columnCorrectPosition";
      arr[j - 1].status = "columnCorrectPosition";
      await delay(speed, () => handleDispatch(dispatch, setNewArray, arr));
      arr[j].status = "columnNotSorted";
      arr[j - 1].status = "columnNotSorted";
      j--;
      await delay(speed, () => handleDispatch(dispatch, setNewArray, arr));
    }
    if (j > 0) {
      arr[j].status = "columnCorrectPosition";
      arr[j - 1].status = "columnCorrectPosition";
      await delay(speed, () => handleDispatch(dispatch, setNewArray, arr));
      arr[j].status = "columnNotSorted";
      arr[j - 1].status = "columnNotSorted";
      await delay(speed, () => handleDispatch(dispatch, setNewArray, arr));
    }
  }
  await delay(speed, () => handleDispatch(dispatch, setNewArray, arr));

  for (let i = arr.length - 1; i >= 0; i--) {
    arr[i].status = "columnIsSorted";
    await delay(speed, () => handleDispatch(dispatch, setNewArray, arr));
  }
}
