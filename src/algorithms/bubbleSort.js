import { delay, handleDispatch } from "../utils/utils";
import { setNewArray } from "redux/actions/actions";

export async function bubbleSort(dispatch, array, speed) {
  const arr = array.slice();
  for (let i = 0; i < arr.length; i++) {
    for (let j = 0; j < arr.length - i - 1; j++) {
      arr[j].status = "isCorrectPosition";
      arr[j + 1].status = "isCorrectPosition";
      await delay(speed, () => handleDispatch(dispatch, setNewArray, arr));
      if (arr[j].val > arr[j + 1].val) {
        arr[j].status = "isWrongPosition";
        arr[j + 1].status = "isWrongPosition";
        await delay(speed, () => handleDispatch(dispatch, setNewArray, arr));
        [arr[j], arr[j + 1]] = [arr[j + 1], arr[j]];
        arr[j].status = "notSorted";
      }
      arr[j].status = "notSorted";
      await delay(speed, () => handleDispatch(dispatch, setNewArray, arr));
    }
    arr[arr.length - 1 - i].status = "isSorted";
  }
  await delay(speed, () => handleDispatch(dispatch, setNewArray, arr));
}
