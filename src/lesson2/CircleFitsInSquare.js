export function determineCircleFitsInSquare(circle, square) {
  const r = Math.sqrt(circle / 3.14);
  const a = Math.sqrt(square);
  return 2 * r <= a
    ? "Круг поместится в квадрат"
    : "Круг не поместится в квадрат";
}
