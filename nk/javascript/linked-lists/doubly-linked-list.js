class ListNode {
  constructor(data) {
    this.data = data;
    this.next = null;
    this.prev = null;
  }
}

insertIntoDoublyLinkedList = () => {
  let headNode = new ListNode(1);
  let newNode = new ListNode(2);
  newNode.next = headNode;
  headNode.prev = newNode;
  console.log(headNode);
  return headNode;
};

let headNode = insertIntoDoublyLinkedList();
