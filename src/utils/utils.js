const MAX_DELAY = 60;

export async function delay(delayTime) {
  const timer = (ms) => new Promise((res) => setTimeout(res, ms));
  await timer(MAX_DELAY - delayTime);
}
