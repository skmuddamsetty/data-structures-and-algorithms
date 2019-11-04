mergeSort = (arr = []) => {
  if (arr.length <= 1) return arr; // base case
  let mid = Math.floor(arr.length / 2);
  let left = mergeSort(arr.slice(0, mid));
  let right = mergeSort(arr.slice(mid));
  return merge(left, right);
};

merge = (arr1 = [], arr2 = []) => {
  let i = 0;
  let j = 0;
  let mergedArr = [];
  while (i < arr1.length && j < arr2.length) {
    if (arr1[i] > arr2[j]) {
      mergedArr.push(arr2[j]);
      j++;
    } else {
      mergedArr.push(arr1[i]);
      i++;
    }
  }
  while (i < arr1.length) {
    mergedArr.push(arr1[i]);
    i++;
  }
  while (j < arr2.length) {
    mergedArr.push(arr2[j]);
    j++;
  }
  return mergedArr;
};

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
    start = start + 1;
    length--;
  }
  return arr;
};

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
  return arr;
};

let startTime = new Date().getMilliseconds();
const mergedArr = mergeSort([8, 3, 5, 4, 6, 7, 1, 2]);
let endTime = new Date().getMilliseconds();
console.log(
  'Completed Merge Sorting in :' + (endTime - startTime) / 1000 + ' seconds'
);
console.log('Final Sorted Array using Merge Sort: ' + mergedArr);

startTime = new Date().getMilliseconds();
let bubbleSortedArray = bubbleSort([8, 3, 5, 4, 6, 7, 1, 2]);
endTime = new Date().getMilliseconds();
console.log(
  'Completed Bubble Sorting in :' + (endTime - startTime) / 1000 + ' seconds'
);
console.log('Bubble Sorted Array: ' + bubbleSortedArray);

startTime = new Date().getMilliseconds();
let insertionSortedArray = insertionSort([8, 3, 5, 4, 6, 7, 1, 2]);
endTime = new Date().getMilliseconds();
console.log(
  'Completed Insertion Sorting in :' + (endTime - startTime) / 1000 + ' seconds'
);
console.log('Insertion Sorted Array: ' + insertionSortedArray);
