/**
 * @param {number[]} nums
 * @return {boolean}
 */
containsDuplicate = nums => {
  let map = {};
  for (let num of nums) {
    if (map[num] > 0) return true;
    map[num] = 1;
  }
  return false;
};

console.log(containsDuplicate([1, 2, 3, 1]));
