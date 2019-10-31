class ListNode {
  constructor(data) {
    this.next = null;
    this.data = data;
  }
}

class SinglyLinkedList {
  constructor() {
    this.head = null;
  }

  insertNode(data) {
    if (this.head === null || this.head === undefined) {
      this.head = new ListNode(data);
      return;
    }
    let tempNode = this.head;
    while (tempNode.next) {
      tempNode = tempNode.next;
    }
    tempNode.next = new ListNode(data);
    return;
  }

  printListNodes(head = this.head, message = 'Original Linked List: ') {
    if (head === null || head === undefined) {
      console.log('No Nodes in Linked List' + '\n');
      return;
    }
    let str = '';
    while (head) {
      str += head.data + ' --> ';
      head = head.next;
    }
    str += 'null';
    console.log(message + str + '\n');
    return str;
  }

  /**
   * Brute Force Solution
   * Time Complexity: O(n2), for scanning the remaining list (from current node) for each node.
   * Space Complexity: O(1).
   */
  nthNodeFromEndOfLinkedListUsingBruteForce(n = 1, head = this.head) {
    let tempHead = head;
    let outerHead = head;
    let count = 0;
    while (outerHead) {
      while (tempHead.next) {
        tempHead = tempHead.next;
        count++;
      }
      if (count === n - 1) {
        this.printListNodes(
          outerHead,
          'Nth Node from the end of the linked list using Brute force: '
        );
        break;
      }
      outerHead = outerHead.next;
      tempHead = outerHead;
      count = 0;
    }
  }

  /**
   *
   * @param {*} n
   * @param {*} head
   * In this approach, create a hash table whose entries are < position of node, node address >. That
   * means, key is the position of the node in the list and value is the address of that node.
   * By the time we traverse the complete list (for creating the hash table), we can find the list length.
   * Let us say the list length is M. To find nth from the end of linked list, we can convert this to M - n
   * + 1th from the beginning. Since we already know the length of the list, it is just a matter of
   * returning M - n+ 1th key value from the hash table.
   * Time Complexity: Time for creating the hash table, Therefore, T(m) = O(m). Space Complexity:
   * Since we need to create a hash table of size m, O(m).
   */
  nthNodeFromEndOfLinkedListUsingHashTable(n = 1, head = this.head) {
    let obj = {};
    let count = 0;
    while (head) {
      obj[head.data] = head;
      head = head.next;
      count++;
    }
    this.printListNodes(
      obj[count - n + 1],
      'Nth Node from the end of the linked list using Hash Table: '
    );
  }
}

let sll = new SinglyLinkedList();
sll.printListNodes();
sll.insertNode(1);
sll.insertNode(2);
sll.insertNode(3);
sll.insertNode(4);
sll.printListNodes();
sll.nthNodeFromEndOfLinkedListUsingBruteForce(2);
sll.nthNodeFromEndOfLinkedListUsingHashTable(2);
