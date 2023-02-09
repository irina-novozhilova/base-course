export function isTriangleRight(a, b, c) {
  const res1 = a * a + b * b === c * c;
  const res2 = b * b + c * c === a * a;
  const res3 = a * a + c * c === b * b;
  return res1 || res2 || res3;
}
