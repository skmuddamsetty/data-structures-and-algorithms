/**
 * @param {number} N
 * @return {boolean}
 */
isArmstrong = N => {
  let sum = 0;
  let length = Math.ceil(Math.log10(N + 1));
  let digits = N;
  while (digits > 0) {
    let digit = digits % 10;
    sum += Math.pow(digit, length);
    digits = Math.floor(digits / 10);
  }
  return N === sum;
};

console.log(isArmstrong(153));
