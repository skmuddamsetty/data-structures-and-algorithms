pivot = (arr, start = 0, end = arr.length - 1) => {
  let pivot = arr[start];
  let swapIdx = start;
  for (let i = start + 1; i < arr.length; i++) {
    if (pivot > arr[i]) {
      swapIdx++;
      // these swaps are to make sure we are moving the elements
      // which are lesser than the current element to the left
      // of the array and the elements that are greater than the
      // current element to the right of the array
      let temp = arr[i];
      arr[i] = arr[swapIdx];
      arr[swapIdx] = temp;
    }
  }
  // this swap is to get the current element to the right place in the array
  let temp = arr[start];
  arr[start] = arr[swapIdx];
  arr[swapIdx] = temp;
  return swapIdx;
};

quickSort = (arr, left = 0, right = arr.length - 1) => {
  if (left < right) {
    let pivotIdx = pivot(arr, left, right);
    quickSort(arr, left, pivotIdx - 1);
    quickSort(arr, pivotIdx + 1, right);
  }
  return arr;
};

// pivot([8, 3, 5, 4, 6, 7, 1, 2]);
let quickSortedArray = quickSort([8, 3, 5, 4, 6, 7, 1, 2]);
console.log(quickSortedArray);
