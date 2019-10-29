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
        this.tail.next = newNode;
        this.tail = newNode;
      }
      this.length++;
      return this;
    }

    /**
     * This solution is without recursion
     * @param {Node} head of the linked list
     * Time Complexity: O(n)
     * Space Complexity: O(n)
     */
    reverseLinkedListSol1(head = this.head) {
      let temp,
        nextNode = null;
      while (head != null) {
        nextNode = head.next;
        head.next = temp;
        temp = head;
        head = nextNode;
      }
      return temp;
    }
  }

  var list = new SinglyLinkedList();

  list.push(100);
  list.push(201);
  list.push(250);
  list.push(350);

  list.reverseLinkedList();
}
