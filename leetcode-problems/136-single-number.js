singleNumber = (arr = []) => {
  let result = 0;
  for (let num of arr) {
    result = result ^ num;
  }
  return result;
};

console.log(singleNumberUsingHashTable([2, 2, 1]));
