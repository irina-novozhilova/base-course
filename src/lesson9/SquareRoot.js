export function solveSquareRoot() {
  const data = prompt("Enter a,b,c");
  const arr = data.split(",");
  const a = +arr[0];
  const b = +arr[1];
  const c = +arr[2];

  const D = b * b - 4 * a * c;
  const x1 = (-b + Math.sqrt(D)) / (2 * a);
  const x2 = (-b - Math.sqrt(D)) / (2 * a);

  if (!x1 && !x2) {
    return undefined;
  }

  return x1 === x2 ? { x1 } : { x1, x2 };
}
