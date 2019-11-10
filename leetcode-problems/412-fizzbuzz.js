/**
 * @param {number} n
 * @return {string[]}
 */
fizzBuzz = n => {
  let start = 1;
  let array = new Array(n);
  let multipleOf3 = false;
  let multipleOf5 = false;
  while (start <= n) {
    multipleOf3 = start % 3 === 0;
    multipleOf5 = start % 5 === 0;
    if (multipleOf3 && multipleOf5) {
      array[start - 1] = 'FizzBuzz';
    } else if (multipleOf3) {
      array[start - 1] = 'Fizz';
    } else if (multipleOf5) {
      array[start - 1] = 'Buzz';
    } else {
      array[start - 1] = start + '';
    }
    start++;
  }
  return array;
};

fizzBuzzSol1 = n => {
  let start = 1;
  let array = new Array(n);
  let multipleOf3 = false;
  let multipleOf5 = false;
  let str = '';
  while (start <= n) {
    multipleOf3 = start % 3 === 0;
    multipleOf5 = start % 5 === 0;
    if (multipleOf3) {
      str = 'Fizz';
    }
    if (multipleOf5) {
      str += 'Buzz';
    }
    if (str.trim().length === 0) {
      str += start + '';
    }
    array[start - 1] = str;
    str = '';
    start++;
  }
  return array;
};

console.log(fizzBuzzSol1(3));
