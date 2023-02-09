export function diff(a, b) {
  let res;
  if (a > b) {
    res = a - b;
  } else {
    res = b - a;
  }
  return res;
}
