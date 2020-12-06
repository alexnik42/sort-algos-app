import { delay } from "../utils/utils";

export async function bubbleSort(arr, setArray) {
  for (let i = 0; i < arr.length; i++) {
    for (let j = 0; j < arr.length - i - 1; j++) {
      await delay(10);
      arr[j].isCurrent = true;
      if (arr[j].val > arr[j + 1].val) {
        [arr[j], arr[j + 1]] = [arr[j + 1], arr[j]];
      }
      arr[j].isCurrent = false;
      setArray([...arr]);
    }
    arr[arr.length - i - 1].isFinalPosition = true;
  }
  setArray([...arr]);
}
