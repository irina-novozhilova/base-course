export function showLengthAndSquare() {
  const input = prompt("Enter R");

  const circL = 2 * Math.PI * input;
  const circA = Math.PI * input * input;

  console.log(Math.floor(circL), Math.floor(circA));
}
