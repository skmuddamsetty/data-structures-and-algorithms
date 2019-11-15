/**
 * @param {number[]} A
 * @param {number[]} B
 * @return {number[]}
 */
anagramMappings = (A, B) => {
  let map = {};
  let result = [];
  B.forEach((num, i) => {
    map[num] = i;
  });
  A.forEach(num => {
    result.push(map[num]);
  });
  return result;
};

console.log(anagramMappings([12, 28, 46, 32, 50], [50, 12, 32, 46, 28]));
