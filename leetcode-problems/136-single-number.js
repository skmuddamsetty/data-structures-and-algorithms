singleNumber = (arr = []) => {
  let result = 0;
  for (let num of arr) {
    result = result ^ num;
  }
  return result;
};

singleNumberUsingHashTable = (arr = []) => {
  let map = {};
  for (let num of arr) {
    if (map[num] != undefined) {
      map[num] = undefined;
    } else {
      map[num] = num;
    }
  }
  return map;
};

console.log(singleNumberUsingHashTable([2, 2, 1]));
