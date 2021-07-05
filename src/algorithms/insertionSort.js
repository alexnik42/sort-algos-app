import { delay, handleDispatch } from "../utils/utils";
import { setNewArray } from "redux/actions/actions";

export async function insertionSort(dispatch, array, speed) {
  const arr = array.slice();
  for (let i = 0; i < arr.length; i++) {
    let j = i;
    if (j > 0) {
      arr[j].status = "is-correct-position";
      arr[j - 1].status = "is-correct-position";
      await delay(speed, () => handleDispatch(dispatch, setNewArray, arr));
    }
    while (j > 0 && arr[j].val < arr[j - 1].val) {
      arr[j].status = "is-wrong-position";
      arr[j - 1].status = "is-wrong-position";
      await delay(speed, () => handleDispatch(dispatch, setNewArray, arr));
      [arr[j], arr[j - 1]] = [arr[j - 1], arr[j]];
      arr[j].status = "is-correct-position";
      arr[j - 1].status = "is-correct-position";
      await delay(speed, () => handleDispatch(dispatch, setNewArray, arr));
      arr[j].status = "not-sorted";
      arr[j - 1].status = "not-sorted";
      j--;
      await delay(speed, () => handleDispatch(dispatch, setNewArray, arr));
    }
    if (j > 0) {
      arr[j].status = "is-correct-position";
      arr[j - 1].status = "is-correct-position";
      await delay(speed, () => handleDispatch(dispatch, setNewArray, arr));
      arr[j].status = "not-sorted";
      arr[j - 1].status = "not-sorted";
      await delay(speed, () => handleDispatch(dispatch, setNewArray, arr));
    }
  }
  await delay(speed, () => handleDispatch(dispatch, setNewArray, arr));

  for (let i = arr.length - 1; i >= 0; i--) {
    arr[i].status = "is-sorted";
    await delay(speed, () => handleDispatch(dispatch, setNewArray, arr));
  }
}
