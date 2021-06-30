import { delay } from "../utils/utils";

export async function mergeSort(arr, setArray, start, end, delayTime) {
  await mergeSortHelper(arr, setArray, start, end);
  for (let i = 0; i < arr.length; i++) {
    await delay(delayTime);
    arr[i].isFinalPosition = true;
    setArray([...arr]);
  }
}

async function mergeSortHelper(arr, setArray, start, end, delayTime) {
  async function merge(arr, start, mid, end, setArray) {
    const res = [];
    let old_start = start;
    let old_mid = mid;
    mid++;

    while (start <= old_mid && mid <= end) {
      if (arr[start].val <= arr[mid].val) {
        res.push(arr[start]);
        start++;
      } else {
        res.push(arr[mid]);
        mid++;
      }
    }

    while (start <= old_mid) {
      res.push(arr[start]);
      start++;
    }

    while (mid <= end) {
      res.push(arr[mid]);
      mid++;
    }

    for (let i = old_start; i <= end; i++) {
      await delay(10000)
      arr[i] = res[i - old_start];
      await setArray([...arr]);
    }
  }

  if (start >= end) {
    return;
  }

  let mid = Math.floor((start + end) / 2);
  await mergeSortHelper(arr, setArray, start, mid, delayTime);
  await mergeSortHelper(arr, setArray, mid + 1, end, delayTime);

  await merge(arr, start, mid, end, setArray);
  await setArray([...arr]);
}
