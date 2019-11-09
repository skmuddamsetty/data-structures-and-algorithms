reverseInteger = number => {
  let remainder = 0;
  let reversed = 0;
  let original = number;
  number = Math.abs(number);
  const max = Math.pow(2, 31);
  while (number != 0) {
    remainder = number % 10;
    reversed = reversed * 10 + remainder;
    if (reversed > max || reversed < -max) return 0;
    number = Math.floor(number / 10);
  }
  return original < 0 ? reversed * -1 : reversed;
};

console.log(reverseInteger(1534236469));
