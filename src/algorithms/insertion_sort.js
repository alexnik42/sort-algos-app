import { delay } from "../utils/utils";

export async function insertionSort(arr, setArray, delayTime) {
  for (let i = 0; i < arr.length; i++) {
    let j = i - 1;
    let key = arr[i];
    while (j >= 0 && arr[j].val > key.val) {
      await delay(delayTime);
      arr[j + 1] = arr[j];
      j--;
      setArray([...arr]);
    }
    arr[j + 1] = key;
    setArray([...arr]);
  }

  for (let i = 0; i < arr.length; i++) {
    await delay(delayTime);
    arr[i].isFinalPosition = true;
    setArray([...arr]);
  }
}
