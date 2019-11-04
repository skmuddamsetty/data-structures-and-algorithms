/**
 * Given an array of integers, return indices of the two numbers such that they add up to a specific target.
 *
 * You may assume that each input would have exactly one solution, and you may not use the same element twice.
 */
twoSum = (nums, target) => {
  let map = {};
  let count = 0;
  let diff;
  while (count < nums.length) {
    if (map[nums[count]] === undefined) {
      diff = target - nums[count];
      map[diff] = count;
    } else {
      return [map[nums[count]], count];
    }
    count++;
  }
};

let arr = twoSum([3, 2, 4], 6);
console.log(arr);
