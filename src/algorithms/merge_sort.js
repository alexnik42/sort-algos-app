import {delay} from '../utils/utils';

export async function mergeSort(arr, setArray) {

  console.log(arr)
  async function merge(l, r, setArray) {
    let res = [];
    let l_idx = 0;
    let r_idx = 0;

    while (l_idx < l.length && r_idx < r.length) {
      if (l[l_idx].val < r[r_idx].val) {
        res.push(l[l_idx]);
        l_idx++;
      } else {
        res.push(r[r_idx]);
        r_idx++;
      }
    }

    if (l_idx < l.length) {
      res = res.concat(l.slice(l_idx))
    }
    if (r_idx < r.length) {
      res = res.concat(r.slice(r_idx))
    }

    return res;
  }
  if (arr.length <= 1) {
    return arr;
  }

  const mid = Math.floor(arr.length/2);
  const l = await mergeSort(arr.slice(0,mid), setArray);
  const r = await mergeSort(arr.slice(mid), setArray);
  
  const ans = await merge(l, r, setArray);
  await delay(30);
  setArray([...ans]);
  return ans;
};