reverseInteger = number => {
  let remainder = 0;
  let reversed = 0;
  let original = number;
  number = Math.abs(number);
  while (number != 0) {
    remainder = number % 10;
    if (
      reversed > Number.MAX_VALUE / 10 ||
      (reversed == Number.MAX_VALUE / 10 && remainder > 7)
    )
      return 0;
    if (
      reversed < Number.MIN_VALUE / 10 ||
      (reversed == Number.MIN_VALUE / 10 && remainder < -8)
    )
      return 0;
    reversed = reversed * 10 + remainder;
    number = Math.floor(number / 10);
  }
  //   console.log(Number.MAX_VALUE / 10);
  return original < 0 ? reversed * -1 : reversed;
};

console.log(reverseInteger(1534236469));
