export async function delay(delayTime, callback) {
  const timer = (ms) => new Promise((res) => setTimeout(res, ms));
  await timer(1000 / delayTime);
  callback();
}

export function handleDispatch(dispatch, action, arr) {
  dispatch(action(arr.slice()));
}

export function getRandomIntInclusive(min, max) {
  min = Math.ceil(min);
  max = Math.floor(max);
  return Math.floor(Math.random() * (max - min + 1)) + min;
}

export function getNumWidth(length, windowWidth) {
  if (windowWidth < 950 && windowWidth >= 650) {
    return 2;
  } else if (windowWidth < 650) {
    return 1;
  } else {
    return length < 5
      ? 16
      : length < 8
      ? 14
      : length < 11
      ? 12
      : length < 20
      ? 10
      : length < 50
      ? 6
      : length < 75
      ? 4
      : 2;
  }
}

export function getNumFontSize(numWidth) {
  return numWidth > 70
    ? 20
    : numWidth > 60
    ? 18
    : numWidth > 50
    ? 16
    : numWidth > 40
    ? 14
    : numWidth > 30
    ? 12
    : numWidth > 20
    ? 10
    : 8;
}
