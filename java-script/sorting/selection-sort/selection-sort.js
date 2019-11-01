selectionSort = (arr = []) => {
  let length = arr.length - 1;
  let start = 0;
  while (start < length) {
    let minValIdx = start;
    for (let i = start; i < length; i++) {
      if (arr[i] < arr[minValIdx]) {
        minValIdx = i;
      }
    }
    let temp = arr[start];
    arr[start] = arr[minValIdx];
    arr[minValIdx] = temp;
    start++;
    console.log(arr);
  }
  console.log('Final Sorted Array: ' + arr);
};

selectionSort([3, 44, 47, 5, 38, 15]);
