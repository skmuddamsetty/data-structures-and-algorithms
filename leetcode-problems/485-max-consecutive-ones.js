/**
 * @param {number[]} nums
 * @return {number}
 * Complexity Analysis
 *
 *    Time Complexity: O(N), where N is the number of elements in the array.
 *
 *    Space Complexity: O(1). We do not use any extra space.
 *
 */
findMaxConsecutiveOnes = nums => {
  let currMaxCount = 0;
  let currentCount = 0;
  for (let num of nums) {
    if (num === 1) {
      currentCount++;
    } else {
      if (currMaxCount < currentCount) {
        currMaxCount = currentCount;
      }
      currentCount = 0;
    }
  }
  if (currMaxCount < currentCount) {
    currMaxCount = currentCount;
  }
  return currMaxCount;
};

console.log(findMaxConsecutiveOnes([1, 1, 0, 1, 1, 1]));
