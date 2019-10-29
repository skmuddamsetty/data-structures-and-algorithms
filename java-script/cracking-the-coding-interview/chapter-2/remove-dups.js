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
     * This solution uses map object to store the visited linked lists data
     * Time Complexity: O(N)
     * Space Complexity: O(N)
     */
    removeDupsSol1(head = this.head) {
      let map = {};
      let result = head; // to return the modified result
      let prev = null; // default the prev to null
      while (head && head.next !== undefined) {
        // where there are elements in the head.next
        if (map[head.val] !== undefined) {
          // if the value is already visited overwrite the next value of the prev element with the next element
          prev.next = head.next;
          this.length--;
        } else {
          map[head.val] = true;
          prev = head;
        }
        head = head.next;
      }
      return result;
    }

    /**
     * This solution does not use extra space like Solution 1.
     * This approach uses runner and current technique to solve the problem
     * @param {Node} head of the linked list
     * Time Complexity: O(N^2)
     * Space Complexity: O(1)
     */
    removeDupsSol2(head = this.head) {
      let current = head;
      while (current != null) {
        let runner = current;
        while (runner.next != null) {
          if (runner.next.val === current.val) {
            runner.next = runner.next.next;
            this.length--;
          } else {
            runner = runner.next;
          }
        }
        current = current.next;
      }
      return head;
    }
  }

  var list = new SinglyLinkedList();
  list.push(100);
  list.push(100);
  list.push(100);
  list.push(100);
  list.removeDupsSol2();
}
