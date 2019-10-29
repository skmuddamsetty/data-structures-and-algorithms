/**
 * Give an algorithm to find the cycle in the linked list and return the length of the loop
 */
{
  class Node {
    constructor(val) {
      this.val = val;
      this.next = null;
    }
  }

  class SinglyLinkedList {
    constructor() {
      this.head = null;
      this.tail = null;
      this.length = 0;
    }
    push(val) {
      var newNode = new Node(val);
      if (!this.head) {
        this.head = newNode;
        this.tail = this.head;
      } else {
        // this.tail.next = newNode;
        this.tail.next = this.head; // this line creates circle
        this.tail = newNode;
      }
      this.length++;
      return this;
    }

    /**
     * This solution uses Floyd technique
     * i.e., uses two pointers, runner and catcher
     * where runner is one node ahead than the catcher
     * @param {Node} head of the linked list
     * Time Complexity: O(n)
     * Space Complexity: O(1)
     */
    detectCycleAndReturnLengthOfLoop(head = this.head) {
      let runner = head;
      let catcher = head;
      let lengthOfLoop = 0;
      while (catcher != null && runner != null && runner.next != null) {
        runner = runner.next.next;
        catcher = catcher.next;
        if (runner === catcher) {
          runner = runner.next;
          while (runner != catcher) {
            runner = runner.next;
            lengthOfLoop++;
          }
          return lengthOfLoop;
        }
      }
      return lengthOfLoop;
    }
  }

  var list = new SinglyLinkedList();

  list.push(100);
  list.push(201);
  list.push(250);
  list.push(350);
  list.detectCycleAndReturnLengthOfLoop();
}
