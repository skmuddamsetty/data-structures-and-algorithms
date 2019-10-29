{
  /**
   * 10.1 Sorted Merge: Your are given two sorted arrays, A and B, where A has a large enough buffer at the end to hold B.
   * Write a method to merge B into A in sorted order.
   * @param {Array} a input array 1
   * @param {Array} b input array 2
   */
  function sortedMerge(a, b) {
    let lastA = getLastIndex(a); // get the first undefined element index in array
    let lastB = b.length; // since b is a non-empty array we take the length of the array
    return helper(a, b, lastA, lastB);
  }

  /**
   * @returns {Number} the position of the first undefined element in the array
   * @param {Array} arr input array
   */
  function getLastIndex(arr) {
    for (let i = 0; i < arr.length; i++) {
      if (arr[i] === undefined) {
        return i;
      }
    }
    return arr.length;
  }

  /**
   *
   * @param {Array} a input array
   * @param {Array} b input array
   * @param {Number} lastA position of the last undefined element in the array
   * @param {Number} lastB length of the array b
   */
  function helper(a, b, lastA, lastB) {
    let indexA = lastA - 1; // subtract -1 to get the last filled index in array a
    let indexB = lastB - 1; // subtract -1 to get the last filled index in array b
    let indexMerged = lastB + lastA - 1; // calculate the first to be filled index in arr a. -or- this can be array a.length-1
    while (indexB >= 0) {
      // while there are elements in the array b we keep checking
      // if the array a is not exhausted and the element in array a is greater than element in array b
      if (indexA >= 0 && a[indexA] > b[indexB]) {
        a[indexMerged] = a[indexA]; // assign the element to the empty space in array a and decrement the indexA--
        // decrement the indexA-- because we have used the element from array a
        indexA--;
      } else {
        // take the element from array b since element from b is greater than element in array a
        a[indexMerged] = b[indexB];
        // decrement the indexB-- because we have used the element from array b
        indexB--;
      }
      // decerement the indexMerged for every iteration
      indexMerged--;
    }
    return a;
  }

  sortedMerge([1, 10, , ,], [2, 3, 4]);
}
