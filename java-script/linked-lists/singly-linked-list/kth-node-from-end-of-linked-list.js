/**
 * Remove Dups: Write code to remove duplicates from an unsorted linked list
 * Solution #1
 */
{
  class Node {
    constructor(val) {
      this.val = val;
      this.next = null;
    }
  }

  class Index {
    constructor() {
      this.value = 0;
    }
  }

  class SinglyLinkedList {
    constructor() {
      this.head = null;
      this.length = 0;
    }

    push(val) {
      var newNode = new Node(val);
      if (!this.head) {
        this.head = newNode;
        this.tail = this.head;
      } else {
        this.tail.next = newNode;
        this.tail = newNode;
      }
      this.length++;
      return this;
    }

    /**
     * Prints the Kth Element to the last of the linked list.
     * If K = 1 returns the last element and if K = 2 it returns the last but second element.
     * This solution can be used only if we know the length of the linked list
     * @param {Node} head of the linked list
     * @param {Number} k
     */
    returnKthToLastSol1(head = this.head, k) {
      if (k > this.length) return head;
      let kthToLastElem = this.length - k;
      let current = head;
      while (kthToLastElem > 0) {
        current = current.next;
        kthToLastElem--;
      }
      return current;
    }

    /**
     *
     * @param {Node} head of the linked list
     * @param {Number} k
     * Space Complexity: O(N) due to recursive calls
     * Time Complexity: O(N) because all elements have to be visited
     */

    returnKthToLastSol2(head = this.head, k) {
      // define base case
      if (head === null) {
        return 0;
      }
      // add one to each iteration so that while the methods in the stacks are being popped we add 1 to each method starting from the end
      let index = this.returnKthToLastSol2(head.next, k) + 1;
      if (index === k) {
        console.log('Kth Element to the last is:' + head.val);
      }
      return index;
    }

    /**
     *
     * @param {Node} head of the linked list
     * @param {Number} k
     * Space Complexity: O(N) due to recursive calls
     * Time Complexity: O(N) because all elements have to be visited
     */
    returnKthToLastSol3(head = this.head, k) {
      let index = new Index();
      return this.kthToLastElemHelper(head, k, index); // this uses a wrapper class Index to store the value and uses pass by reference, to retain the values through all frames in the stack
      // return this.kthToLastElemHelper1(head, k, 0); this solution does not work as we are not using pass by reference for the index and index value is lost as soon as the frame is popped from the stack
    }

    // uses pass by reference by making use of the wrapper class
    kthToLastElemHelper(head, k, index) {
      // define base case
      if (head === null) return null;
      let node = this.kthToLastElemHelper(head.next, k, index);
      index.value = index.value + 1;
      if (index.value === k) return head;
      return node;
    }

    // does not use pass by reference
    kthToLastElemHelper1(head, k, index) {
      // define base case
      if (head === null) return null;
      let node = this.kthToLastElemHelper1(head.next, k, index);
      index = index + 1;
      if (index === k) return head;
      return node;
    }

    /**
     * This will use the technique of two pointers.
     * First pointer moves untill k position and then from there Second pointer moves untill the first pointer is     null
     * @param {Node} head of the linked list
     * @param {Number} k
     * Space Complexity: O(1)
     * Time Complexity: O(N) because all elements have to be visited
     */
    returnKthToLastSol4(head = this.head, k) {
      let runner = head;
      let catcher = head;
      while (k > 0) {
        runner = runner.next;
        k--;
      }
      while (runner != null) {
        runner = runner.next;
        catcher = catcher.next;
      }
      return catcher;
    }
  }

  var list = new SinglyLinkedList();
  list.push(100);
  list.push(200);
  list.push(300);
  list.push(400);
  list.returnKthToLastSol4(list.head, 0);
}
