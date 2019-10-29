{
  class PriorityQueue {
    constructor() {
      this.values = [];
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

    enqueue(node) {
      this.values.push(node);
      this.bubbleUp(this.values);
    }

    dequeue(values = this.values) {
      if (values.length <= 1) {
        return values;
      }
      values[0] = values[values.length - 1];
      values.pop();
      let index = 0;
      let leftChildIndex;
      let rightChildIndex;
      leftChildIndex = this.getLeftChildIndex(index, values);
      rightChildIndex = this.getRightChildIndex(index, values);
      let maxIndex = 0;
      while (
        (leftChildIndex !== -1 &&
          values[maxIndex].priority > values[leftChildIndex].priority) ||
        (rightChildIndex !== -1 &&
          values[maxIndex].priority > values[rightChildIndex].priority)
      ) {
        if (
          rightChildIndex === -1 ||
          values[leftChildIndex].priority < values[rightChildIndex].priority
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
      console.log(values);
      return values;
    }

    bubbleUp(values = []) {
      if (values.length <= 1) {
        return values;
      }
      let temp;
      let lastIndex = values.length - 1;
      let parentIndex = this.getParentIndex(lastIndex);
      while (
        parentIndex !== -1 &&
        values[lastIndex].priority < values[parentIndex].priority
      ) {
        temp = values[lastIndex];
        values[lastIndex] = values[parentIndex];
        values[parentIndex] = temp;
        lastIndex = parentIndex;
        parentIndex = this.getParentIndex(lastIndex, values);
      }
      console.log('enqueue', values);
      return values;
    }
  }

  class Node {
    constructor(priority, val) {
      this.val = val;
      this.priority = priority;
    }
  }

  let mpq = new PriorityQueue();
  mpq.enqueue(new Node(300, 'This is the first value'));
  mpq.enqueue(new Node(22000, 'This is the second value'));
  mpq.enqueue(new Node(100, 'This is the first value'));
  mpq.enqueue(new Node(150, 'This is the first value'));
  mpq.dequeue();
}
