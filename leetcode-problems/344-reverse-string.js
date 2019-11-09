/**
 * @param {character[]} s
 * @return {void} Do not return anything, modify s in-place instead.
 */
reverseString = s => {
  let start = 0;
  let end = s.length - 1;
  while (start < end) {
    swap(s, start, end);
    start++;
    end--;
  }
  return s;
};

swap = (arr, i, j) => {
  let temp = arr[i];
  arr[i] = arr[j];
  arr[j] = temp;
};

console.log(reverseString(['H', 'a', 'n', 'n', 'a', 'h']));
