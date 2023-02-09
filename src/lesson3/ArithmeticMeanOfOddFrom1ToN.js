export function showArithmeticMeanOfOddFrom1ToN() {
  const n = prompt("Введите число");
  let sum = 0;
  let count = 0;

  for (let i = 1; i <= n; i += 2) {
    count += 1;
    sum += i;
  }

  const middle = sum / count;
  console.log(middle);
}
