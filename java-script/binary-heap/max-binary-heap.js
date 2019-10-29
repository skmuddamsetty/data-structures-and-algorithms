{
  class MaxBinaryHeap {
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
        parentIndex = this.getParentIndex(lastIndex, values);
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
  }

  let mbh = new MaxBinaryHeap();
  mbh.insert(41);
  mbh.insert(39);
  mbh.insert(33);
  mbh.insert(18);
  mbh.insert(27);
  mbh.insert(12);
  mbh.insert(55);
  mbh.insert(45);
  mbh.insert(199);
}
