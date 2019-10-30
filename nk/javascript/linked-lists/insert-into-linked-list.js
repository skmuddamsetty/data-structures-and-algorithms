class ListNode {
  constructor(data) {
    this.data = data;
    this.next = null;
  }
}

insertIntoLinkedList = () => {
  let headNode = new ListNode(1);
  headNode.next = new ListNode(2);
  return headNode;
};

insertNewNodeBeforeTheHead = (headNode, data) => {
  let newNode = new ListNode(data);
  newNode.next = headNode;
  console.log('insertNewNodeBeforeTheHead \n', newNode);
  return newNode;
};

insertNewNodeAfterTheTail = (headNode, data) => {
  let newNode = new ListNode(data);
  let currNode = headNode;
  while (currNode.next !== null) {
    currNode = currNode.next;
  }
  currNode.next = newNode;
  console.log('insertNewNodeAfterTheTail \n', headNode);
};

insertNewNodeAtPosition = (headNode, position, data) => {
  let counter = 0;
  while (counter < position && headNode) {
    headNode = headNode.next;
    counter++;
  }
  if (headNode && position >= 0) {
    let newNode = new ListNode(data);
    newNode.next = headNode.next;
    headNode.next = newNode;
    console.log(headNode);
  } else {
    console.log('Invalid Position');
  }
};

deleteFirstNode = headNode => {
  if (headNode === null || headNode === undefined) return -1;
  let tempNode = headNode;
  headNode = tempNode.next;
  tempNode = null;
  return headNode;
};

deleteLastNode = headNode => {
  // 3-->1-->2-->5-->4-->null
  if (headNode === null || headNode === undefined) return -1;
  let tempNode = headNode;
  if (tempNode.next === null) {
    return null;
  }
  while (tempNode.next && tempNode.next.next) {
    tempNode = tempNode.next.next;
  }
  tempNode.next = null;
  return headNode;
};

let headNode = insertIntoLinkedList();
headNode = insertNewNodeBeforeTheHead(headNode, 3);
insertNewNodeAfterTheTail(headNode, 4);
insertNewNodeAtPosition(headNode, 2, 5);
console.log('Deleting the First Node \n', deleteFirstNode(headNode));
console.log('Deleting the Last Node \n', deleteLastNode(headNode));
