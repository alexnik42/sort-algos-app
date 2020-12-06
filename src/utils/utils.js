export async function delay(delayTime) {
  const timer = ms => new Promise(res => setTimeout(res, ms))
  await timer(delayTime);
}