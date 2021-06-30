export async function delay(delayTime, callback) {
  const timer = (ms) => new Promise((res) => setTimeout(res, ms));
  await timer(1000/delayTime);
  callback();
}

export function handleDispatch(dispatch, action, arr) {
  dispatch(action(arr.slice()));
}
