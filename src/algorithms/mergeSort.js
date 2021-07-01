import { delay, handleDispatch } from "../utils/utils";
import { setNewArray } from "redux/actions/actions";

async function merge(arr, start, mid, end, dispatch, speed) {
  const res = [];
  const auxiliaryRes = [];

  let k = start;
  let m = mid + 1;

  while (k <= mid && m <= end) {
    const target = JSON.parse(JSON.stringify(arr));
    if (arr[k].val <= arr[m].val) {
      target[k].status = "isCorrectPosition";
      target[m].status = "isCorrectPosition";
      auxiliaryRes.push(
        res.concat(target.slice(k, mid + 1).concat(target.slice(m, end + 1)))
      );
      res.push(arr[k++]);
    } else {
      target[k].status = "isWrongPosition";
      target[m].status = "isWrongPosition";
      auxiliaryRes.push(
        res.concat(target.slice(k, mid + 1).concat(target.slice(m, end + 1)))
      );

      const auxTarget = JSON.parse(JSON.stringify(arr));
      auxTarget[k].status = "isCorrectPosition";

      res.push(arr[m++]);

      const prevState = JSON.parse(JSON.stringify(res));
      prevState[prevState.length - 1].status = "isCorrectPosition";
      auxiliaryRes.push(
        prevState.concat(
          auxTarget.slice(k, mid + 1).concat(auxTarget.slice(m, end + 1))
        )
      );
    }
    if (end - start + 1 === arr.length) {
      res[res.length - 1].status = "isSorted";
    }
  }

  while (k <= mid) {
    res.push(arr[k++]);
    if (end - start + 1 === arr.length) {
      res[res.length - 1].status = "isSorted";
    }
    auxiliaryRes.push(
      res.concat([...arr].slice(k, mid + 1).concat([...arr].slice(m, end + 1)))
    );
  }

  while (m <= end) {
    res.push(arr[m++]);
    if (end - start + 1 === arr.length) {
      res[res.length - 1].status = "isSorted";
    }
    auxiliaryRes.push(
      res.concat([...arr].slice(k, mid + 1).concat([...arr].slice(m, end + 1)))
    );
  }

  for (let i = 0; i < auxiliaryRes.length; i++) {
    for (let j = start; j <= end; j++) {
      arr[j] = auxiliaryRes[i][j - start];
    }
    await delay(speed, () => handleDispatch(dispatch, setNewArray, arr));
  }
}

async function doMergeSort(dispatch, array, start, end, speed) {
  if (start === end) {
    return;
  }
  let mid = Math.floor((start + end) / 2);
  await doMergeSort(dispatch, array, start, mid, speed);
  await doMergeSort(dispatch, array, mid + 1, end, speed);
  await merge(array, start, mid, end, dispatch, speed);
}

export function mergeSort(dispatch, array, speed) {
  doMergeSort(dispatch, array, 0, array.length - 1, speed);
}
