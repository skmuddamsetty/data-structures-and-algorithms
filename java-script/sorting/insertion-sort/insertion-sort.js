insertionSort = (arr = []) => {
  let end = 1;
  let start = 0;
  let noOfLoops = arr.length - 1;
  while (noOfLoops > 0) {
    for (let i = end; i > start; i--) {
      if (arr[i] < arr[i - 1]) {
        let temp = arr[i];
        arr[i] = arr[i - 1];
        arr[i - 1] = temp;
      }
      end = end + 1;
    }
    noOfLoops--;
  }
  console.log(arr);
  return arr;
};
insertionSort([3, 44, 38, 5, 47, 15]);
