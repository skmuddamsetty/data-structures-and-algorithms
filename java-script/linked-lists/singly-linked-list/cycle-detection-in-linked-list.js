/**
 * Give an algorithm to find the cycle in the linked list
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
     * This solution uses Set to identify if there are already visited node's address in the Set.
     * If there are addresses of the nodes that are already visited it indicates that there is a circular dependency in the linked list
     * @param {Node} head of the linked list
     * Time Complexity: O(n)
     * Space Complexity: O(n)
     */
    detectCycleSol1(head = this.head) {
      if (head === null) return false;
      let set = new Set();
      while (head != null) {
        head = head.next;
        if (set.has(head)) {
          return true;
        } else {
          set.add(head);
        }
      }
      return false;
    }

    /**
     * This solution uses Floyd technique
     * i.e., uses two pointers, runner and catcher
     * where runner is one node ahead than the catcher
     * @param {Node} head of the linked list
     * Time Complexity: O(n)
     * Space Complexity: O(1)
     */
    detectCycleSol2(head = this.head) {
      let catcher = head;
      let runner = head;
      while (catcher != null && runner != null && runner.next != null) {
        runner = runner.next.next;
        catcher = catcher.next;
        if (runner === catcher) return true;
      }
      return false;
    }

    /**
     * This solution uses Floyd technique
     * i.e., uses two pointers, runner and catcher
     * where runner is one node ahead than the catcher
     * @param {Node} head of the linked list
     * Time Complexity: O(n)
     * Space Complexity: O(1)
     */
    detectCycleAndReturnStartOfTheLinkedList(head = this.head) {
      let runner = head;
      let catcher = head;
      while (catcher != null && runner != null && runner.next != null) {
        runner = runner.next.next;
        catcher = catcher.next;
        if (runner === catcher) {
          catcher = head;
          while (runner != catcher) {
            runner = runner.next;
            catcher = catcher.next;
          }
          return catcher;
        }
      }
      return false;
    }
  }

  var list = new SinglyLinkedList();

  list.push(100);
  list.push(201);
  list.push(250);
  list.push(350);
  list.detectCycleAndReturnStartOfTheLinkedList();
}
