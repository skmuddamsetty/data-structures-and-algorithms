/**
 * Find element appearing maximum number of times in the array
 */
{
  /**
   *
   * @param {Array} arr input array
   * Time Complexity: O(nlogn) for sorting
   * Space Complexity: O(1)
   */
  function findElementAppearingMaxNumberOfTimes(arr) {
    // to sort the array use heap sort as heap sort is in place and uses constant space O(1)
    arr = arr.sort();
    let max = Number.MIN_VALUE;
    let counter = 0;
    let elem = 0;
    let currElement = arr[0];
    for (let i = 1; i < arr.length; i++) {
      if (currElement === arr[i]) {
        counter++;
      } else {
        if (counter > max) {
          max = counter;
          elem = currElement;
        }
        currElement = arr[i];
        counter = 0;
      }
    }
    if (counter > max) {
      return currElement;
    }
    return elem;
  }

  /**
   * Other way of solving the problem
   * @param {Array} arr input array
   * This solution uses map to store the count of the elements
   * element which has max count in the map is the element we are looking for.
   * Time Complexity: O(n)
   * Space Complexity: O(n)
   */
  function findMaxElemUsingMap(arr) {
    let map = {};
    let maxCount = Number.MIN_VALUE;
    let element;
    // construct map
    for (let i = 0; i < arr.length; i++) {
      if (map[arr[i]] != undefined) {
        map[arr[i]] = map[arr[i]] + 1;
      } else {
        map[arr[i]] = 1;
      }
    }
    // loop through the map and assign the elem with maxcount
    Object.keys(map).forEach(key => {
      if (map[key] > maxCount) {
        maxCount = map[key];
        element = key;
      }
    });
    return element;
  }

  findMaxElemUsingMap([3, 2, 1, 2, 2, 1, 1, 1, 1, 1]);
}
