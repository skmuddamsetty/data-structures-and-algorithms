isPalindrome = number => {
  let str = number + '';
  let start = 0;
  let end = str.length - 1;
  while (start < end) {
    if (str.charAt(start++) != str.charAt(end--)) return false;
  }
  return true;
};

isPalindromeWithOutConvertingToString = number => {
  if (number < 0) return false;
  let remainder;
  let reversed = 0;
  let original = number;
  while (number != 0) {
    remainder = number % 10; // reversed integer is stored in variable
    reversed = reversed * 10 + remainder; // multiply reversed by 10 then add the remainder so it gets stored at next decimal place.
    number = Math.floor(number / 10); //the last digit is removed from num after division by 10.
  }
  // palindrome if original and reversed are equal
  return original === reversed;
};

console.log(isPalindrome(121));
console.log(isPalindromeWithOutConvertingToString(2772));
