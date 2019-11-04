mergeSort = (arr = []) => {
  console.log(new Date().getMilliseconds());
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
  console.log('Final Merged and Sorted Array: ' + mergedArr);
};

// merge([1, 10, 50], [2, 14, 99, 100]);
let startTime = new Date().getMilliseconds();
const mergedArr = mergeSort([8, 3, 5, 4, 6, 7, 1, 2]);
let endTime = new Date().getMilliseconds();
console.log(
  'Completed Sorting in :' + (endTime - startTime) / 1000 + ' seconds'
);
console.log('Final Sorted Array using Merge Sort: ' + mergedArr);
