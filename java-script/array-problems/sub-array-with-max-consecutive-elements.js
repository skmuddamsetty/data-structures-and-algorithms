/**
 * Find largest sub-array formed by consecutive integers
 * Given an array of integers, find largest sub-array formed by consecutive integers.
 * The sub-array should contain all distinct values.
 * https://www.techiedelight.com/find-largest-sub-array-formed-by-consecutive-integers/
 */
{
  /**
   *
   * @param {Array} arr sorted or unsorted input array
   */
  function subArrayWithMaxConsecutiveElements(arr = []) {
    const set = new Set(arr);
    let max = 0;
    for (let item of set) {
      if (set.has(item - 1)) continue;
      let length = 0;
      while (set.has(item++)) length++;
      max = Math.max(length, max);
    }
    return max;
  }

  subArrayWithMaxConsecutiveElements([4, 2, 1, 6, 5]);
}
