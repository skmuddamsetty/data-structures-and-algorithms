bubbleSort = (arr = []) => {
  let length = arr.length;
  let start = 0;
  let swapped = false;
  while (length > 0) {
    swapped = false;
    for (let i = start; i < arr.length; i++) {
      if (arr[i] > arr[i + 1]) {
        let temp = arr[i];
        arr[i] = arr[i + 1];
        arr[i + 1] = temp;
        swapped = true;
      }
    }
    if (!swapped) {
      break;
    }
    console.log(arr);
    start = start + 1;
    length--;
  }
  console.log('Final Sorted Array: ' + arr);
};

bubbleSort([3, 44, 38, 5, 47, 15]);
