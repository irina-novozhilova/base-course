export function showDigitsSum() {
  let number = +prompt("Введите трехзначное число ");
  const hundreds = +(number / 100).toFixed(0);
  number -= hundreds * 100;
  const dozens = +(number / 10).toFixed(0);
  const units = number - dozens * 10;
  console.log(hundreds + dozens + units);
}
