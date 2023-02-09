export function pow(a, x) {
  let res = a;
  if (x === 0) {
    return 1;
  } 
    for (let i = 1; i < x; i += 1) {
      res *= a;
    }
    return res;
  
}
