/**
 * This program extracts the max value from heap
 * and sinks the last value in the array to the correct position
 */
{
  class ExtractMaxFromBinaryHeap {
    constructor() {
      this.values = [];
    }

    insert(key) {
      this.values.push(key);
      return this.bubbleUp(this.values);
    }

    bubbleUp(values = []) {
      if (values.length <= 1) {
        return values;
      }
      let temp;
      let lastIndex = values.length - 1;
      let parentIndex = this.getParentIndex(lastIndex);
      while (values[lastIndex] > values[parentIndex]) {
        temp = values[lastIndex];
        values[lastIndex] = values[parentIndex];
        values[parentIndex] = temp;
        lastIndex = parentIndex;
        parentIndex = this.getParentIndex(lastIndex);
      }
      return values;
    }

    getParentIndex(index, values) {
      return Math.floor((index - 1) / 2);
    }

    getLeftChildIndex(index, values) {
      return 2 * index + 1 > values.length - 1 ? -1 : 2 * index + 1;
    }

    getRightChildIndex(index, values) {
      return 2 * index + 2 > values.length - 1 ? -1 : 2 * index + 2;
    }

    extractMax(values = []) {
      if (values.length <= 1) {
        return values;
      }
      values[0] = values[values.length - 1];
      values.pop();
      this.sinkDown(values);
      return values;
    }

    sinkDown(values = []) {
      let index = 0;
      let leftChildIndex;
      let rightChildIndex;
      leftChildIndex = this.getLeftChildIndex(index, values);
      rightChildIndex = this.getRightChildIndex(index, values);
      let maxIndex = 0;
      while (
        values[maxIndex] < values[leftChildIndex] ||
        values[maxIndex] < values[rightChildIndex]
      ) {
        if (
          rightChildIndex === -1 ||
          values[leftChildIndex] > values[rightChildIndex]
        ) {
          maxIndex = leftChildIndex;
        } else {
          maxIndex = rightChildIndex;
        }
        let temp = values[maxIndex];
        values[maxIndex] = values[index];
        values[index] = temp;
        index = maxIndex;
        leftChildIndex = this.getLeftChildIndex(maxIndex, values);
        rightChildIndex = this.getRightChildIndex(maxIndex, values);
      }
      return values;
    }
  }

  let mbh = new MaxBinaryHeap();
  let values = [];
  mbh.insert(41);
  mbh.insert(39);
  mbh.insert(33);
  mbh.insert(18);
  mbh.insert(27);
  values = mbh.insert(12);
  mbh.extractMax(values);
}
