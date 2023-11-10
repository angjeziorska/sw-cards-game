export function getRandom(itemCount: number) {
  return Math.max(0, Math.floor(Math.random() * itemCount) - 1);
}
