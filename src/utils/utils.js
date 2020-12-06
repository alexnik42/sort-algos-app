export async function delay() {
  const timer = ms => new Promise(res => setTimeout(res, ms))
  await timer(5);
}