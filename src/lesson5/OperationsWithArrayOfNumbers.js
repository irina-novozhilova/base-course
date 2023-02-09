export const nums = [10, 12, 17, 23, 4, 11, 13, 18, 9, 54];

export function sumOfArrayElements() {
  let sum = 0;
  let max = nums[0];
  let min = nums[0];

  nums.forEach((el) => {
    sum += el;

    if (max < el) {
      max = el;
    }

    if (min > el) {
      min = el;
    }
  });

  console.log(sum);
  console.log(max, min);
}

export function doubleSumOfArrayElements() {
  return nums.map((el) => el * 2);
}
